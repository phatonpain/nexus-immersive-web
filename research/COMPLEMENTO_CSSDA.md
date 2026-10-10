# Complemento CSSDA — benchmark de UI premium para Felipe Inácio

## Escopo e leitura da evidência

Este complemento analisa os **12 portfólios pessoais vencedores de Website Of The Day (WOTD) da CSS Design Awards** fornecidos para o benchmark. O intervalo informado é inclusivo, de **9 out. 2024 a 9 out. 2026**; as datas abaixo são as datas exibidas nas fichas CSSDA, não datas de submissão. A mesma ficha de Antoine Wodniack também registra WOTM de novembro de 2024.

A seleção foi deliberadamente limitada a portfólios pessoais com evidência textual de developer, creative developer, front-end developer ou designer/developer. Não são contados elementos de inspiração, páginas de produto SaaS, cases técnicos como se fossem novos sites, nominee, Special Kudos, Honorable Mention ou estrelas isoladas de UI/UX. Este complemento não re-pesquisa a web: usa exclusivamente os resultados recebidos.

A ficha CSSDA é evidência do prêmio, do autor, da descrição e das tags da ficha; não é auditoria independente de mérito, originalidade, acessibilidade ou implementação. Declarações do próprio autor/site sobre stack são separadas de inferências visuais. Valores do CSS são distinguidos de medidas computed. Quando a amostra não sustenta uma conclusão, ela permanece desconhecida.

## Resumo dos 12 vencedores

| # | Portfólio | Data e award | Fontes oficiais e site | Medida disponível |
| ---: | --- | --- | --- | --- |
| 1 | Antoine Wodniack | 27/11/2024 — WOTD + WOTM Nov | [1][2] | CSS declarado e media queries [3] |
| 2 | Mees Verberne | 01/01/2025 — WOTD | [4][5] | H1 computed 203,81px; corpo 11,2px [5] |
| 3 | Eric Huguenin | 05/07/2025 — WOTD | [7][8] | Grade CSS de 12 colunas, gutter 20px [9] |
| 4 | Abhishek Jha | 20/09/2025 — WOTD | [10][11] | Nav CSS 30px 4vw; projeto 90% [12] |
| 5 | Arnaud Rocca | 22/03/2026 — WOTD | [15][16] | Computed desktop/mobile; breakpoint 960px [16] |
| 6 | Dave Holloway | 04/04/2026 — WOTD | [18][19] | Nenhuma medida confiável obtida |
| 7 | Ravi Klaassens | 07/04/2026 — WOTD | [21][22] | Tokens CSS e media queries [24] |
| 8 | Yuta Abe | 11/06/2026 — WOTD | [25][26] | Header computed 1280×71,03px [26] |
| 9 | Jesse van Heijningen | 28/06/2026 — WOTD | [27][28] | H1 CSS 7em e 13,5vw mobile [30] |
| 10 | Russell Numo | 26/07/2026 — WOTD | [31][32] | Nenhuma medida confiável obtida |
| 11 | Jesper Landberg | 31/08/2026 — WOTD | [34][35] | Nenhuma medida confiável obtida |
| 12 | Eddy Naboulet | 08/10/2026 — WOTD | [37][38] | Media queries e reduced motion [39][40] |

## Análises individuais

### 1. Antoine Wodniack

**Reconhecimento e fonte primária.** A ficha CSSDA registra **Website Of The Day em 27 nov. 2024** e **Website Of The Month de novembro**, com nota final de júri 8,87 [1]. A página do WOTY 2024 citada no conjunto é uma indicação/nominee e não deve ser lida como vitória [1][41]. O domínio pessoal `wodniack.dev` é a fonte real do conteúdo do portfólio [2].

**Padrões observados.** O site de página única encadeia apresentação pessoal, sobre, prêmios, trajetória, projetos/memórias e contato. O heading “Creative Developer”, textos curtos, seção Awards, links para CodePen/LinkedIn, e-mail e o controle “Change contrast” tornam visíveis identidade, prova e ação [2]. A ficha CSSDA classifica o trabalho como one page, SVG e typographic [1].

**Tecnologia e escopo da evidência.** O HTML atual expõe `meta generator` com Astro v4.15.9 [2]. O site pessoal lista GSAP SOTM em outubro e novembro de 2024, o que comprova reconhecimento ligado ao autor, mas não prova GSAP integrado nesta página específica. Não se atribui Motion ou Three.js pela aparência. O repositório aberto em 2025 é posterior à premiação e identifica-se como Open Source Edition; ele não é usado para inferir a implementação premiada [2][3][42].

**Medidas reproduzíveis.** A extração direta do HTML apontou `/_astro/index.MJ9FiCyD.css`. A inspeção textual encontrou heading com `font-size:14vw`, outra regra responsiva `calc(31vw - 1rem)` e tamanhos em `rem`; há media queries em `max-width:576px`, `767px`, `987px`, `1080px` e `1280px` [3]. O método foi GET do HTML e CSS público, com busca textual por `font-size` e media queries; não houve computed styles, viewport simulada ou associação segura de cada regra a um elemento. Portanto não há gap/padding em pixels nem uma escala universal a reportar.

