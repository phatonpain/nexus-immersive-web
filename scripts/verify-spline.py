#!/usr/bin/env python3
"""Verify the supplied Spline scenes without using the user's browser session."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
BASE = 'http://127.0.0.1:3100'
OUT = ROOT / 'research/spline-validation'
OUT.mkdir(parents=True, exist_ok=True)
results = []

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/chromium', args=['--no-sandbox', '--enable-unsafe-swiftshader'])
    for width, reduced, failure in [(1280, False, False), (768, False, False), (390, False, False), (320, False, False), (1280, True, False), (1280, False, True)]:
        page = browser.new_page(viewport={'width': width, 'height': 900}, reduced_motion='reduce' if reduced else 'no-preference')
        errors, scene_requests = [], []
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.on('request', lambda request: scene_requests.append(request.url) if 'scene.splinecode' in request.url else None)
        if failure:
            page.route('**/scene.splinecode', lambda route: route.fulfill(status=503, body='Unavailable'))
        page.goto(BASE, wait_until='load', timeout=60000)
        page.locator('.hero-copy').wait_for()
        enabled = width >= 768 and not reduced
        states = []
        for stage in ['hero', 'services']:
            selector = f'.spline-stage--{stage}'
            page.locator(selector).scroll_into_view_if_needed()
            if enabled:
                expected = 'error' if failure else 'ready'
                page.wait_for_function('(s) => document.querySelector(s)?.querySelector("[data-spline-state]")?.dataset.splineState === "' + expected + '"', arg=selector, timeout=90000)
            page.wait_for_timeout(800)
            state = page.locator(selector).evaluate('''element => {
                const canvas = element.querySelector('canvas');
                const fallback = element.querySelector('.spline-fallback');
                const wrapper = element.querySelector('[data-spline-state]');
                let top = null;
                if (canvas) {
                    const r = canvas.getBoundingClientRect();
                    top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
                }
                return {
                    state: wrapper?.dataset.splineState ?? 'static',
                    type: wrapper?.dataset.splineType,
                    canvas: Boolean(canvas),
                    canvasHit: Boolean(canvas) && top === canvas,
                    pointerEvents: canvas ? getComputedStyle(canvas).pointerEvents : null,
                    fallbackVisible: getComputedStyle(fallback).visibility === 'visible',
                    width: element.getBoundingClientRect().width,
                    height: element.getBoundingClientRect().height
                };
            }''')
            if enabled and not failure:
                assert state['canvas'] and state['canvasHit'] and state['pointerEvents'] == 'auto', state
                assert not state['fallbackVisible'], state
                page.locator(f'{selector} canvas').hover()
            else:
                assert not state['canvas'] and state['fallbackVisible'], state
            states.append({'stage': stage, **state})
        # Hit testing is done at the CTA's actual viewport position, not by z-index alone.
        ctas = page.locator('.hero-actions a, .site-header .nav-cta, #servicos .inline-link, #servicos .card-arrow')
        hits = []
        for index in range(ctas.count()):
            cta = ctas.nth(index)
            if not cta.is_visible():
                continue
            cta.evaluate('element => element.scrollIntoView({block: "center", behavior: "instant"})')
            page.wait_for_timeout(600)
            hits.append(cta.evaluate('''element => {
                const r = element.getBoundingClientRect();
                return element.contains(document.elementFromPoint(r.x+r.width/2, r.y+r.height/2));
            }'''))
        assert all(hits), hits
        page.locator('.hero-actions a').first.click()
        page.wait_for_timeout(900)
        assert page.url.endswith('#contato')
        overflow = page.evaluate('document.documentElement.scrollWidth > window.innerWidth')
        assert not overflow, width
        if not enabled:
            assert not scene_requests, scene_requests
        if not failure:
            assert not errors, errors
        if width in [1280, 390] and not reduced and not failure:
            page.locator('.hero').scroll_into_view_if_needed()
            page.wait_for_timeout(800)
            page.screenshot(path=str(OUT / f'hero-{width}.png'))
            page.locator('#servicos').scroll_into_view_if_needed()
            page.wait_for_timeout(800)
            page.screenshot(path=str(OUT / f'services-{width}.png'))
        result = {'width': width, 'reducedMotion': reduced, 'inducedFailure': failure, 'stages': states, 'ctaHits': hits, 'ctaClick': True, 'horizontalOverflow': overflow, 'sceneRequests': scene_requests, 'pageErrors': errors}
        results.append(result)
        print(json.dumps(result), flush=True)
        page.close()
    browser.close()

(OUT / 'results.json').write_text(json.dumps(results, indent=2) + '\n')
print('PASS: 6 directed scenarios')
