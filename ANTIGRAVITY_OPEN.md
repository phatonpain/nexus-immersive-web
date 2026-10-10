# DevPremium Dark — pacote para Antigravity

## Abrir localmente

```bash
npm install --legacy-peer-deps
npm run check
npm run dev:static
```

Alternativa usando pnpm:

```bash
pnpm install
pnpm check
pnpm dev:static
```

O preview gerado anteriormente está em `client/dist`. Para rodar o servidor de homologação Vite isolado:

```bash
npx vite --config vite.preview.config.mjs --configLoader runner --host 0.0.0.0 --port 5005 --strictPort
```

## Estrutura principal

- `client/src/pages/Home.tsx` — homepage e Hero.
- `client/src/components/ParticleBackground.tsx` — partículas Canvas 2D.
- `client/src/components/GlassHeroScene.tsx` — cena 3D React Three Fiber.
- `client/src/components/SmoothScroll.tsx` — Lenis + GSAP ScrollTrigger.
- `client/src/index.css` — design system, tipografia fluida e glassmorphism.
- `vite.preview.config.mjs` — config isolada para preview.
- `outputs` não faz parte deste pacote; os relatórios ficam fora do código-fonte.

`node_modules`, caches e logs foram removidos do pacote para evitar um arquivo gigante e permitir instalação limpa no Antigravity.
