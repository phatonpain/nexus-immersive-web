# Plano — evolução visual do site Felipe Inácio

## Escopo e fonte de verdade

Refinar a landing page existente, sem reinicializar o projeto e sem remover serviços ou os quatro planos previamente aprovados. A referência é `Diretrizes_Arte_Manus.pdf`, lida integralmente: 3 páginas e 7 diretrizes de arte. O documento durável [GUIA_VISUAL.md](GUIA_VISUAL.md) registra a análise por seção. Cinco artes solicitadas pelo usuário foram geradas no Canva para Hero, Serviços, Processo, Planos e Valores. Para resolver o placeholder visível de Portfólio, uma sexta arte própria, baseada na diretriz dark do PDF, foi gerada e integrada, mantendo explícito que é um estudo conceitual e não um case real.

## Implementação

- Reutilizar o starter React/Tailwind estático já inicializado; manter rota `/`, porta Preview 3000, metadados pt-BR, navegação, formulário e dados de contato demonstrativos. Não ativar banco, login, backend ou publicação automática.
- Manter `client/src/data/visualAssets.ts` com os sete slots do PDF (`hero`, `services`, `portfolio`, `process`, `values`, `faq`, `contact`) e o slot adicional `plans`, cada um com objetivo, descrição/alt, modo e proporção. Definir URLs de armazenamento para Hero, Serviços, Portfólio, Processo, Planos e Valores; manter FAQ e Contato como placeholders até existirem artes próprias.
- Manter `client/src/components/ArtworkSlot.tsx`, com moldura glassmorphism arredondada e composição temporária própria por slot; para Portfólio, exibir a arte gerada e uma legenda sobreposta “estudo visual conceitual”, sem insinuar trabalho entregue.
- Mapear os sete slots do PDF: Hero à direita do texto; Serviços junto ao cabeçalho “01 / O QUE FAÇO”; Portfólio no bloco Dark Mode; Processo à direita dos passos; Valores à direita dos textos; FAQ acima do título; Contato abaixo da mensagem inicial. Além disso, manter um slot de escadaria próprio na seção “04 / Formatos de Projeto / Planos”, conforme prompt explícito do usuário, sem alterar os cards Starter/Professional/Business/Enterprise.
- Atualizar tokens do CSS para usar violeta `#8B5CF6` e azul `#3B82F6` como cores de assinatura; superfícies claras nas outras seções e fundo obsidiana somente no Portfólio. Para texto pequeno/CTAs, usar variantes escuras acessíveis da mesma família e preservar os tons exatos em brilhos, gradientes e elementos grandes.
- Manter glow violeta/azul contido nos botões e fade-in em cards, respeitando `prefers-reduced-motion`. O parallax de Valores continua sutil e desativado para movimento reduzido.
- Preservar Processo e Valores como composições de texto + slot visual com quebra responsiva, além dos cartões de serviço, planos e conteúdo sem inventar resultados.

## Direção de arte

- **Movimento:** minimalismo editorial de Light Mode para produto B2B, glassmorphism e visualização 3D refinada; uma única seção escura (Portfólio) oferece contraste cinematográfico.
- **Princípios:** espaço negativo e clareza; profundidade de vidro/fosco com luz suave; um propósito visual distinto por seção; contraste suficiente para leitura e foco acessível.
- **Filosofia de cor:** `#8B5CF6` e `#3B82F6` comunicam inovação e confiança; fundo branco/papel evita ruído; superfícies obsidianas ficam restritas ao Portfólio. Tons profundos derivados são reservados a texto/controles pequenos para WCAG.
- **Layout:** composição editorial assimétrica, com módulos de imagem em proporções próprias; processo, valores e Planos usam composições responsivas; slots ocupam espaço real no fluxo, sem overlays que encubram conteúdo.
- **Elementos-assinatura:** painéis frosted glass com bordas sutis; halos violeta/azul com sombra suave; um motivo tridimensional exclusivo por slot.
- **Interação:** CTA com brilho discreto, cards com feedback de hover sem saltos excessivos, FAQ e navegação preservam teclado/foco.
- **Animação:** fade-in suave e escalonado dos cards; quando suportado, sincronizar com entrada na viewport; sem autoplay intenso ou dependência de animação para compreender conteúdo. O parallax de Valores é sutil e desativado para movimento reduzido.
- **Tipografia:** DM Sans para leitura, Space Grotesk para títulos e rótulos curtos; manter hierarquia já consolidada.
- **Essência:** desenvolvimento web sob medida para negócios que valorizam clareza, confiança e execução cuidadosa; personalidade precisa, moderna e confiável.
- **Voz:** direta, consultiva, sem jargão ou promessas infundadas; exemplos: “Seu próximo site pode fazer mais pelo seu negócio.” / “Clareza no caminho. Cuidado em cada etapa.”
- **Marca:** wordmark “Felipe Inácio” e marca `</>` existentes permanecem; violeta `#8B5CF6` é a assinatura, azul `#3B82F6` seu acento de apoio.

## Estrutura e dependências