**Adaptação para Felipe.** Preservar a alternância editorial entre identidade e prova, mas abrir com proposta B2B: cliente ideal, resultado, serviços/processo e CTA de diagnóstico. Cases devem explicitar problema, intervenção e resultado verificável. Uma identidade dark própria pode usar luz 3D roxo/azul apenas como acento contido em objeto abstrato; links devem ter feedback discreto. Sob `prefers-reduced-motion`, remover parallax, rotação e reveals, manter conteúdo imediato e controles de teclado.

**Limitações.** Não houve inspeção em navegador isolado/renderização; a folha CSS pode ser posterior à versão premiada; não há base para afirmar que a indicação WOTY é vitória. A evidência técnica é suficiente para o Astro servido atualmente e para o CSS declarado, não para reconstruir a implementação histórica.

### 2. Mees Verberne

**Reconhecimento e posicionamento.** A CSSDA registra **Website Of The Day em 1 jan. 2025**, score final dos jurados 8,56 e descrição de histórias digitais centradas em creative development, animações interativas e design detalhado [4]. O site se apresenta como “Freelance Creative Developer Designer” e combina desenvolvimento e design [5].

**Padrões observados.** A home usa fundo bege claro, tipografia azul-marinho e acentos laranja na seção de clientes. A hierarquia combina H1 de grande escala, microtexto de apresentação, parágrafos de serviço, grade numerada de projetos, contexto editorial entre peças, clientes e contato. A navegação global oferece Index, Work, About e Contact [5]. Os cards linkam projetos, títulos, números e créditos.

**Medidas computed.** Em navegador isolado a 1280px de largura, a amostra registrou: H1 **203,81px**, line-height **158,972px**, conteúdo do H1 com largura **1216px** a partir de x=32px; texto de corpo **11,2px/14,4px**; hero com padding-top **72px**; margin-bottom de seção **128px**. Cores computadas: texto principal `rgb(34,38,75)`/`#22264B` e clientes `rgb(247,160,38)`/`#F7A026` [5]. O gap retornou `normal`; isso não permite deduzir espaçamento entre colunas. A tentativa de testar 390px alterando `innerWidth` não alterou o viewport real, então não há medida mobile nem breakpoint confirmada.

**Tecnologia e escopo.** Nenhuma biblioteca GSAP, Motion ou Three.js foi confirmada. A tag WebGL da CSSDA é descritor da ficha, não prova de dependência. O CSS público observado foi `e62857b0eb72a8ba3ce567f535e34351.css?ver=aedb3` [4][6].

**Adaptação.** Usar promessa B2B objetiva e prova social na primeira dobra; estruturar cada case por desafio, intervenção e impacto. Uma rota dark secundária pode oferecer experiência de portfólio, mas com a mesma ordem semântica, contraste validado, foco, toque e alternativa estática.

**Limitações.** As medidas são amostras do DOM e das fontes carregadas em uma sessão observada em 9 out. 2026; não são auditoria da versão de 1 jan. 2025, nem se aplicam automaticamente a outras rotas, telas ou estados.

### 3. Eric Huguenin

**Reconhecimento e autoria.** A CSSDA identifica “Eric Huguenin – Creative Developer” e registra **Website Of The Day em 5 jul. 2025**; Ezperanza Studio aparece como colaborador [7]. O site pessoal declara “Creative Front-End developer”, atribui a Eric o desenvolvimento de projetos e traz crédito técnico público `dev : erichuguenin.com` [8][43]. O crédito individual não significa autoria exclusiva de todas as disciplinas.

**Padrões observados.** A home funciona como índice visual de nove projetos, cada um com título e imagem. About e Contact têm rotas diretas; “See project / Click to scroll”, numeração 01–09 e alternância Grid view/List view orientam a navegação [8]. Títulos de projeto têm espaçamento de letras, a imagem de capa é protagonista e a navegação fixa usa blend mode [8]. A página About contextualiza trabalho freelance, clientes, experiência interativa e prêmios [43].

**Medidas reproduzíveis.** O CSS `app.css?ver=1790781712` declara grade de 12 colunas, `--gutter:20px`, `--margin:20px` e coluna calculada por `((--vw − 2×margin − gutter×11)/12)` [9]. O root não define, no trecho observado, a margem efetiva em 1280px. Há breakpoints `max-width:660px`, faixa 661–1024px e vários componentes `max-width:1280px`. O seletor `.aboutrewards--bigtitle` declara 120px, reduz para 7vw até 1600px e 6vw até 660px; a regra 7vw equivale a **89,6px a 1280px para esse seletor específico**, não para o H1 da home [9].

