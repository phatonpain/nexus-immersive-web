# Guia Visual — Felipe Inácio

> Fonte de verdade visual para as próximas evoluções deste site. Baseado no documento completo `Diretrizes_Arte_Manus.pdf` (3 páginas, sete diretrizes de arte). Consultar este arquivo antes de escolher, gerar, inserir ou ajustar imagens e antes de mudar a paleta. Cinco artes solicitadas em prompts adicionais do usuário foram geradas no Canva; uma arte conceitual própria do Portfólio foi gerada e integrada; FAQ e Contato continuam reservados.

## Sistema visual global

- **Estética:** Light Mode editorial, minimalista e premium para B2B SaaS; visual 3D com glassmorphism, vidro fosco translúcido, wireframes e luz de estúdio suave.
- **Paleta de assinatura:** Roxo `#8B5CF6` e azul `#3B82F6`. Usar os dois tons em brilhos, halos, wireframes, bordas de vidro e gradientes 3D. Branco puro e marfim muito leve são as superfícies principais; o portfólio é a única seção em Dark Mode, com base obsidiana, superfícies metálicas e brilhos roxo/azul.
- **Acessibilidade:** as cores exatas de assinatura permanecem em elementos grandes e decorativos. Como `#8B5CF6` e `#3B82F6` não alcançam AA para texto pequeno sobre branco, usar variantes escuras derivadas para corpo, links e textos de botões; manter foco visível, alvos legíveis e o contraste de controles.
- **Materiais e forma:** painéis com transparência fosca, reflexos suaves, wireframes discretos, bordas finas, raios generosos e sombra controlada. 3D deve apoiar a mensagem — não ocupar todo o campo com brilho ou ruído.
- **Ritmo:** imagens reservadas ocupam espaço real e proporção explícita; evitar blocos de texto monolíticos. Cards entram com fade-in discreto. Manter o parallax de Valores quase imperceptível e desativá-lo em `prefers-reduced-motion`; nenhum efeito é necessário para compreender o conteúdo.
- **Lifting visual (09/10/2026):** padding, margin e gap seguem múltiplos de 8px (hairlines de até 2px e miniaturas conceituais em escala `cqw` são exceções); valores fluidos usam `round(nearest, …, 8px)`. Vidro usa `--glass-filter: blur(16px) saturate(180%)` com `--glass-border: 1px solid rgba(255,255,255,.1)` e um anel violeta `--glass-hairline` para definição no Light Mode. Sombras nunca são pretas: usar `--shadow-studio-sm/md/lg/xl` (violeta em camadas) e `--shadow-obsidian` no Dark Mode. Artes e placeholders são molduras de cinema: bezel de 8px, raio externo 32px e interno 24px (24/16px no mobile). Seções tonais (Portfólio, Planos e FAQ) são palcos arredondados com recuo lateral, sem cortes secos.
- **Planos:** a seção Starter/Professional/Business/Enterprise permanece entre Processo e Valores. Embora não seja uma das sete diretrizes do PDF, o usuário forneceu um prompt explícito adicional para a escadaria de crescimento; por isso Planos tem um oitavo slot próprio e exclusivo, sem reutilizar a mesma imagem em Contato.

## Diretrizes das sete seções