- `client/src/data/visualAssets.ts`: mapa das sete diretrizes do PDF, do slot adicional de Planos e das seis artes integradas.
- `client/src/components/ArtworkSlot.tsx`: módulo reutilizável para placeholder/imagem final, com legenda conceitual própria de Portfólio.
- `client/src/pages/Home.tsx`: distribuição dos slots, incluindo Planos, e composições das colunas de Processo, Valores, FAQ e Contato.
- `client/src/index.css`: tokens, glassmorphism, variantes claras/escura, responsividade, glow, fade-in e reduced motion.
- `client/public/brand-mark.svg`, `client/index.html` e `client/public/manus-routes.json`: marca/tema da aba e manifesto da rota; não alterar o `logoUrl` da plataforma, cuja marca é separada.
- `GUIA_VISUAL.md` e `PHOTO_SOURCES.md`: análise do PDF, regras visuais e proveniência das artes.

Reutilizar React 19, TypeScript, Tailwind 4, `lucide-react` e Framer Motion já instalados; não incluir novos pacotes. As cinco imagens Canva existentes usam armazenamento durável do projeto; a sexta arte conceitual de Portfólio usa sua URL gerenciada própria. Validar com `pnpm check`, `pnpm build:static`, manifesto da rota e Preview; salvar a alteração no `main`, sem publicar automaticamente.

## Evolução dos três cards de conceitos

Substituir as prévias com skeletons por interfaces HTML/CSS completas e legíveis: um site de serviços editorial, um painel com tarefas demonstrativas e uma landing page de campanha. Usar o código da interface, não imagens rasterizadas, para permitir adaptação responsiva e leitura nítida. Cada card terá a ação “Explorar conceito” e abrirá seu próprio estudo em diálogo acessível com objetivo, decisões de UI e escopo sugerido. Nenhum card será apresentado como trabalho de cliente, demo de sistema completo ou resultado comercial. Preservar o selo “Conceitual” e uma ressalva dentro de cada estudo; o CTA de contato continua secundário. Reutilizar Radix Dialog instalado para foco, Escape, teclado e retorno ao card. Concentrar o módulo em `client/src/components/ConceptProjects.tsx` e seus estilos em `client/src/index.css`, mantendo as artes existentes, os quatro planos e os canais demonstrativos.

## Refinamentos implementados nesta fase

- As três prévias agora são composições HTML/CSS completas, com estados qualitativos no painel para não apresentar métricas fictícias.
- Os estudos usam o wrapper Radix local com overlay, título/descrição semânticos, foco, Escape, retorno ao gatilho e CTA secundário para `#contato`.
- O menu móvel ganhou Escape, foco no primeiro link, fechamento externo e retorno ao botão; `ValuesArtwork` ganhou viewport relativo para o `useScroll`.
- O fallback público do `ErrorBoundary` está em pt-BR e não expõe stack trace. Imagens gerenciadas têm fallback visual acessível sem alterar `visualAssets.ts`.
- Tokens finais de ritmo e leitura foram adicionados ao CSS; foco dos campos, reduced motion, tipografia funcional e overlay dos estudos receberam estados explícitos.

## Correções dirigidas e arquitetura final

O teste do Preview confirmou que o wrapper Tailwind e a moldura do diálogo aplicavam translações sobrepostas. A moldura específica agora neutraliza `translate` e mantém uma única transformação de centralização, largura máxima de 880px e rolagem interna no mobile. A descrição dos conceitos e o footer do diálogo usam cores claras próprias do tema dark; texto de apoio do Hero tem 15–17px e descrições centrais 14px. O painel usa módulos qualitativos, sem contagens fictícias, com padding ajustado para não recortar tarefas.

`ConceptProjects` é carregado por `React.lazy`/`Suspense` em chunk separado, sem pacote novo ou mudança de configuração. Os testes dirigidos do Preview/build, foco, Escape, assets e movimento reduzido estão registrados no relatório final e no harness `scripts/verify-preview.py`. A síntese de UI mantém princípios aplicáveis ao serviço B2B; fontes auxiliares não substituem portfólios premiados na contagem de pesquisa.

## Integração Spline da versão Nexus Studio (10/10/2026)

Trabalhar exclusivamente na cópia do ZIP `Projeto-Nexus-Studio.zip`, preservando a landing page anterior e o visual Dark Mode do anexo. Reutilizar `PremiumSpline.tsx`, suas quatro URLs fornecidas e a física/eventos já publicados nas cenas, sem criar outro componente Spline ou inventar simulação física.

Substituir o `CyberSpline` e a arte sobreposta do Hero por um palco local `PremiumSpline type="orb"`; substituir o slot de Serviços por um palco local `PremiumSpline type="diagram"`. Reservar dimensões no fluxo, usar `isolation: isolate` para conter z-index e permitir `pointer-events: auto` apenas na cena ativa. Texto, CTAs, navbar e grade devem permanecer acima da camada 3D. Manter a arte existente como fallback para mobile, movimento reduzido ou erro de carregamento; não montar WebGL em telas abaixo de 768px. Carregar as cenas por chunk e montar Serviços ao se aproximar da viewport.

Alterar apenas os pontos necessários em Home, CSS e no componente existente para estado de carregamento/erro. Não publicar nem substituir o projeto anterior. Entregar um ZIP atualizado e evidências dos checks e da validação dirigida. Diagnóstico da cópia fornecida: `npm run check`; lint oficial com oxlint, nunca ESLint; testes existentes e build.
