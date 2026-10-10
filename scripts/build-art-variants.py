#!/usr/bin/env python3
"""Gera variantes WebP responsivas (srcset) das artes do site.

Uso: python3 scripts/build-art-variants.py <saida_dir>
Lê as fontes de art-hires/ e grava <slot>-<largura>.webp + manifest.json.
Larguras são escolhidas para cobrir 1x, 2x e 3x do tamanho renderizado de cada slot.
"""
import json
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCES = {
    # slot: (arquivo-fonte, larguras alvo)
    "hero": ("art-hires/hero-upscaled.png", [480, 960, 1440, 1664]),
    "process": ("art-hires/process-upscaled.png", [480, 960, 1440, 1664]),
    "values": ("art-hires/values-upscaled.png", [640, 1280, 1600, 2080]),
    "plans": ("art-hires/plans-upscaled.png", [480, 960, 1600, 2176]),
    "services": ("client/public/images/canva-services.jpg", [480, 800, 1200, 1600]),
    "portfolio": ("art-hires/portfolio-upscaled.png", [640, 1280, 1920, 2560]),
}


def main() -> None:
    out = Path(sys.argv[1] if len(sys.argv) > 1 else ROOT / "art-hires/variants")
    out.mkdir(parents=True, exist_ok=True)
    manifest = {}
    for slot, (src, widths) in SOURCES.items():
        path = ROOT / src
        if not path.exists():
            print(f"skip {slot}: {src} ausente")
            continue
        image = Image.open(path).convert("RGB")
        entries = []
        for width in sorted({min(w, image.width) for w in widths}):
            height = round(image.height * width / image.width)
            resized = image if width == image.width else image.resize((width, height), Image.LANCZOS)
            target = out / f"{slot}-{width}.webp"
            resized.save(target, "WEBP", quality=82, method=6)
            entries.append({"width": width, "height": height, "file": target.name, "kb": round(target.stat().st_size / 1024)})
        manifest[slot] = {"source": src, "source_size": list(image.size), "variants": entries}
        print(slot, image.size, [(e["width"], e["kb"]) for e in entries])
    (out / "manifest.json").write_text(json.dumps(manifest, indent=2))


if __name__ == "__main__":
    main()
