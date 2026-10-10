"""Checks dirigidos da landing page, sem publicação nem envio de dados."""
import json
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
PREVIEW = "https://8328-iiahbbawoz4ucvl8lvjas-8d7d5e8c.us3.manus.computer"
RESULTS = []


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


server = ThreadingHTTPServer(("127.0.0.1", 0), partial(QuietHandler, directory=str(ROOT / "dist/public")))
threading.Thread(target=server.serve_forever, daemon=True).start()
STATIC = f"http://127.0.0.1:{server.server_port}"

try:
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path="/usr/bin/chromium", headless=True, args=["--no-sandbox"])
        for source, base, widths in [("preview", PREVIEW, [320, 390, 768, 1280]), ("static-build", STATIC, [390, 1280])]:
            for width in widths:
                context = browser.new_context(viewport={"width": width, "height": 844}, reduced_motion="reduce")
                page = context.new_page()
                errors = []
                page.on("pageerror", lambda e: errors.append(str(e)))
                if source == "static-build":
                    def storage(route):
                        response = route.fetch(url=PREVIEW + urlparse(route.request.url).path)
                        route.fulfill(response=response)
                    page.route("**/manus-storage/**", storage)
                page.goto(base, wait_until="networkidle")
                page.locator(".concept-card-trigger").first.wait_for()
                assert page.locator("h1").count() == 1
                assert page.evaluate("document.documentElement.scrollWidth <= innerWidth")
                if width <= 700:
                    toggle = page.locator(".menu-toggle")
                    toggle.click()
                    assert toggle.get_attribute("aria-expanded") == "true"
                    assert page.evaluate("document.activeElement.closest('#main-navigation')!==null")
                    page.keyboard.press("Escape")
                    assert toggle.get_attribute("aria-expanded") == "false"
                    assert toggle.evaluate("e => e === document.activeElement")
                dialogs = []
                for index in range(3):
                    trigger = page.locator(".concept-card-trigger").nth(index)
                    trigger.focus()
                    page.keyboard.press("Enter")
                    modal = page.locator("[role=dialog]")
                    modal.wait_for(state="visible")
                    page.wait_for_timeout(300)
                    rect = modal.bounding_box()
                    assert modal.get_attribute("aria-modal") == "true"
                    assert rect["x"] >= 0 and rect["y"] >= 0
                    assert rect["x"] + rect["width"] <= width + 1
                    assert modal.evaluate("e=>e.scrollWidth<=e.clientWidth")
                    assert modal.evaluate("e=>e.contains(document.activeElement)")
                    page.keyboard.press("Tab")
                    page.keyboard.press("Tab")
                    assert modal.evaluate("e=>e.contains(document.activeElement)")
                    dialogs.append(modal.locator("h2").inner_text())
                    page.keyboard.press("Escape")
                    modal.wait_for(state="hidden")
                    page.wait_for_timeout(200)
                    assert trigger.evaluate("e=>e===document.activeElement")
                motion = page.locator(".service-card").first.evaluate("e=>({animation:getComputedStyle(e).animationName, delay:getComputedStyle(e).animationDelay, reduced:matchMedia('(prefers-reduced-motion: reduce)').matches})")
                assert motion["reduced"] and motion["animation"] == "none" and motion["delay"] == "0s"
                assert page.locator("a[href^='mailto:'],a[href^='https://wa.me']").count() == 0
                for image in page.locator(".artwork-slot-image").all():
                    image.scroll_into_view_if_needed()
                    image.evaluate("e=>new Promise((resolve,reject)=>{if(e.complete){e.naturalWidth>0?resolve():reject('broken image');return;}e.onload=resolve;e.onerror=()=>reject('broken image');})")
                assert page.locator(".artwork-slot-image").count() == 6
                assert not errors, errors
                RESULTS.append({"source": source, "width": width, "overflow": False, "dialogs": dialogs, "menu": "passed" if width <= 700 else "desktop", "reduced_motion": motion, "six_images": "loaded", "page_errors": errors})
                print(f"PASS {source} {width}px — diálogos, foco, imagem e movimento reduzido", flush=True)
                context.close()
        context = browser.new_context(viewport={"width": 1280, "height": 844})
        page = context.new_page()
        page.route("**/manus-storage/canva-services_*.jpg", lambda r: r.fulfill(status=503, body="test unavailable"))
        page.goto(PREVIEW, wait_until="networkidle")
        page.locator(".services-art-slot").scroll_into_view_if_needed()
        fallback = page.locator(".services-art-slot [role=status]")
        fallback.wait_for(state="visible")
        RESULTS.append({"source": "preview", "fallback_503": "passed", "message": fallback.inner_text()})
        context.close()
        browser.close()
finally:
    server.shutdown()

output = ROOT / "research/VALIDACAO_PREVIEW.json"
output.write_text(json.dumps(RESULTS, ensure_ascii=False, indent=2) + "\n")
print(f"Relatório: {output}", flush=True)
