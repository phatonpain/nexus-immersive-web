#!/usr/bin/env python3
"""Validate global Spline stacking and interactive UI in an isolated Chromium."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path(__file__).resolve().parents[1] / 'artifacts/global-spline'
OUT.mkdir(parents=True, exist_ok=True)
results = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/chromium', args=['--no-sandbox', '--enable-unsafe-swiftshader'])
    for width, reduced, failure in [(1280,False,False),(768,False,False),(390,False,False),(320,False,False),(1280,True,False),(1280,False,True)]:
        page = browser.new_page(viewport={'width':width,'height':900}, reduced_motion='reduce' if reduced else 'no-preference')
        errors, requests = [], []
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('request', lambda r: requests.append(r.url) if 'scene.splinecode' in r.url else None)
        if failure:
            page.route('**/scene.splinecode', lambda r: r.fulfill(status=503, body='Unavailable'))
        page.goto('http://127.0.0.1:3200', wait_until='load')
        expected = 'static' if width < 768 or reduced else 'error' if failure else 'ready'
        page.wait_for_function('(s)=>document.querySelector(".global-spline-background")?.dataset.splineState===s', arg=expected, timeout=90000)
        page.wait_for_timeout(1200)
        assert page.locator('.global-spline-background').count()==1
        geometry=page.locator('.global-spline-background').evaluate('''e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();return {position:s.position,z:s.zIndex,width:r.width,height:r.height,blend:s.mixBlendMode}}''')
        assert geometry=={'position':'fixed','z':'-10','width':width,'height':900,'blend':'normal'},geometry
        canvas_hits=[]
        if expected=='ready':
            assert page.locator('canvas').count()==1
            for section in ['.hero','#servicos','#processo']:
                page.locator(section).evaluate('e=>e.scrollIntoView({block:"start",behavior:"instant"})')
                page.wait_for_timeout(900)
                hit=page.evaluate('''()=>{const c=document.querySelector('.global-spline-canvas canvas');const points=[[8,450],[innerWidth-8,450],[innerWidth*.78,180]];return points.map(([x,y])=>({x,y,hit:document.elementFromPoint(x,y)===c}));}''')
                assert any(x['hit'] for x in hit),hit
                canvas_hits.append({'section':section,'points':hit})
            page.mouse.move(width-8,450)
        else:
            assert page.locator('canvas').count()==0
        for selector in ['.hero-actions a','.site-header .nav-cta','#servicos .card-arrow']:
            control=page.locator(selector).first
            if not control.is_visible():continue
            control.evaluate('e=>e.scrollIntoView({block:"center",behavior:"instant"})');page.wait_for_timeout(700)
            assert control.evaluate('''e=>{const r=e.getBoundingClientRect();return e.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2))}'''),selector
        page.locator('.hero-actions a').first.click();page.wait_for_timeout(1300)
        assert page.url.endswith('#contato')
        page.locator('input[name=name]').fill('Teste Nexus')
        page.locator('input[name=email]').fill('teste@example.com')
        page.locator('select[name=project]').select_option(label='Site institucional')
        page.locator('textarea[name=message]').fill('Validação do formulário demonstrativo.')
        page.locator('.contact-form button').click()
        assert 'demonstrativos' in page.locator('.form-feedback').inner_text()
        faq=page.locator('.faq-item button').nth(1);faq.click();assert faq.get_attribute('aria-expanded')=='true'
        if width<701:
            page.locator('.menu-toggle').click();assert page.locator('#main-navigation').is_visible()
            page.keyboard.press('Escape');assert page.locator('.menu-toggle').get_attribute('aria-expanded')=='false'
        assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
        assert not errors,errors
        if expected=='static':assert not requests,requests
        if width in [1280,390] and not reduced and not failure:
            page.evaluate('window.scrollTo(0,0)');page.wait_for_timeout(1200);page.screenshot(path=str(OUT/f'hero-{width}.png'))
        results.append({'width':width,'reducedMotion':reduced,'inducedFailure':failure,'state':expected,'geometry':geometry,'canvasHits':canvas_hits,'requests':requests,'errors':errors,'ctaFormFaqPassed':True})
        print(f'PASS {width} reduced={reduced} failure={failure}',flush=True)
        page.close()
    browser.close()
(OUT/'results.json').write_text(json.dumps(results,indent=2)+'\n')
print('PASS: 6 global Spline scenarios')