| Nº do PDF | Local no site | Objetivo visual | Arte e composição exigidas | Slot preparado |
| --- | --- | --- | --- | --- |
| 1 | Hero / primeira impressão | Causar impacto quando o visitante abre o site. Light Mode. | Interface web conceitual 3D flutuando; painéis de vidro fosco e wireframes sutis; acentos violeta `#8B5CF6` e azul elétrico `#3B82F6`; fundo branco puro; luz cinematográfica e sombras macias; linguagem B2B SaaS limpa. Sem texto legível, marcas inventadas ou interface apresentada como produto funcional. | `hero`, proporção sugerida 4:5, à direita do texto principal. |
| 2 | Serviços / “01 · O que faço” | Mostrar código estruturado, seguro e performático. Light Mode. | Arquitetura de cloud/servidores representada por cubos de vidro e blocos hexagonais intertravados; fluxos de luz óptica violeta e azul/ciano suave através de estruturas translúcidas; fundo branco de estúdio; profundidade de campo macro e acabamento limpo. | `services`, proporção 16:9, no conjunto de abertura dos quatro cards existentes. |
| 3 | Explorações visuais / portfólio | Introduzir contraste dramático. Dark Mode. | Telas flutuantes e interfaces holográficas abstratas; fundo obsidiana, névoa volumétrica sutil; brilho roxo e azul profundo refletido em metal polido; luz de recorte cinematográfica e bokeh elegante. Não converter o restante do site ao modo escuro. | `portfolio`, faixa panorâmica sugerida 2.4:1 dentro da seção escura já existente. |
| 4 | Processo / como trabalhamos | Explicar a ideia de um processo passo a passo. Light Mode. | Ondas 3D suaves e nós luminosos conectados representando fluxo de trabalho; vidro refrativo e metal líquido translúcido; curvas elegantes, sem pontas agressivas; fundo branco; gradiente suave roxo/azul. | `process`, retrato 4:5 ou 3:4 à direita da lista de etapas, com empilhamento em mobile. |
| 5 | Valores / “05 · o que guia o trabalho” | Representar “Menos ruído. Mais propósito.” Light Mode. | Jardim zen tecnológico minimalista; uma esfera de vidro perfeitamente lisa, com núcleo violeta suave, pairando sobre areia branca ondulada; clareza absoluta, sem adornos; luz difusa de cima, textura realista e atmosfera serena. | `values`, proporção próxima de 5:4, à direita dos textos existentes. |
| 6 | FAQ / dúvidas comuns | Tornar a área mais amigável e humana. Light Mode. | Orb 3D de assistente abstrato, convidativo, formado por camadas de vidro fosco translúcido; luz interna acolhedora roxa e azul-claro; iluminação macia, atmosfera acessível e corporativa; arestas nítidas, sem parecer um mascote infantil. | `faq`, proporção 1:1, acima do título “O que você quer saber...”. |
| 7 | Contato / próximo passo | Comunicar crescimento e incentivar o próximo passo. Light Mode. | Escadaria abstrata 3D sutil ou cápsula/foguete de vidro elegante flutuando para cima; materiais brancos foscos com bordas de vidro violeta luminosas; fundo branco puro, claro e arejado; estética corporativa confiante e premium, alto nível de detalhe. | `contact`, proporção sugerida 4:3 ou 5:4, junto ao texto de contato e separado do formulário. |

As proporções são recomendações para preservar a intenção no layout, não exigências do gerador. As imagens finais devem manter espaço seguro para o recorte e ser fornecidas em composição completa, sem cortar o objeto focal.

## Arquitetura de inserção

O mapa `client/src/data/visualAssets.ts` registra as sete seções do PDF e o slot adicional `plans`, com objetivos, tema, texto alternativo e proporção. Os slots `hero`, `services`, `process`, `plans` e `values` usam as artes Canva solicitadas; `portfolio` usa uma imagem própria em proporção panorâmica 21:9 e legenda “estudo visual conceitual”; apenas `faq` e `contact` seguem como placeholders. Não reutilizar a arte de uma seção em outra.

### Mapeamento atual de seção e arte

| Slot | Arte prevista | Estado |
| --- | --- | --- |
| `hero` | Interface web 3D em glassmorphism | Arte Canva integrada. |
| `services` | Arquitetura cloud/servidores com cubos de vidro | Arte Canva integrada. |
| `portfolio` | Telas holográficas; único visual Dark Mode | Arte conceitual própria integrada em 21:9; não representa cases reais. |
| `process` | Ondas e nós luminosos conectados | Arte Canva integrada. |
| `plans` | Escadaria branca com bordas violetas; prompt extra do usuário | Arte Canva integrada apenas em Planos. |
| `values` | Esfera de energia sobre jardim zen branco | Arte Canva integrada. |
| `faq` | Orb amigável de assistente | Placeholder até arte própria. |
| `contact` | Cápsula de vidro ascendente (alternativa prevista no PDF) | Placeholder; não reutilizar a escadaria de Planos. |