**Adaptação.** Converter o índice visual em proposta, serviços, cases e contato. A alternância grid/list pode inspirar uma escolha acessível, mas o conteúdo deve existir nos dois modos. Um único objeto 3D leve roxo/azul pode ilustrar o serviço, carregado sob demanda e substituído por poster estático. Desligar parallax e transições espaciais sob reduced motion.

**Limitações.** O CSS foi lido estaticamente; tokens podem ser redefinidos e não garantem pixels finais. Não há computed layout da home, nem associação segura entre o título de 89,6px e uma região comercial específica.

### 4. Abhishek Jha

**Reconhecimento e autoria.** A ficha CSSDA registra **Website Of The Day em 20 set. 2025**, com tags animated, typographic e WebGL [10]. O site afirma “Visual Designer & Coder”, “Designed and developed by Abhishek Jha” e “Purely hand-coded” [11].

**Padrões observados.** A experiência abre com identidade e introdução tipográfica de grande escala, depois percorre narrativa sobre o autor, trabalhos, filosofia, serviços e contato. Home/About/Works, links sociais e disponibilidade formam um percurso de apresentação e conversão [11]. O código entregue sugere cursor customizado, sublinhado animado em hover de links, loader com imagens/progresso e movimento associado a projetos [11][12].

**Tecnologia confirmada.** Entrevista Codrops do autor diz que seu portfólio 2025 é o primeiro com WebGL e Three.js [13]. O bundle público `main-D5MQsYQ6.js` contém referência a `gsap`, o que demonstra presença textual de GSAP no bundle, não execução confirmada, mas não determina onde ou com que alcance é usado [14]. Não há evidência apresentada para Motion/Framer Motion. A aparência e a tag WebGL não são usadas isoladamente como prova.

**Medidas reproduzíveis.** No CSS `main-CS-w4MMY.css`, `.nav` declara `padding:30px 4vw`; em uma viewport hipotética de 1280px, 4vw equivale a **51,2px** de cada lado [12]. `.project` declara `width:90%` e `margin-left:5%`, equivalentes a **1152px** e **64px** de margem esquerda se o containing block for 1280px. `.works .float` usa 28vw, equivalente a **358,4px**; `padding:0 3%` equivaleria a **38,4px** se o containing block medir 1280px. Breakpoints encontrados: 599/600px e 1024/1025px, além de regras para 1440px, 1800px e alturas pequenas [12]. Esses são cálculos de declarações CSS, não computed styles.

**Adaptação.** Substituir a abertura imersiva por headline B2B mensurável, CTA de diagnóstico e prova de resultado. Cases devem ter desafio, solução, escopo, resultado e depoimento. O objeto 3D pode ser apoio opcional carregado sob demanda; poster estático, HTML e conteúdo comercial devem funcionar sem WebGL.

**Limitações.** Não houve computed style ou screenshot controlado em 1280px/mobile. As porcentagens e vw dependem do containing block, cascata, fontes e estado; não se pode transformá-las em medidas garantidas do layout final.

### 5. Arnaud Rocca

**Reconhecimento e escopo.** A CSSDA confirma **Website Of The Day em 22 mar. 2026**, descreve o autor como creative developer freelancer em Paris e marca o site como animado, responsivo e WebGL [15].

**Padrões observados.** A navegação é enxuta, com marca AR, Index e About. Na home renderizada, o nome em grande escala divide espaço com um projeto em destaque, descrição e “Discover Project”; disponibilidade e contato surgem no fluxo [16]. O case técnico descreve um slider com autoplay inspirado em Stories, operável por rolagem vertical, teclas esquerda/direita, bullets e arrasto; páginas de projeto usam minimalismo, espaço em branco e cor de acento própria por case [17].

**Stack declarada pelo autor.** O artigo técnico lista Nuxt, GSAP com SplitText e ScrollTrigger, Lenis, OGL e Prismic, e identifica Figma como ferramenta de design [17]. O relato é específico do portfólio e não foi inferido da aparência. Ainda assim, é uma declaração autoral, não inventário independente de dependências carregadas em cada estado.

**Medidas computed.** A execução em Chromium headless usou a home, `networkidle + 1,2s`, escala padrão e viewport 1280×900. O h1 tinha font-size **204,8px** e gap interno **45px**; o body tinha fundo `rgb(39,27,22)` e texto `rgb(247,244,242)`; cabeçalho com padding **32px 48px**, nav gap **16px** e links **14px** [16]. O h1 estava com rect 0×0 naquele instante, então não foi usada uma caixa inválida para proporções. Em 390×900: h1 **56px**, gap **9px**, caixa x=35,y=96,w=320,h=121; cabeçalho **16px**, links **12px**. O breakpoint público do cabeçalho é max-width **960px** [16].

**Adaptação.** Manter múltiplas entradas — rolagem, teclado, bullets e arrasto — mas não exigir autoplay. Cases B2B devem ter problema, solução e prova; reduced motion substitui o slider por lista/estado estático e preserva CTA. Não usar scroll-jacking.

