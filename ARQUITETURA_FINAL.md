# Arquitetura final — Felipe Inácio

## 1. Visão geral implementada

A aplicação continua sendo uma landing page pública React 19/TypeScript em `/`, servida pelo Vite estático, com visual editorial claro, glassmorphism e profundidade 3D. A exceção deliberada é `02 / Explorações visuais`, que usa fundo obsidiana e acentos violeta/azul para separar o território conceitual.

A arquitetura privilegia informação B2B antes do efeito: proposta de valor, serviços, explorações conceituais, processo, formatos de projeto, valores, FAQ e contato. Não há ativação de backend, banco, login, envio de formulário, publicação ou geração de assets nesta fase.

## 2. Tokens de design

### Cor e superfícies

| Token           | Valor     | Uso                                                 |
| --------------- | --------- | --------------------------------------------------- |
| `--accent`      | `#8B5CF6` | assinatura violeta, halos, bordas e estados grandes |
| `--accent-blue` | `#3B82F6` | acento de apoio, links de foco e gradientes         |
| `--accent-dark` | `#5B21B6` | texto/CTA violeta escuro com contraste              |
| `--blue-dark`   | `#1D4ED8` | CTA e foco azul escuro                              |
| `--paper`       | `#F7F7F5` | superfície principal clara                          |
| `--white`       | `#FFFFFF` | cards e áreas de formulário                         |
| `--line`        | `#E7E7E4` | divisórias e bordas editoriais                      |
| `--deep`        | `#171821` | seção de Portfólio e contraste                      |
| `--focus-ring`  | `#1D4ED8` | `:focus-visible` sólido com offset                  |

As cores de assinatura não são usadas como texto pequeno sobre branco; o CSS usa variantes escuras para leitura e mantém o violeta/azul puro em elementos grandes e decorativos.

### Espaçamento e ritmo

- `--space-section: clamp(5rem, 8vw, 8rem)` define o respiro vertical dos blocos principais.
- `--space-content: clamp(1.25rem, 2.4vw, 2rem)` está disponível para módulos que precisam de padding fluido.
- Container editorial: `width: min(1200px, calc(100% - 72px))`, reduzindo para `48px`, `40px` e `32px` conforme a viewport.
- Hero em duas colunas; Serviços e Planos em grids; Processo, Valores, FAQ e Contato trocam para uma coluna em telas menores.
- As prévias usam `aspect-ratio` e `container-type: inline-size` para que a interface interna se adapte ao card, sem screenshot rasterizado.

### Hierarquia tipográfica

- **Space Grotesk:** headlines, títulos de seção, nomes de plano e rótulos editoriais.
- **DM Sans:** corpo, formulários, descrições e microcopy de interface.
- Headline hero usa `clamp(46px, 5.6vw, 76px)` no desktop; títulos de seção usam escalas clamp menores.
- Textos de apoio do Hero usam `clamp(15px, 1.3vw, 17px)`; descrições de serviços, conceitos, FAQ, Valores e Processo usam 14px. Labels usam aproximadamente 11–12px; microtexto menor fica restrito a detalhes decorativos nas prévias.
- Line-height de corpo e metadata foi elevado para facilitar leitura em 320–768px.

## 3. Composição das seções

