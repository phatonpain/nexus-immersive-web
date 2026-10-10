# Auditoria de código — Felipe Inácio / Desenvolvimento Web Premium

**Modo:** read-only, sem navegador compartilhado, sem publicação, sem ativação de backend, sem geração de assets e sem Git.
**Escopo:** frontend React 19/TypeScript/Tailwind 4/Framer Motion, servidor e helpers do starter, configs, estilos, docs, manifesto de rotas e artefatos gerados relevantes.

> **Estado histórico:** este relatório registra o código antes da síntese e da validação final de 09/10/2026. As falhas abaixo não devem ser lidas como o estado atual sem consultar [Relatório de implementação](../RELATORIO_IMPLEMENTACAO.md) e [Arquitetura final](../ARQUITETURA_FINAL.md). Diálogos, foco, menu, fallback, motion reduzido, contraste dark e recorte do painel foram corrigidos e verificados posteriormente. Consolidação completa da cascata CSS, fontes locais e metadados sociais continuam como melhorias futuras, não entregas desta fase.

## Resumo executivo

A landing page está organizada como uma one-page pública (`/`) e o typecheck passou. Os quatro formatos **Starter / Professional / Business / Enterprise**, os contatos demonstrativos desativados e as seis artes integradas continuam preservados no código. Não há clientes, depoimentos, métricas de negócio, resultados ou cases reais declarados como reais; há, porém, números fictícios dentro da prévia de dashboard conceitual que devem ser removidos para cumprir literalmente a restrição de não inventar métricas.

O principal risco de estabilidade é evidência histórica recente de **`Invalid hook call` no Radix Dialog**, com a árvore recriada pelo `ErrorBoundary`; isso exige reprodução limpa antes de considerar os novos estudos de Conceitos entregues. Também há um warning repetido de `useScroll`, foco de formulário enfraquecido por `outline: none`, e um fallback de erro do starter que exibe stack trace ao visitante.

Há problemas de polimento e manutenção que afetam a promessa premium: tipografia de microtextos abaixo de 10 px, cascata CSS duplicada com overrides difíceis de prever, animações com atraso residual em reduced motion, menu móvel sem Escape/foco gerenciado e cinco JPEGs locais duplicados no build embora as seis artes da interface apontem para `/manus-storage/`. Nenhum desses pontos foi “confirmado” por captura visual nova; os achados visuais abaixo vêm de fonte/CSS, metadados de assets, logs já existentes e checagens estáticas.

### Checagens executadas

- `pnpm exec tsc --noEmit --incremental false`: **passou**.
- `pnpm test`: **passou — 2 arquivos, 6 testes**.
- `pnpm exec prettier --check client/src server shared drizzle *.ts *.md`: **falhou**, reportando 40 arquivos fora do formato; mistura arquivos próprios e boilerplate do starter.
- Não executei `pnpm build:static`, servidor, Preview ou navegador nesta auditoria, para manter o procedimento read-only e respeitar a instrução de não ativar backend/publicar.

## Inventário

### Código próprio/alcançável da landing page

| Área | Arquivos | Leitura/estado |
| --- | --- | --- |
| Entrada e rota | `client/index.html`, `client/src/main.tsx`, `client/src/App.tsx`, `client/public/manus-routes.json`, `client/public/brand-mark.svg` | Lidos; rota pública `/`, fallback 404 do starter; manifesto declara `/`. |
| Página e interação | `client/src/pages/Home.tsx`, `client/src/components/ConceptProjects.tsx`, `client/src/components/ArtworkSlot.tsx` | Lidos integralmente; mudanças recentes preservadas. |
| Dados editoriais e artes | `client/src/data/site.ts`, `client/src/data/visualAssets.ts` | Lidos integralmente; os quatro planos e os seis `imageUrl` existentes permanecem. |
| Estilos | `client/src/index.css` | Lido integralmente em faixas; inclui tokens, layout, responsividade, slots, conceitos e diálogos. |
| Infra de UI usada pela rota | `client/src/components/ui/dialog.tsx`, `client/src/components/ui/sonner.tsx`, `client/src/components/ui/tooltip.tsx`, `client/src/contexts/ThemeContext.tsx`, `client/src/lib/trpc.ts`, `client/src/const.ts`, `client/src/platform.d.ts` | Lidos; Dialog/Theme/tRPC são starter ou adaptadores usados indiretamente. |
| Proteção/fallback | `client/src/components/ErrorBoundary.tsx`, `client/src/pages/NotFound.tsx` | Lidos; ainda são cópia funcional/linguística do starter. |