**Limitações.** A home é dinâmica e conteúdo/cores podem mudar por estado. Os números são amostras do viewport e momento indicados; não cobrem páginas internas ou todas as interações.

### 6. Dave Holloway

**Reconhecimento.** A ficha CSSDA registra **Website Of The Day em 4 abr. 2026**, score final 8,04, e descreve Dave Holloway como designer freelancer, creative developer e estrategista [18].

**Padrões observados.** A home organiza Work e Lab; a seção Work reúne muitos cases por cliente e resumo de escopo, enquanto Lab reúne artigos e experimentos [19]. Os resumos ligam cliente, problema/entrega e prova de resultado, o que é relevante para uma presença B2B. A ficha marca animated, illustrated e SVG [18]. A extração textual não permite verificar com segurança paleta, hover, hierarquia visual ou responsividade.

**Stack e delimitação.** A homepage menciona GSAP em descrições de projetos específicos. A página Lab “Space Chase” declara Three.js e GSAP para aquele experimento, e Silverfish cita Motion.page [19][20]. Nenhuma dessas menções prova que o portfólio inteiro usa essas bibliotecas; o escopo deve permanecer limitado ao case que as nomeia.

**Medidas.** Não foram obtidas medidas numéricas confiáveis de gap, padding, escala tipográfica, cor ou breakpoint para 1280px/mobile. As páginas foram lidas por extração textual, sem navegador isolado, CSS público/computed styles ou renderização controlada [18][19].

**Adaptação.** Abrir com serviço, cliente ideal, resultado e CTA; preservar a lógica Work/Lab sem copiar composição. Tema dark próprio, acentos roxo/azul e um único 3D opcional com alternativa estática. Motion deve orientar feedback, não bloquear leitura; reduced motion remove parallax e transições não essenciais.

**Limitações.** A confirmação visual e a auditoria técnica são limitadas. As evidências de biblioteca vêm das descrições editoriais dos cases, não de inspeção independente dos scripts atuais.

### 7. Ravi Klaassens

**Reconhecimento e arquitetura.** A CSSDA exibe **Website Of The Day em 7 abr. 2026**, liga ao site de Ravi e descreve um portfólio de designer/desenvolvedor freelancer que apoia marcas e agências [21]. A home separa Repertoire (Works/Insights), Narrative (About/Brand story/Connect) e Liaison (For Brands/For Agencies) [22]. O hero usa “Design & Code for those who refuse to settle”; trabalhos vêm antes de ofertas específicas, Insights e contatos [22].

**Tecnologia declarada.** O case técnico lista Webflow, GSAP, Barba.js, Slater, Unicorn Studio, Bunny.net, Howler.js e Osmo. Também atribui GSAP a animações, Barba a transições, Unicorn Studio ao hero WebGL e descreve som como opt-in [23]. São informações autorais sobre R—K ’26, não uma auditoria independente dos scripts ativos.

**Medidas reproduzíveis.** O CSS público declara heading XXL como `var(--_sizes---size--64px)` com line-height **1.04em**, heading XL como `var(--_sizes---size--40px)`, parágrafo regular **1em/1.3em** e media queries de framework em max-width **991, 767 e 479px** [24]. Os valores são tokens e unidades relativas; sem contexto do elemento e tamanho-base, não se convertem honestamente em uma escala única de pixels. Não foram obtidos gaps/paddings computed de 1280px/mobile.

**Adaptação.** Converter a faixa superior em Serviços, Cases, Processo e CTA de diagnóstico. Manter a separação para marcas/agências apenas se corresponder ao público de Felipe. Um objeto 3D original pode apoiar a mensagem, com carregamento sob demanda, som desligado por padrão e controles de pausa. Reduced motion remove preloader/reveal e preserva conteúdo.

**Limitações.** Os breakpoints podem ser do framework e não significar a mesma mudança em toda seção. Não se deve reportar “grade de 12 colunas” ou φ como fato medido: o conjunto fornecido não apresenta medida computada pareada.

### 8. Yuta Abe

**Reconhecimento.** A ficha CSSDA identifica o site como portfólio de Yuta Abe, creative developer de Tokyo, com **Website Of The Day em 11 jun. 2026** e tags animated, minimal e WebGL [25].

**Padrões observados.** A página ativa combina canvas em tela cheia com navegação superior em dois grupos: Projects/About à esquerda e Playground/Contact/X/Instagram à direita, com marca central. O título acessível identifica “Yuta Abe — Creative Developer / Interactive Design”; “LIGHTS OUT, PRESS SHIFT!” convida à alternância visual e “MEOW MEOW” aparece na composição [26]. O conteúdo é deliberadamente contido: links pequenos e espaçados, canvas como palco e identidade central sem competir com a experiência.