1. **Header / Hero** — marca “Felipe Inácio”, descriptor, navegação para Serviços/Projetos/Processo/Planos, CTA de contato e hero com copy B2B selecionada. A arte `hero` permanece à direita e o strip de tecnologias fica abaixo.
2. **Intro strip** — três afirmações curtas (“Tecnologia com intenção”, “Design com clareza”, “Resultados com responsabilidade”) como transição editorial.
3. **01 / O que faço** — headline e contexto à esquerda, arte `services` junto ao cabeçalho e quatro cards de serviços existentes: Sites institucionais, Landing pages, Sistemas web e Evolução contínua.
4. **02 / Explorações visuais** — única seção dark. Mantém a arte panorâmica `portfolio`, ressalva de que os projetos não representam clientes e três cards conceituais: Marca em movimento, Painel de operação e Lançamento essencial.
5. **Pré-visualizações conceituais** — HTML/CSS acessível e adaptável: um site editorial, um painel sem métricas reais e uma campanha. Cada card conserva selo `CONCEITUAL`, índice e ação `Explorar conceito`.
6. **Estudos em diálogo** — wrapper Radix local com título/descrição semânticos, overlay, foco inicial, Escape, foco de retorno, escopo sugerido, decisões e CTA secundário `Quero algo assim` para `#contato`.
7. **03 / Como trabalhamos** — quatro passos Entender/Desenhar/Construir/Evoluir, arte `process` e CTA para conversa.
8. **04 / Formatos de projeto** — arte `plans` própria da seção e os quatro planos preservados: Starter, Professional, Business e Enterprise. Todos continuam sob orçamento.
9. **05 / O que guia o trabalho** — três princípios (Escopo claro, Experiência pensada, Relação que continua) e `ValuesArtwork` com arte `values` e parallax discreto.
10. **06 / Dúvidas comuns** — placeholder `faq` preparado acima do título e accordion controlado por teclado.
11. **07 / Próximo passo** — placeholder `contact` separado da escadaria de Planos, contatos demonstrativos e formulário desativado quando `contactIsExample` está ativo.
12. **Footer** — marca, frase editorial, retorno ao topo e dados de rodapé em superfície clara.

## 4. Estrutura de arquivos relevante

| Arquivo                                     | Responsabilidade                                                              |
| ------------------------------------------- | ----------------------------------------------------------------------------- |
| `client/src/pages/Home.tsx`                 | composição da one-page, header/menu, hero, parallax, formulário, FAQ e seções |
| `client/src/components/ConceptProjects.tsx` | três prévias HTML/CSS, dados de estudo e diálogos Radix                       |
| `client/src/components/ui/dialog.tsx`       | wrapper Radix local, composição IME, overlay e foco do diálogo                |
| `client/src/components/ArtworkSlot.tsx`     | moldura, imagem, placeholders, legenda e fallback acessível                   |
| `client/src/components/ErrorBoundary.tsx`   | fallback público pt-BR sem stack trace                                        |
| `client/src/data/site.ts`                   | serviços, planos, projetos conceituais, processo, FAQ e dados de contato      |
| `client/src/data/visualAssets.ts`           | oito slots visuais, incluindo as seis artes integradas e dois placeholders    |
| `client/src/index.css`                      | tokens, layout, slots, previews, diálogos, responsive e reduced motion        |
| `client/index.html`                         | idioma, metadados básicos, tema e entrada Vite                                |
| `research/BENCHMARK_UI_PREMIUM.md`          | 20 portfólios premiados analisados, fontes e síntese de UI                     |
| `research/COPY_B2B.md`                      | benchmarks de copy e seleção textual original                                 |
| `research/AUDITORIA_CODIGO.md`              | evidência read-only anterior e limitações da auditoria                        |
| `ARQUITETURA_FINAL.md`                      | este documento de arquitetura implementada                                    |
| `RELATORIO_IMPLEMENTACAO.md`                | arquivos alterados, checks e avisos da entrega                                |

Boilerplate do servidor, banco, login e módulos não alcançados pela rota `/` foi preservado.

## 5. Padrões de animação e reduced motion

- Framer Motion usa `LazyMotion`/`domAnimation` e `useReducedMotion` no hero e no parallax de Valores.
- Entradas de conteúdo são fades/pequenos deslocamentos; cards recebem fade escalonado apenas em `prefers-reduced-motion: no-preference`.
- Hover de cards e CTAs usa elevação/glow discreto, sem esconder conteúdo.
- `ValuesArtwork` mantém `position: relative` no viewport para que `useScroll` calcule o offset corretamente.
- `prefers-reduced-motion: reduce` desliga `reveal-up`, `float-in`, fades de cards, delays e transições decorativas; o conteúdo permanece visível e a rolagem deixa de ser suave.
- O diálogo usa o comportamento nativo acessível do Radix: foco inicial, foco de retorno, Escape e overlay.
- Não foram adicionados GSAP, Three.js, WebGL, scroll hijack ou novas dependências.

## 6. Dados e limites editoriais

