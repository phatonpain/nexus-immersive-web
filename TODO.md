# ToDo — Bíblia Visual e integração das artes

## Histórico preservado

- [~] **Imagem 3D genérica do Hero, solicitada antes da nova Bíblia Visual.** “3D hyper-realistic abstract floating web interface, glassmorphism UI dashboard, soft purple and blue glowing elements on a pristine pure white background, 8k resolution, minimalist high-tech B2B aesthetic”. Esse pedido foi sucedido pela Bíblia Visual e, depois, por um prompt Canva específico para o Hero; o site usa a arte específica da série de cinco, sem reutilizar uma variante genérica.

## Resultados da Bíblia Visual

- [x] **Analisar o PDF inteiro e persistir as diretrizes de cada seção.** Ler `Diretrizes_Arte_Manus.pdf` completo (3 páginas) e identificar os objetivos visuais das sete seções — Hero, Serviços, Portfólio, Processo, Valores, FAQ e Contato — incluindo objetivos, tema claro/escuro, paleta e conceito de imagem. Registrar a estética para as próximas atualizações do projeto. Evidência: `GUIA_VISUAL.md` contém o mapeamento por seção e o estado atual das artes.
- [x] **Preparar um slot independente para cada diretriz do PDF.** Criar sete encaixes com moldura arredondada/glass, objetivo e rótulo acessível; acrescentar um slot próprio de Planos por solicitação explícita, sem alterar os quatro planos comerciais. Seis slots têm artes próprias; FAQ e Contato continuam placeholders. Evidência: `visualAssets.ts`, `ArtworkSlot.tsx` e `Home.tsx`.
- [x] **Alinhar a interface à paleta e à estética indicadas.** Usar roxo `#8B5CF6` e azul `#3B82F6`; manter Light Mode minimalista e reservar Dark Mode apenas para Portfólio; aplicar glassmorphism, luzes suaves e 3D sem sacrificar contraste.
- [x] **Adicionar microinterações acessíveis.** Aplicar glow sutil aos botões e fade-in aos cards, respeitando `prefers-reduced-motion` e sem depender de movimento para compreender o conteúdo.
- [x] **Reorganizar Processo, Valores e Planos com slots responsivos.** Manter áreas arredondadas ao lado dos textos e empilhá-las em telas menores, preservando serviços, cases conceituais e os quatro planos.

## Artes e Preview

- [x] **Cinco artes do Canva integradas.** Usar os prompts fornecidos para Hero, Serviços, Valores, Processo e Planos; associar cada arte ao seu slot exclusivo no armazenamento do projeto. A escadaria de crescimento tem slot próprio em “04 / Formatos de Projeto”, sem alterar os cards Starter, Professional, Business e Enterprise.
- [x] **Substituir o placeholder do Portfólio por uma arte própria.** Criar uma composição panorâmica 21:9, em Dark Mode obsidiana, com telas holográficas abstratas em violeta `#8B5CF6` e azul `#3B82F6`; sem logos, clientes ou texto fictício. Manter claro que é um estudo visual, não um case real. A legenda identifica o conceito e o texto introdutório mantém a ressalva de que não são projetos entregues.
- [x] **Validar o Preview após a arte de Portfólio.** `pnpm check`, `pnpm build:static` e `git diff --check` aprovados; capturas desktop e mobile mostram a arte no slot panorâmico e os restantes elementos responsivos.

## Estudos dos três cards de portfólio

- [x] **Dar conteúdo e destino próprios aos três conceitos.** Preencher as prévias de “Marca em movimento”, “Painel de operação” e “Lançamento essencial” com texto legível e interface acabada, sem skeletons genéricos. Manter Dark Mode na seção, selo Conceitual, responsividade e reduced motion. Cada card deve abrir um estudo com objetivo, decisões de interface, escopo sugerido e aviso de demonstração, sem inventar cliente, resultado ou sistema completo. A ação “Explorar conceito” deve funcionar por teclado, com fechamento por Escape e retorno do foco ao card; contato fica como CTA secundário. Não alterar as seis artes ou os quatro planos existentes. Evidência: `client/src/components/ConceptProjects.tsx` usa prévias HTML/CSS, wrapper Radix Dialog, foco/Escape/retorno e rótulos qualitativos sem métricas fictícias.

## Pesquisa e refinamento premium