**Stack e medidas.** Nenhuma biblioteca GSAP, Motion ou Three.js foi confirmada. Canvas, tags WebGL e aparência não bastam para identificar dependência [25][26]. Em navegador isolado, viewport 1280×1100, o header apresentou padding computed **19,2px 38,4px**, gap esquerda/direita **30,72px**, itens de link **12px**, corpo **15,36px** e bounding box **1280×71,03px** [26]. O h1 tinha 1×1px e font-size computed 15,36px; portanto não se atribui ao h1 DOM uma escala visual que a medição não sustenta. Não foi obtido viewport mobile confiável.

**Adaptação.** Traduzir o canvas em painel B2B de Serviços, Cases, Método e Contato; manter a cena 3D como apoio opcional, com fallback estático e HTML acessível. Som desligado por padrão, controles explícitos, foco visível e versão mobile sem cena pesada.

**Limitações.** Canvas não é representado integralmente pelo texto estático; conteúdo e estados podem mudar. A única amostra dimensional é 1280×1100, sem breakpoint confirmado.

### 9. Jesse van Heijningen (Code by Jesse)

**Reconhecimento e posicionamento.** A CSSDA confirma **Website Of The Day em 28 jun. 2026**, associando Jesse van Heijningen ao site e marcando animated, responsive e scroll [27]. A home usa navegação curta, CTA de projeto, título em linhas curtas, relógio/localização e proposta de valor antes dos cases [28].

**Padrões observados.** A narrativa conecta benefício de marca a design, motion e desenvolvimento; cases e números de experiência/clientes reforçam credibilidade. A interface é escura e de alto contraste, com títulos dominantes e controles de menu/fechamento. A existência de motion é compatível com a ficha, mas intensidade, timing e acessibilidade não são auditados por ela [28].

**Scripts e escopo.** URLs de scripts no HTML incluem GSAP 3.15.0 e plugins (incluindo ScrollTrigger), Barba.js 2.10.3, Lenis 1.3.17, hls.js 1.6.11 e Matter.js 0.19.0 [29]. A inclusão pública demonstra carregamento/declaração no documento, não que cada plugin seja utilizado ou qual efeito controla. Não foi confirmada Motion/Framer Motion ou Three.js.

**Medidas reproduzíveis.** O CSS Webflow declara `.scaling-element-header__h1 { font-size:7em }` e, em regra mobile, **13,5vw**. Também contém breakpoints em max-width **991, 767 e 479px** [30]. São declarações minificadas; não houve computed style em 1280px/mobile, portanto gaps, paddings e tamanho em pixels do hero não são reportados.

**Adaptação.** Manter a sequência proposta → cases → contato, porém explicitar cliente, desafio, solução e resultado verificável. Usar dark próprio, roxo/azul e 3D leve com poster estático. `prefers-reduced-motion` deve retirar deslocamentos/distorções e preservar estados imediatos.

**Limitações.** Dependências observadas por URL não equivalem a uso efetivo. O CSS tem cascata, unidades relativas e regras de framework; sem renderização não se atribuem valores finais.

### 10. Russell Numo

**Reconhecimento.** A CSSDA confirma **Website Of The Day em 26 jul. 2026**, categoria web design/dev, e descreve Russell Numo como desenvolvedor criativo em Amsterdam; tags: animated, typographic e WebGL [31].

**Padrões observados.** A home separa About, Projects e Contact por âncoras; títulos numerados 01/02 orientam a leitura. “Frontend developer” e “UX/UI Designer” aparecem antes de perfil, abordagem “from concept to code”, projetos identificados por papel/ano/cliente, serviços expansíveis e contato [32]. A leitura externa registra distorção de imagem e transição de página como elementos genéricos de inspiração, não uma especificação técnica [33].

**Tecnologia e medidas.** Nenhuma biblioteca GSAP, Motion ou Three.js é afirmada. A tag WebGL, o termo “motion” no HTML ou a aparência não são prova de dependência [31][32]. Não foram registados gap, padding, tamanho tipográfico ou breakpoint: a consulta fornecida foi de HTML/texto, sem navegador renderizado isolado ou computed styles [32].

**Adaptação.** Transformar About → Projects → Contact em proposta B2B → cases → CTA. Cards devem mostrar desafio, escopo e impacto, e serviços acionados por clique devem ter estado anunciado, foco e alternativa sem animação. Tema dark próprio, acentos roxo/azul e 3D opcional com poster.

**Limitações.** O site atual pode diferir do estado da premiação; não há números para uma comparação geométrica, logo não há base para proporção áurea nem dominância quantitativa.

### 11. Jesper Landberg

**Reconhecimento.** A CSSDA confirma **Website Of The Day em 31 ago. 2026** e descreve Landberg como engenheiro de design sueco que cria sites visualmente ricos e orientados a movimento [34].

**Padrões observados.** A home prioriza nome/identidade, credenciais e trabalho em destaque. Projetos aparecem como entradas editoriais; Full index, newsletter, contato e redes funcionam como caminhos secundários. O site também publica versão Markdown para acesso não visual [35]. O escopo do benchmark fica apenas neste portfólio, não em outros trabalhos do autor.