- `visualAssets.ts` preserva as seis URLs existentes: Hero, Serviços, Portfólio, Processo, Planos e Valores. FAQ e Contato continuam placeholders e não reutilizam a escadaria de Planos.
- `site.ts` preserva Starter/Professional/Business/Enterprise, quatro serviços, seis FAQs, quatro etapas e contatos demonstrativos.
- O formulário impede fluxo real enquanto `contactIsExample` for `true`; nenhum backend ou integração foi ativado.
- O painel conceitual não exibe `08/05/03`; os módulos Projetos, Prioridades e Entregas usam estados demonstrativos “Em execução”, “Esta semana” e “Em revisão”, junto do aviso “EXEMPLO SEM MÉTRICA REAL”.
- Não há clientes, logos, depoimentos, métricas, resultados ou estudos apresentados como cases reais.

## 7. Limitações e próximos passos honestos

- O storage das seis artes não foi convertido para fonte local nem removido. As seis URLs responderam HTTP 200 com MIME de imagem e carregaram nas larguras verificadas. Um erro 503 induzido apenas no teste confirma o fallback acessível.
- Google Fonts continua vindo do `@import` remoto; uma futura decisão de política de fontes pode migrar para `link` com `display=swap` ou arquivos próprios.
- `og:url`, `og:image` e `twitter:card` continuam pendentes até existir URL pública e arte social aprovada; não foram inventados metadados.
- O módulo `ConceptProjects` é carregado por `React.lazy` e `Suspense`. O build produz um chunk próprio de 40,75 kB e um inicial de 538,67 kB (166,88 kB gzip), reduzido frente aos 577,77 kB anteriores. O aviso acima de 500 kB permanece; não foi mascarado nem alterada a configuração do starter.
- O build estático mantém o aviso do script `/api/platform/config.js` sem `type="module"`; o arquivo de configuração pública é emitido separadamente pelo starter.
- Não foi feita publicação nem auditoria completa de contraste com ferramenta externa. O Preview está atualizado; testes dirigidos estão registrados abaixo.

## 8. Validação dirigida e correções finais

Em 09/10/2026, o teste no navegador encontrou dupla translação entre a propriedade CSS `translate` do wrapper Tailwind e `transform` da moldura. A regra específica `.concept-dialog[data-slot="dialog-content"]` agora usa `translate: none`, preserva apenas uma centralização, impõe largura máxima de 880px e remove o limite genérico de 512px do wrapper. Também foram corrigidos o contraste das descrições no tema dark e o recorte da última tarefa no painel.

- **Preview:** larguras 320, 390, 768 e 1280px, sem overflow horizontal; três estudos abrem por Enter, recebem foco, contêm o ciclo de Tab e fecham por Escape, devolvendo foco ao card.
- **Menu:** em 320/390px, abrir foca Serviços e Escape fecha, devolvendo foco ao botão.
- **Build estático:** testes em 390 e 1280px, sem erro de hooks ou outro erro JavaScript; assets de storage foram encaminhados ao Preview somente pelo harness, pois o servidor HTTP local não implementa a rota de storage da plataforma.
- **Movimento reduzido:** preferência emulada no Chromium; animação dos cards é `none`, delay `0s`; diálogo e overlay também têm animação/transição desativadas.
- **Artes e contato:** seis imagens carregadas; fallback de erro verificado; não há links `mailto:` ou WhatsApp ativos enquanto os canais são demonstrativos.

Evidência reproduzível: `scripts/verify-preview.py` e `research/VALIDACAO_PREVIEW.json`. São verificações dirigidas, não certificação de acessibilidade, performance ou compatibilidade com todos os navegadores.

## 9. Base de pesquisa consolidada

O benchmark final reúne **20 portfólios individuais premiados no intervalo 09/10/2024–09/10/2026: 8 Awwwards SOTD e 12 CSSDA WOTD**. Datas, páginas oficiais, sites reais e limitações constam em `research/BENCHMARK_UI_PREMIUM.md`; o detalhamento dos 12 adicionais está em `research/COMPLEMENTO_CSSDA.md`. Elementos Awwwards e páginas Vercel/Linear/Stripe são fontes auxiliares, não novos portfólios.

A cobertura confirma elegibilidade e padrões de cada item, mas não pretende ser um ranking global nem auditoria visual integral de todos os estados. Alguns perfis oferecem CSS público; Mees, Arnaud e Yuta tiveram amostras computed de sessões específicas. Não há base para afirmar proporção áurea universal ou prevalência de bibliotecas. Esses achados sustentam princípios — clareza antes de efeito, navegação direta, hierarquia editorial, motion progressivo — e não clonagem ou garantias de resultado.