### Starter e backend disponível, mas não usado pela página pública

| Área | Arquivos/estado |
| --- | --- |
| Componentes genéricos | `client/src/components/ui/*.tsx` (accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, drawer, dropdown-menu, empty, field, form, hover-card, input, input-group, input-otp, item, kbd, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, switch, table, tabs, textarea, toggle, toggle-group) permanecem boilerplate shadcn/Radix; o módulo Dialog foi revisado por ser relevante aos novos diálogos. |
| Componentes/páginas não alcançados | `client/src/components/AIChatBox.tsx`, `DashboardLayout.tsx`, `DashboardLayoutSkeleton.tsx`, `ManusDialog.tsx`, `Map.tsx`, `client/src/pages/ComponentShowcase.tsx`, `client/src/_core/hooks/useAuth.ts`, `client/src/hooks/*` | Inventariados como boilerplate ou demos do starter; não aparecem no caminho `/` atual. |
| Servidor | `server/_core/index.ts`, `vite.ts`, `context.ts`, `cookies.ts`, `env.ts`, `oauth.ts`, `sdk.ts`, `trpc.ts`, `publicConfig.ts`, `systemRouter.ts`, helpers de API/LLM/imagem/mapa/notificação/storage/voz/heartbeat e tipos; `server/routers.ts`, `server/db.ts`, `server/storage.ts` | Módulos de runtime relevantes lidos; são infraestrutura preparada do starter. A rota pública não chama procedure, banco, login ou envio de formulário. |
| Banco | `drizzle/schema.ts`, `drizzle/relations.ts`, `drizzle/0000_initial_users.sql`, `drizzle/meta/*`, `drizzle/migrations/.gitkeep`, `drizzle.config.ts` | Migração/tabela `users` do starter; nenhum dado comercial da página. |
| Testes | `server/auth.logout.test.ts`, `server/platform.test.ts`, `vitest.config.ts` | Executados via `pnpm test`; 6 passaram. |

### Configuração e documentação