**Stack declarada.** O `llms.txt` do site declara GSAP para animação/interação e interfaces WebGL/Three.js em camadas sobre layout HTML, além de navegação dirigida por scroll/arrasto [36]. É declaração do próprio site, suficiente para registrar stack declarada, mas não para garantir que cada biblioteca governa cada interação nem para substituir uma auditoria de bundle.

**Medidas.** Nenhum gap, padding, escala tipográfica ou breakpoint foi obtido com confiabilidade. A leitura textual das páginas não expôs CSS/computed styles ou dimensões; por isso não se afirmam números para 1280px ou mobile [34][35].

**Adaptação.** Traduzir a combinação identidade + índice em um painel de operação B2B com Serviços, Cases, Método e Contato. WebGL pode ser uma camada leve e opcional; conteúdo HTML e CTA devem permanecer completos. Em reduced motion, desligar arrasto/parallax e oferecer navegação direta.

**Limitações.** A auditoria indicada ocorreu em 9 out. 2026; a declaração de stack em `llms.txt` é atual e autoral, não prova histórica de cada detalhe da versão premiada. Não há amostra para afirmar φ ou dominância.

### 12. Eddy Naboulet

**Reconhecimento.** A CSSDA identifica Eddy Naboulet e registra **Website Of The Day em 8 out. 2026**. A descrição oficial aponta portfólio Astro, galeria WebGL, janelas interativas e 404 jogável [37]. O site real apresenta Eddy como desenvolvedor front-end sênior e explicita competências de desenvolvimento [38].

**Padrões observados.** A metáfora de sistema operacional retro percorre barra de menus, arquivos/volumes, caminho de navegação, status, janelas, temas, idiomas e atalhos. O menu oferece contato, currículo, seleção aleatória de projeto, fullscreen, som, efeito CRT, temas e idioma; projetos, trajetória, perfil e contato permanecem acessíveis [38]. Microinterações — janelas, tema, som/CRT, projeto aleatório e 404 — são funcionais e temáticas, mas não constituem auditoria completa de acessibilidade.

**Stack declarada.** A página pública lista React, TypeScript e, em “Développeur créatif”, Three.js, WebGL, GLSL e GSAP; o status também exibe `webgl.drv (three.js)`. A CSSDA descreve o portfólio como Astro [37][38]. Isso registra declarações públicas de tecnologia; não atribui automaticamente Astro, React, GSAP ou Three.js a cada componente.

**Medidas e responsividade.** Foram baixados por HTTP o HTML e as folhas públicas `/_astro/Base.DKJVjgZa.css` e `/_astro/Desktop.CJivPPsu.css`. Elas contêm media queries em width≤1000px e width≤767px, além de `@media (prefers-reduced-motion:reduce)` [39][40]. São condições do código, não prova visual de qual layout está ativo em 1280px ou em uma largura mobile. Como gaps, paddings e fontes variam por componente, nenhum valor único foi generalizado.

**Adaptação.** Reinterpretar o painel retro como “painel de operação” B2B: Serviços, Cases, Método e Contato no primeiro nível; comandos extras em menu secundário. Criar uma cena 3D abstrata própria, leve e roxo/azul, com fallback estático, conteúdo HTML, contraste e foco. Em mobile, reduzir/remover cena; som desligado por padrão; controles explícitos para pausa e tema.

**Limitações.** Acesso por HTTP/texto e CSS, sem navegador isolado; não foram validados estados ao vivo, performance ou acessibilidade. Breakpoints encontrados não devem ser apresentados como medidas de layout confirmadas.

## Medidas, proporção áurea e método

### O que é reproduzível

1. **Computed layout:** Mees Verberne, Arnaud Rocca e Yuta Abe possuem amostras de navegador/DOM com viewport ou dimensões declaradas. Repetir exige o mesmo endereço, fonte, estado, viewport e momento pós-carregamento; não são valores universais.
2. **CSS declarado:** Antoine, Eric, Abhishek, Ravi, Jesse e Eddy oferecem regras, tokens ou media queries que podem ser reencontrados nos URLs públicos. Elas permitem cálculo simples de `vw`, `%` ou tokens, mas não substituem layout computed.
3. **Sem medida:** Dave, Russell e Jesper não tiveram número confiável de layout no pacote; manter a ausência é mais honesto do que deduzir pixels de screenshot, aparência ou tags.

### O que não pode ser afirmado

- **Golden ratio/φ:** nenhum perfil tem um par confiável de dimensões correspondentes, obtido no mesmo layout, que demonstre uso intencional ou universal de aproximadamente 1,618. Tamanho de fonte, gap isolado, número de colunas ou aparência não constituem prova.
- **Dominância:** não existe amostra quantitativa de área, contraste, tempo de exposição, cliques ou atenção que autorize declarar que uma técnica “domina” os 12 vencedores. As observações são padrões qualitativos de cada site.
- **Prevalência de bibliotecas:** não há denominador válido. Tag CSSDA, menção de expertise, bundle incluído ou aparência podem comprovar no máximo uma biblioteca/declaração em um escopo específico; não permitem afirmar que GSAP, Motion, Three.js ou WebGL estão presentes em todos.
- **Causalidade do prêmio:** a presença de uma decisão visual ou técnica não prova que ela causou a premiação.