## Restrições de consistência

1. Gerar somente imagens para slots pedidos pelo usuário ou previstos nas diretrizes do PDF; não criar variantes por conta própria.
2. Manter uma arte exclusiva para cada slot: cinco artes Canva nos slots correspondentes e uma imagem conceitual própria no Portfólio; FAQ e Contato permanecem placeholders até receberem artes próprias.
3. Não mudar a seção de portfólio para Light Mode: o contraste escuro é explícito no PDF.
4. Manter as demais seções Light Mode, respeitando a imagem e o objetivo próprios de cada slot.
5. Não usar números, clientes, métricas ou afirmações comerciais inventadas nos rótulos visuais.


## Prompts originais do PDF (referência de geração)

Os textos abaixo preservam a direção do documento-fonte; podem ser colados em Canva Pro, Midjourney ou DALL·E 3. A arte final pode adaptar proporção/composição para o slot, sem alterar a paleta, o tema claro/escuro nem a intenção visual.

### 1 — Hero / primeira impressão

> A hyper-realistic, ultra-detailed 3D conceptual web interface floating dynamically in mid-air. The UI elements feature advanced glassmorphism, translucent frosted glass panels, and subtle wireframes. The composition includes glowing neon accents in soft violet (hex #8B5CF6) and electric blue (hex #3B82F6). Set against a pristine, infinite pure white background. Cinematic studio lighting, soft shadows, 8k resolution, rendered in Unreal Engine 5, Octane Render, masterpiece, architectural visualization style, clean B2B SaaS aesthetic.

### 2 — O Que Faço / Serviços

> Abstract 3D representation of cloud computing and server architecture. Floating translucent glass cubes and hexagonal data blocks interlocked perfectly. Glowing fiber optic light streams pulsing with soft purple and cyan energy flowing through the transparent structures. Pure bright white studio background, extremely clean, minimalist and highly polished materials. Macro photography depth of field, 8k, hyper-detailed, futuristic tech agency style.

### 3 — Explorações Visuais / Portfólio

> A premium, dramatic 3D composition of glowing floating screens and abstract holographic UI displays. Dark, deep obsidian background with subtle volumetric fog. The screens emit a luxurious purple and deep blue glow, reflecting off polished dark metallic surfaces below. Cinematic rim lighting, bokeh effect, moody and highly elegant, 8k resolution, award-winning web design asset, rendered in Cinema4D and Redshift.

### 4 — Processo / Como Trabalhamos

> Abstract smooth 3D glowing waves and interconnected luminous nodes representing a seamless digital workflow and network. Made of premium refractive glass and translucent liquid metal. Set on a bright pure white minimalist background. The nodes emit a soft, comforting purple and blue gradient light. Highly elegant, smooth curves, no sharp edges, futuristic UI design asset, 8k resolution, raytracing.

### 5 — O Que Guia o Trabalho / Valores

> A futuristic tech zen garden. Extremely minimalist composition. A single perfectly smooth floating glass sphere containing a glowing soft purple energy core, hovering above pristine white rippled sand. Absolute clarity, zero noise, high-end conceptual art. Pure white environment, soft diffused overhead studio lighting, hyper-realistic textures, 8k, highly polished, conveying peace and technological purpose.

### 6 — Dúvidas Comuns / FAQ

> A friendly, abstract 3D glowing AI assistant orb floating gently. The orb is made of layered translucent frosted glass, with a warm, welcoming purple and light blue inner glow. Minimalist bright white background. Soft bouncy lighting, highly approachable yet futuristic corporate aesthetic, 8k resolution, 3D icon style, ultra-crisp edges.

### 7 — Próximo Passo / Contato

> A subtle, hyper-realistic 3D abstract ascending stairway or sleek glass rocket capsule floating upwards. Representing business growth and the next step. Made of pristine white matte materials and glowing violet glass edges. Bright, airy pure white background. Confident and premium aesthetic, corporate tech style, extremely detailed, 8k resolution, Octane Render.