- [x] **Benchmark de copy B2B em Vercel, Linear e Stripe, com leitura de fontes oficiais e texto original para Felipe Inácio.** Separar exemplos citados de recomendações, não copiar slogans ou inventar eficácia de conversão; preservar escopo sob orçamento e canais demonstrativos. Evidência: `research/COPY_B2B.md` e copy aplicada no Hero/Processo.
- [x] **Auditar o código e corrigir falhas confirmadas, preservando identidade, seis artes e quatro planos.** Menu por teclado, foco robusto, fallback de erro público pt-BR sem stack, fallback de imagem, posição do parallax, motion reduzido e legibilidade no tema dark foram ajustados. Evidência: auditoria histórica e `RELATORIO_IMPLEMENTACAO.md` com o estado final.
- [x] **Entregar arquitetura final original e prévias conceituais completas, sem falsos cases.** Documentar tokens, grid responsivo, tipografia, estruturas e animações, respeitar `prefers-reduced-motion` e disponibilizar objetivo/decisões/escopo dos três conceitos. Evidência: `ARQUITETURA_FINAL.md`, `ConceptProjects.tsx` e relatório.
- [x] **Validar os defeitos concretos do Preview e build estático antes de encerrar.** Em 320/390/768/1280px no Preview e 390/1280px no build, diálogos abrem por Enter, foco fica contido por Tab e volta ao card após Escape; menu mobile abre com foco inicial/fecha por Escape; sem overflow horizontal nem erro de hooks. Seis artes carregam e fallback de 503 induzido funciona. Evidência: `scripts/verify-preview.py` e `research/VALIDACAO_PREVIEW.json`.
- [x] **Concluir a cobertura de 20 portfólios individuais premiados no intervalo 09/10/2024–09/10/2026.** Não contar fontes de elementos ou páginas SaaS como portfólios; cada item precisa de prêmio/data e autoria verificáveis, análise própria, fontes e limitações. Registrar CSS/medidas quando disponíveis e não alegar proporção áurea ou bibliotecas por aparência. Evidência: 8 Awwwards SOTD + 12 CSSDA WOTD no benchmark consolidado e complemento, com fonte/data por item. A inspeção visual e medição detalhada variam por perfil e suas limitações permanecem explícitas; não há alegação de auditoria integral de todos os sites nem ranking global.

## Lifting visual a partir do screencast (09/10/2026)

- [x] **FASE 1 — Diagnóstico do vídeo.** Identificar espaçamentos fora da grade de 8px, elementos "duros" na rolagem e falta de respiro ao redor dos placeholders. Evidência: `research/AUDITORIA_VIDEO_LIFTING.md` com medições na viewport do vídeo (1517px @1,25).
- [x] **FASE 2 — Tratamento de nitidez e vidro.** `-webkit-font-smoothing: antialiased` e `-moz-osx-font-smoothing: grayscale` no body; `backdrop-filter: blur(16px) saturate(180%)` + `border: 1px solid rgba(255,255,255,.1)` nas bordas de vidro e placeholders; sombras difusas violeta em camadas, sem preto puro.
- [x] **FASE 3 — Refatoração aplicada.** Placeholders com `border-radius` macio e moldura de tela de cinema; espaçamentos computados fora da grade de 456 para 12 (somente `<option>` nativo); Processo contido no container; formulário de Contato sem área vazia; verificação dirigida aprovada em 320/390/768/1280px no Preview e 390/1280px no build.

## Integração Spline — Nexus Studio (10/10/2026)

- [x] Reutilizar `PremiumSpline.tsx` com as quatro cenas existentes (`orb`, `diagram`, `hacker`, `cyber`), sem componente Spline novo. Hero usa `orb` e Serviços usa `diagram` em área própria de respiro. Evidência: Home e URLs preservadas no componente existente.
- [x] Garantir mouse interativo no canvas, z-index local e CTAs/navbar/grade clicáveis acima das cenas. Preservar o layout e os conteúdos do ZIP. Evidência: hit-test e clique real nos seis cenários em `research/spline-validation/results.json`.
- [x] Em telas abaixo de 768px ou com movimento reduzido, não montar WebGL e conservar arte de fallback responsiva. Erro de cena não deve derrubar a página. Evidência: zero requests de cena em mobile/reduced-motion e fallback após HTTP 503 induzido.
- [x] Executar `npm run check`, oxlint, testes e build; registrar evidência e entregar ZIP atualizado sem secrets, caches ou dependências. Tipos, lint dos arquivos alterados, seis testes e build passaram. Lint do frontend inteiro tem três erros herdados fora do escopo, documentados em `INTEGRACAO_SPLINE.md`; aviso de chunks grandes foi preservado.