## Síntese de adaptação para Felipe

1. **Hero B2B antes da ornamentação.** Apresentar serviço, cliente ideal, resultado e CTA “Conversar sobre meu projeto” antes de qualquer objeto 3D.
2. **Cases como prova de decisão.** Cada case deve mostrar problema, intervenção, escopo e resultado verificável; se for conceitual, rotular como conceitual e não inventar métrica.
3. **Dark com função.** Reservar o escuro ao portfólio e às demonstrações; manter áreas comerciais em fundo claro ou contraste controlado. Roxo/azul são acentos próprios, não cópia de paleta dos vencedores.
4. **3D opcional e subordinado.** Um único objeto abstrato, carregado sob demanda, com poster estático, fallback HTML e teste de peso/performance.
5. **Motion progressivo.** Fade curto, feedback de foco/hover e transição breve; sem scroll-jacking. `prefers-reduced-motion` deve remover parallax, rotação, autoplay, preloader e reveals não essenciais.
6. **Acessibilidade não é fallback tardio.** Informação deve aparecer parada, por teclado e toque; foco, contraste, pausa e estados devem ser explícitos.
7. **Métricas só com fonte.** Medidas de layout devem carregar método, viewport, seletor e unidade. Não usar φ, dominância ou prevalência sem amostra reproduzível.

## Referências numeradas

