# Fundo Spline global — Nexus Studio

Implementação realizada exclusivamente no sandbox cloud, branch feat/global-spline-background. App monta uma única PremiumSpline orb; palcos e cenas duplicadas removidos de Home. Root isolado mantém cena fixed 100vw/100vh z-index -10 visível atrás do conteúdo transparente, sem mix-blend-mode ou clipping de seção. Camada de contraste sem eventos; site-shell/main click-through e controles/cards/nav/form reativados. Header/cards/form com vidro dark blur 24px. Mobile abaixo de 768px, reduced-motion e erros usam arte global estática existente. Nenhum asset original Spline foi modificado e a física é a publicada na cena, não uma simulação nova.

## Evidências

- npm run check: exit 0.
- oxlint 1.56.0 em client/src: 84 arquivos, 0 warnings, 0 errors. Correções mínimas de três erros herdados: spread redundante em main e estado não utilizado no showcase. ESLint não foi executado.
- npm test: 2 arquivos, 6 testes passed. Avisos de OAuth não configurado são herdados, nenhum login foi ativado.
- npm run build:static: passed. Aviso de chunks acima de 500 kB do runtime Spline mantido, sem alegação de ganho de Core Web Vitals.
- python3 scripts/verify-global-spline.py: 6 cenários passed em 1280/768/390/320px, reduced-motion e HTTP503 induzido. Canvas global único, fixed z-index -10, hit-test em Hero/Serviços/Processo, CTAs, formulário demonstrativo, FAQ, menu mobile Escape, sem overflow ou page errors. Dados em artifacts/global-spline/results.json e capturas desktop/mobile.

Teste em Chromium isolado via SwiftShader, não certificação de GPU/FPS ou todos os browsers. Nenhum Windows do usuário acessado durante esta implementação. PR para main, sem merge/publicação.