`package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `tsconfig.json`, `vite.config.ts`, `vite.config.ts.bak`, `Dockerfile`, `app.config.ts`, `components.json`, `template.json`, `.gitignore`, `.dockerignore`, `.prettierrc`, `.prettierignore`, `patches/wouter@3.7.1.patch`, `README.md`, `plan.md`, `TODO.md`, `GUIA_VISUAL.md`, `PHOTO_SOURCES.md`, `ANALISE_DO_PDF.md`, `ANALISE_VIDEO_SITE.md` e `video_video_20261008_230641_analysis_20261009_021129.md` foram inventariados; os documentos de escopo, visual, proveniência e vídeo foram lidos. O README do template `web-db-user` em `/home/ubuntu/skills/webdev/templates/web-db-user/README.md` e o skill webdev foram lidos antes da auditoria.

### Assets binários e artefatos gerados

- `client/public/images/canva-hero.jpg` (645×799, 68.378 bytes), `canva-services.jpg` (1600×899, 252.627 bytes), `canva-process.jpg` (645×799, 59.637 bytes), `canva-plans.jpg` (1456×1088, 78.069 bytes) e `canva-values.jpg` (1408×1136, 38.796 bytes) são JPEGs locais.
- A interface não aponta para esses nomes locais: `visualAssets.ts:40-99` aponta para seis URLs `/manus-storage/` — Hero, Serviços, Portfólio (WebP remoto), Processo, Planos e Valores. FAQ e Contato têm `imageUrl: null` e continuam placeholders.
- `dist/public/images/*` contém cópias dos cinco JPEGs; `dist/public/assets/index-*.js/css`, `dist/public/index.html`, `dist/public/manus-routes.json`, `dist/public/api/platform/config.js` e `.manus-logs/*` são artefatos gerados/existentes.
- Os JPEGs, o WebP remoto do Portfólio e qualquer screenshot/vídeo não foram abertos nem avaliados visualmente. As únicas afirmações sobre imagens vêm dos nomes, dimensões, MIME, URLs, alt text e documentação; isso evita alegar leitura visual falsa.

## Achados priorizados

### P1 — Reproduzir imediatamente o crash histórico dos novos Dialogs

- **Local:** `client/src/components/ConceptProjects.tsx:202-242`; `client/src/components/ui/dialog.tsx:22-53` é o wrapper alternativo do starter; `.manus-logs/browserConsole.log:424-436`.
- **Evidência:** o log histórico registra quatro ocorrências de `Invalid hook call`, incluindo `Cannot read properties of null (reading 'useRef')`, stack em `@radix-ui/react-dialog` e a mensagem `The above error occurred in the <Dialog> component`; o ErrorBoundary foi acionado. O log também registra HMR logo depois (`browserConsole.log:442-446`), portanto a causa ainda não está isolada. `pnpm why` encontrou React/ReactDOM 19.2.1 em uma resolução principal, então não se deve atribuir automaticamente o problema a versões duplicadas.
- **Impacto:** se reproduzível em sessão limpa, abrir qualquer “Explorar conceito” pode derrubar a árvore da página e impedir leitura/contato.
- **Correção recomendada:** reproduzir em `pnpm dev` limpo e em build estático, abrindo os três gatilhos. Confirmar uma única instância de React, limpar dependências pré-bundladas/HMR quando necessário e manter uma única estratégia de importação Radix (`@radix-ui/react-dialog` direto ou wrapper local, sem misturar resoluções). Depois verificar Escape, overlay, retorno de foco e cada conteúdo. Não marcar como resolvido apenas porque o typecheck passa.

### P1 — A prévia de dashboard exibe métricas numéricas inventadas

- **Local:** `client/src/components/ConceptProjects.tsx:84-96`.
- **Evidência:** a prévia renderiza `Projetos 08`, `Em andamento 05` e `Concluídos 03`. O texto de estudo em `ConceptProjects.tsx:37-39` diz que os dados são fictícios, mas a restrição do projeto é não inventar métricas; o número ainda aparece como métrica de produto antes de o visitante abrir o diálogo.
- **Correção recomendada:** remover contagens e usar rótulos qualitativos (`visão geral`, `em andamento`, `concluído`) ou uma marca explícita “exemplo sem métrica real” no próprio bloco. Preservar o selo `CONCEITUAL` e o aviso do estudo, sem transformar números demonstrativos em prova ou resultado.

### P1 — Foco de teclado dos campos é enfraquecido por `outline: none`

- **Local:** `client/src/index.css:50`, `149` e `462`.
- **Evidência:** há um foco global `:focus-visible` com outline azul, mas a regra mais específica dos inputs/select/textarea em `149` declara `outline: none`; o estado de foco passa a depender de uma borda violeta e sombra semitransparente (`rgba(139,92,246,.13)`). Em fundos claros, `#9b9ba3` sobre `#f7f7f5` tem aproximadamente 2,57:1 e `#a5a5ac` sobre `#fcfcfb` aproximadamente 2,38:1; são cores pequenas/placeholder, não um indicador robusto de foco.
- **Correção recomendada:** não remover o outline nativo sem substituto sólido; criar estado `:focus-visible` específico com cor escura da marca (`#1d4ed8` ou equivalente), espessura/offset consistentes e contraste verificável. Testar Tab em todos os campos e não apenas clique/mouse.

### P1 — Fallback de erro do starter vaza stack trace e quebra a voz pt-BR

- **Local:** `client/src/components/ErrorBoundary.tsx:24-51`.
- **Evidência:** a tela renderiza `this.state.error?.stack` em `<pre>` para qualquer visitante e usa `An unexpected error occurred.` / `Reload Page` em inglês, enquanto o produto e `client/index.html:2` são pt-BR.
- **Impacto:** exposição de caminhos, bundles e detalhes internos em falhas públicas; experiência inconsistente justamente quando a página está instável.
- **Correção recomendada:** em produção mostrar mensagem curta em pt-BR, ação de recarregar e, se necessário, um identificador não sensível; enviar stack somente para logging controlado. Manter detalhes técnicos restritos a desenvolvimento. Esse é boilerplate, mas está no caminho alcançável pela rota.

### P2 — Menu móvel não implementa Escape nem gestão de foco

- **Local:** `client/src/pages/Home.tsx:53-113`; `client/src/index.css:165`.
- **Evidência:** `menuOpen` só alterna por clique (`onClick`); o menu fecha ao ativar links, mas não há handler de Escape, retorno de foco ao botão, foco inicial no primeiro link ou fechamento por clique fora. Em mobile o `nav` alterna apenas `display: none/flex`.
- **Correção recomendada:** tratar como disclosure navegável: fechar com Escape, devolver foco ao `menu-toggle`, colocar foco no primeiro item ao abrir e fechar ao clicar fora sem capturar indevidamente o foco. Verificar 320 e 390 px com teclado/switch control; não transformar o menu em modal se a UX não exigir isso.

### P2 — `useScroll` do parallax gera warning repetido

- **Local:** `client/src/pages/Home.tsx:235-255`; `client/src/index.css:411-413`.
- **Evidência:** `ValuesArtwork` usa `useScroll({ target: photoRef, offset: [...] })`, mas `.values-artwork-viewport` não declara posição não-estática. O `.manus-logs/browserConsole.log:192-431` contém repetidamente `Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.`
- **Correção recomendada:** declarar `position: relative` no viewport ou configurar explicitamente o container/target conforme a API do Framer; testar o scroll com valores e reduced motion e confirmar que o warning desapareceu. O warning é evidência histórica do Preview, não uma captura nova feita nesta auditoria.

### P2 — Reduced motion ainda conserva atrasos de animação CSS

- **Local:** `client/src/pages/Home.tsx:384-410` (Framer trata `useReducedMotion`); `client/src/index.css:91`, `114`, `153-154`, `181-183`.
- **Evidência:** a página reduz os movimentos do Framer e o parallax mapeia para `[0, 0]`, mas `.hero-visual` usa `animation: reveal-up .9s .12s both` e `.floating-note` usa `float-in 1s .45s both`. A media query de reduced motion reduz duração para `.01ms`, mas não zera `animation-delay` nem cancela o nome da animação. O log `browserConsole.log:357-441` também registra o aviso do Framer para reduced motion.
- **Correção recomendada:** em `prefers-reduced-motion: reduce`, zerar delays e desligar animações decorativas (`animation: none !important`) ou deixá-las instantâneas sem manter elementos invisíveis; testar com a preferência do sistema ativa, inclusive após reload.

### P2 — Microtipografia abaixo de tamanho confortável para leitura

- **Local:** `client/src/index.css:71`, `99-103`, `119`, `127`, `141`, `147-151`, `401-404`, `561-564`, `614-623`.
- **Evidência:** há textos funcionais com `font-size` de 5–10 px: resumo de três mensagens chega a 5–6 px, status/legendas a 5–7 px, bullets de planos a 8 px, labels de formulário a 9 px, categorias de conceito a 9 px e texto do diálogo a 11–13 px. Além do tamanho, alguns cinzas medidos ficam abaixo de 4,5:1 para texto pequeno.
- **Correção recomendada:** estabelecer mínimo de 11–12 px para conteúdo e labels funcionais, aumentar line-height e reservar 6–8 px apenas para decoração não essencial. Escurecer placeholders/metadata ou garantir que não carreguem informação necessária. Validar em 320/390/768/1280; não usar a captura histórica como prova de legibilidade.

### P2 — Cascata CSS duplicada aumenta instabilidade responsiva

- **Local:** `client/src/index.css:7-28` e `264-271` (tokens repetidos); `91` e `202-210`/`242-247` (`hero-visual`); `143` e `233-245`/`254-260` (`principles`); `151` e `465-472` (`site-footer`); `82-83` e `455-456` (`button-primary`).
- **Evidência:** as mesmas propriedades são redefinidas em blocos posteriores e media queries tardias. Por exemplo, `hero-visual` passa de `min-height: 408px` para `620px` e depois para `0` em mobile; footer começa escuro e é convertido para claro mais adiante; `principles-section` muda de colunas em mais de um bloco. O CSS pode funcionar por ordem de cascata, mas fica fácil quebrar 768/desktop ao refinar uma regra anterior.
- **Correção recomendada:** consolidar tokens e cada componente em uma única seção, manter overrides de breakpoint juntos e documentar somente exceções intencionais. Revalidar as quatro larguras pedidas após a limpeza; não fazer essa refatoração como parte desta auditoria read-only.

### P2 — Fonte de assets duplicada e sem fallback de falha

- **Local:** `client/src/data/visualAssets.ts:29-123`; `vite.config.ts:183-188`; `client/src/components/ArtworkSlot.tsx:47-56`.
- **Evidência:** os seis slots integrados apontam para `/manus-storage/...`, enquanto cinco JPEGs equivalentes permanecem em `client/public/images/` e são copiados para `dist/public/images/` por `publicDir`, embora não apareçam nas URLs do mapa. O `<img>` não tem `onError` nem fallback textual/visual se a rota de storage retornar erro. A disponibilidade do storage não foi testada nesta auditoria, portanto 404 é risco, não defeito confirmado.
- **Correção recomendada:** escolher uma única fonte canônica sem remover as seis artes: ou referenciar conscientemente os arquivos locais, ou retirar cópias locais não usadas em mudança aprovada mantendo os originais no storage. Acrescentar estado de erro acessível e, para imagens responsivas, `srcset`/`sizes` quando a fonte final estiver definida. Verificar HTTP 200 e alt text em um teste dirigido de assets.

### P2 — Google Fonts via `@import` no CSS é caminho de carregamento frágil

- **Local:** `client/src/index.css:1`; `client/index.html:23-24`.
- **Evidência:** o CSS bloqueia a resolução das fontes com `@import` remoto; o HTML faz `preconnect`, mas não controla `font-display` nem oferece arquivos locais/`<link>` com carregamento explícito. A tipografia tem fallback, porém a primeira pintura pode ocorrer com troca perceptível e há dependência de terceiro.
- **Correção recomendada:** depois de aprovar a política de assets, preferir `link` com `display=swap` ou fontes próprias com preload seletivo, limitar pesos necessários e medir a primeira pintura; não adicionar novas fontes sem necessidade.

### P3 — Metadados sociais incompletos para a marca

- **Local:** `client/index.html:11-21`.
- **Evidência:** existem description, `og:title`, `og:description` e `og:locale`, mas não `og:url`, `og:image` nem `twitter:card`. Isso não quebra a página, mas deixa a apresentação social sem imagem/URL controlada.
- **Correção recomendada:** somente quando houver URL pública e arte aprovada, acrescentar canonical/OG/Twitter coerentes com a marca; não apontar para cliente, métrica ou arte inventada.

### P3 — Formatação não determinística no conjunto atual

- **Local:** `client/src/index.css` e diversos arquivos listados pelo check; `package.json:10-12` define `check`, `format` e `test`.
- **Evidência:** `pnpm exec prettier --check client/src server shared drizzle *.ts *.md` saiu com código 1 e reportou 40 arquivos, entre próprios e starter (`index.css`, `main.tsx`, vários helpers/UI/server/docs). TypeScript e testes passam, portanto é qualidade/manutenibilidade, não erro de compilação.
- **Correção recomendada:** em mudança futura, formatar em escopo explícito e separar boilerplate de arquivos de produto para não misturar um diff de estilo amplo com refinamentos recentes. Não rodei `--write`.

## Pontos preservados e coerência editorial

- `visualAssets.ts` mantém os slots `hero`, `services`, `portfolio`, `process`, `plans`, `values`, `faq` e `contact`; seis têm URL e FAQ/Contato continuam placeholders.
- `Home.tsx` mantém os quatro planos importados de `site.ts`, os contatos demonstrativos e o bloqueio de envio quando `contactIsExample` é verdadeiro (`Home.tsx:291-319`, `716-757`).
- A seção Portfolio permanece dark; os demais blocos e o footer usam superfícies claras conforme o CSS final (`index.css:426-435`, `464-472`).
- O texto do Portfólio e os estudos dos três cards dizem explicitamente que são demonstrações/conceitos (`Home.tsx:511-516`, `ConceptProjects.tsx:21`, `38`, `55`), sem clientes ou resultados reais.
- Não há depoimentos, logos de clientes ou métricas de negócio no conteúdo; o único desvio literal é a contagem fictícia da prévia de dashboard descrita no P1 acima.

## Testes dirigidos posteriores (não executados aqui)

Sem criar uma suíte E2E longa, executar uma matriz curta e focada:

1. **Dialog:** em build/servidor limpo, abrir cada conceito por mouse e teclado, verificar título/descrição, foco inicial, Tab preso ao diálogo, Escape, overlay, botão fechar, retorno ao gatilho e CTA `#contato`; repetir após HMR/reload para confirmar ou descartar o erro histórico.
2. **Menu e âncoras:** 320/390 px, abrir por teclado, Escape, retorno de foco e navegação por links; 768/1280 px, confirmar que a navegação desktop não colide com o header sticky.
3. **Foco/contraste:** percorrer header, CTAs, FAQ, campos, select, textarea e links usando somente teclado; medir visualmente/por ferramenta o indicador, especialmente campos claros e diálogo dark.
4. **Reduced motion/parallax:** ativar `prefers-reduced-motion`, recarregar e rolar Valores; não deve haver atraso perceptível, erro de posição ou warning do Framer.
5. **Assets e estabilidade:** testar HTTP 200 das seis URLs canônicas, erro de uma imagem, lazy loading das não-Hero e estabilidade de layout nas larguras 320/390/768/1280.
6. **Contato demonstrativo:** preencher campos válidos e inválidos; confirmar que `contactIsExample: true` nunca abre `mailto`/WhatsApp e que o feedback é anunciado; somente após trocar canais reais testar o fluxo `mailto` fora de uma campanha pública.