[1] [CSSDA — Antoine Wodniack Portfolio](https://www.cssdesignawards.com/sites/antoine-wodniack-portfolio/46614/) — WOTD, WOTM Nov, nota, tags e critérios.

[2] [Antoine Wodniack — site real](https://wodniack.dev/) — conteúdo, heading, biografia, prêmios, contato, navegação e links sociais.

[3] [Antoine Wodniack — CSS público](https://wodniack.dev/_astro/index.MJ9FiCyD.css) — tipografia declarada e media queries; sem computed style.

[4] [CSSDA — Mees Verberne Creative Developer](https://www.cssdesignawards.com/sites/mees-verberne-creative-developer/46796) — WOTD, data, notas, tags e descrição.

[5] [Mees Verberne — site real](https://meesverberne.com/) — posicionamento, estrutura, projetos, clientes, contato e medidas computed da sessão.

[6] [Mees Verberne — CSS público](https://meesverberne.com/wp-content/litespeed/css/e62857b0eb72a8ba3ce567f535e34351.css?ver=aedb3) — folha observada no DOM.

[7] [CSSDA — Eric Huguenin](https://www.cssdesignawards.com/sites/eric-huguenin/47713/) — WOTD, data, identidade, colaborador, tags e notas.

[8] [Eric Huguenin — site em inglês](https://erichuguenin.com/en/) — marca, navegação, projetos, grid/list e créditos.

[9] [Eric Huguenin — CSS público](https://erichuguenin.com/wp-content/themes/eh/dist/css/app.css?ver=1790781712) — tokens de grade, tipografia e breakpoints.

[10] [CSSDA — Abhishek Jha Folio 25](https://www.cssdesignawards.com/sites/abhishek-jha-folio-25/48067/) — WOTD, data, tags e avaliação.

[11] [Abhishek Jha — site real](https://abhishekjha.me/) — identidade, autoria, navegação, serviços e trabalhos.

[12] [Abhishek Jha — CSS público](https://abhishekjha.me/assets/main-CS-w4MMY.css) — medidas declaradas e breakpoints.

[13] [Codrops — The human side of the interface: Abhishek Jha](https://tympanus.net/codrops/2025/10/24/the-human-side-of-the-interface-abhishek-jhas-art-of-storytelling-through-design/) — declaração de WebGL/Three.js e contexto autoral.

[14] [Abhishek Jha — bundle JS público](https://abhishekjha.me/assets/main-D5MQsYQ6.js) — referência textual a GSAP.

[15] [CSSDA — Arnaud Rocca portfolio](https://www.cssdesignawards.com/sites/arnaud-rocca-portfolio/48998/) — WOTD, data, categoria e tags.

[16] [Arnaud Rocca — site real](https://arnaudrocca.fr/) — navegação, estados e medidas computed em 1280×900 e 390×900.

[17] [Codrops — Arnaud Rocca’s portfolio](https://tympanus.net/codrops/2026/03/31/arnaud-roccas-portfolio-from-a-gsap-powered-motion-system-to-fluid-webgl/) — intenções, navegação e stack declarada.

[18] [CSSDA — Dave Holloway portfolio](https://www.cssdesignawards.com/sites/dave-holloway-portfolio/49076/) — WOTD, data, descrição, tags e score.

[19] [Dave Holloway — site real](https://daveholloway.uk/) — Work/Lab, cases e menções tecnológicas por projeto.

[20] [Dave Holloway — Space Chase](https://daveholloway.uk/lab/space-chase-3d-animation-experiment-with-three-js-gsap/) — Three.js/GSAP no experimento específico.

[21] [CSSDA — Ravi Klaassens](https://www.cssdesignawards.com/sites/ravi-klaassens/49105/) — WOTD, data, descrição e tags.

[22] [Ravi Klaassens — site real](https://www.raviklaassens.com/) — arquitetura editorial, obras, serviços e contatos.

[23] [Codrops — R—K ’26](https://tympanus.net/codrops/2026/04/07/r-k-26-the-thinking-and-code-behind-a-portfolio-led-by-presence/) — stack e decisões autorais.

[24] [Ravi Klaassens — CSS público](https://cdn.prod.website-files.com/69905c96f939ade61f497575/css/rk-demo.webflow.shared.5db33a410.min.css) — tokens tipográficos e media queries.

[25] [CSSDA — Yuta Abe portfolio](https://www.cssdesignawards.com/sites/yuta-abe-portfolio/49418/) — WOTD, data, autor e tags.

[26] [Yuta Abe — site real](https://yutaabe.com/) — canvas, navegação, conteúdo e medidas computed da sessão.

[27] [CSSDA — Code by Jesse](https://www.cssdesignawards.com/sites/code-by-jesse/49543/) — WOTD, data, autor e tags.

[28] [Code by Jesse — site real](https://www.codebyjesse.com/) — navegação, proposta, cases e contato.

[29] [Code by Jesse — HTML/scripts públicos](https://www.codebyjesse.com/) — URLs de GSAP, Barba.js, Lenis, hls.js e Matter.js observadas no documento.

[30] [Code by Jesse — CSS público](https://cdn.prod.website-files.com/69874be3b82240db37624f7c/css/codebyjesse.webflow.shared.28ac0b474.min.css) — escala declarada e breakpoints.

[31] [CSSDA — Russell Numo](https://www.cssdesignawards.com/sites/russell-numo/49728/) — WOTD, data, categoria, tags e avaliações.

[32] [Russell Numo — site real](https://www.russellnumo.nl/) — navegação, perfil, projetos, serviços e contato.

[33] [Awwwards — Russell Numo portfolio](https://www.awwwards.com/sites/russell-numo-portfolio) — fonte corroborativa de elementos de imagem/transição e cores; não usada como prova de biblioteca.

[34] [CSSDA — Jesper Landberg](https://www.cssdesignawards.com/sites/jesper-landberg/49966/) — WOTD, data, descrição, tags e pontuações.

[35] [Jesper Landberg — site real](https://jesperlandberg.com/) — identidade, projetos, índice, newsletter e contato.

[36] [Jesper Landberg — llms.txt](https://jesperlandberg.com/llms.txt) — declaração autoral de GSAP, Three.js/WebGL e arquitetura HTML.

[37] [CSSDA — Eddy Naboulet](https://www.cssdesignawards.com/sites/eddyos-eddy-naboulet/50204/) — WOTD, data, Astro/WebGL e recursos anunciados.

[38] [Eddy Naboulet — site real](https://eddy-naboulet.dev/) — metáfora de sistema, navegação, perfil e competências.

[39] [Eddy Naboulet — CSS Base](https://eddy-naboulet.dev/_astro/Base.DKJVjgZa.css) — breakpoints e `prefers-reduced-motion`.

[40] [Eddy Naboulet — CSS Desktop](https://eddy-naboulet.dev/_astro/Desktop.CJivPPsu.css) — regras desktop/responsivas e reduced motion.

[41] [CSSDA — WOTY 2024: Antoine Wodniack](https://www.cssdesignawards.com/woty2024/sites/antoine-wodniack-portfolio) — indicação a Website of the Year 2024; não tratada como vitória.

[42] [GitHub — AW-2025-Portfolio](https://github.com/AntoineW/AW-2025-Portfolio) — repositório posterior, identificado como Open Source Edition; não usado para inferir o build premiado.

[43] [Eric Huguenin — About](https://erichuguenin.com/en/about/) — perfil, experiência, clientes e contato.

## Limitações finais

- O conjunto não inclui análise visual/UI completa dos 12 sites; cada afirmação fica limitada à fonte citada e ao método indicado.
- Alguns sites são dinâmicos e podem mudar após a consulta; conteúdo de canvas, slider, tema ou CMS não é estável.
- Medidas computed dependem de fonte carregada, viewport, estado, tempo pós-carregamento e endereço consultado. Medidas CSS declaradas não são substitutas de computed layout.
- A data de consulta fornecida nos resultados aparece como 9 out. 2026 para auditorias posteriores; ela não transforma a análise atual em auditoria histórica da versão premiada.
- As recomendações para Felipe Inácio são adaptações originais de estrutura e intenção; nenhum código, texto, asset, logo ou composição foi reproduzido.
