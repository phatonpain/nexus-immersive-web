# Benchmark de UI premium — Felipe Inácio

## Escopo, método e contagem correta

Este documento agora conta **somente portfólios pessoais reais no corpo principal**. A base final tem **20 portfólios premiados confirmados**:

- **8 portfólios Awwwards SOTD** já verificados no relatório anterior e preservados abaixo.
- **12 portfólios CSS Design Awards (CSSDA) WOTD** adicionados a partir dos resultados recebidos, todos com data, nível do prêmio, site real e fontes identificadas.

Elementos de inspiração da Awwwards, um case study técnico e páginas de produtos SaaS **não são portfólios** e foram movidos para [Referências auxiliares](#referências-auxiliares). Eles não entram na contagem de 20. Não houve nova pesquisa: a revisão usa apenas o conteúdo do relatório anterior e os resultados fornecidos no complemento. Não foram baixados assets, copiados textos, logos ou código.

A ficha oficial do prêmio comprova o reconhecimento, a data, o autor, a descrição e as tags que ela própria publica; não é, por si só, uma auditoria de implementação. Quando uma biblioteca, medida, breakpoint ou comportamento não foi demonstrado, permanece **não confirmado**. Números de CSS declarados são distinguidos de medidas computed/renderizadas.

## Portfólios premiados confirmados

### Os oito registros preservados

Os oito registros abaixo permanecem como estavam no benchmark anterior. As fontes são Awwwards e os sites reais; os elementos Awwwards associados foram retirados do corpo principal e estão na seção auxiliar.

| Portfólio | Data do SOTD | Fonte oficial |
| --- | --- | --- |
| Cyd Stumpel | 09/03/2025 | [Awwwards](https://www.awwwards.com/sites/cyd-stumpel-portfolio-2025) |
| Henri Heymans | 25/02/2025 | [Awwwards](https://www.awwwards.com/sites/henri-heymans-25) |
| Roman Jean-Elie | 02/11/2025 | [Awwwards](https://www.awwwards.com/sites/portfolio-25-1) |
| Eduard Bodak | 14/06/2025 | [Awwwards](https://www.awwwards.com/sites/eduard-bodak-portfolio) |
| Stefan Vitasović | 20/09/2025 | [Awwwards](https://www.awwwards.com/sites/stefan-vitasovic-portfolio25) |
| Corentin Bernadou | 25/03/2026 | [Awwwards](https://www.awwwards.com/sites/corentin-bernadou-portfolio) |
| MAX MILKIN | 13/12/2025 | [Awwwards](https://www.awwwards.com/sites/max-milkin-portfolio) |
| Elliott Mangham | 02/12/2025 | [Awwwards](https://www.awwwards.com/sites/elliott-mangham) |

1. **Cyd Stumpel — portfólio pessoal, Awwwards SOTD.** A hierarquia passa por nome, papéis, biografia, trabalhos, serviços, artigos e contato. A ficha registra View Transitions e Scroll Driven Animations, além da paleta publicada `#8082F8/#FFF5EE` [R01]; o site real é `cydstumpel.nl` [R51]. Não foram medidos CSS, viewport ou timing; não há base para atribuir GSAP ou Three.js à home. Adaptação: hero B2B claro, cases escuros próprios e motion progressivo.
2. **Henri Heymans — portfólio pessoal, Awwwards SOTD.** A entrada apresenta “Click to enter”, navegação BIO/WORKS/GALLERY/CONTACT, bio, tecnologias, prêmios e CTA. A ficha cataloga intro, scroll, gallery e hover, com paleta preto/branco [R02]; o site real é `henriheymans.com` [R52]. O canvas e as tags não provam cada implementação; grid, escala e breakpoints não foram aferidos. Adaptação: entrada opcional curta, sem bloquear leitura, e CTA comercial persistente.
3. **Roman Jean-Elie — portfólio pessoal, Awwwards SOTD.** A narrativa é organizada em CINEMA–THEATER–CODE, anos, progresso, navegação CONTACT/ABOUT/WORK/HOME e projetos com descritores [R03]; o site real é `romanjeanelie.com` [R53]. A fonte não expõe medidas nem comprova comportamento em todos os dispositivos. Adaptação: índice de conceitos controlável e acessível, não uma linha do tempo copiada.
4. **Eduard Bodak — portfólio pessoal, Awwwards SOTD.** A estrutura Service/Work/Connect inclui seletor EN/DE, cases, serviços, preços informativos, FAQ e contato; a ficha cataloga microinterações, mouse follower, progresso, FAQ e transições [R04]; o site real é `eduardbodak.com` [R54]. A submissão premiada e a home atual podem divergir, e tags não são prova de comportamento atual. Adaptação: benefício claro, cards conceituais e FAQ legível, sem copiar a combinação yellow/black.
5. **Stefan Vitasović — portfólio pessoal, Awwwards SOTD.** A apresentação editorial articula Intro/Projects/About, composição assimétrica, espaço negativo, grid de vídeos e fallback mobile descrito no case técnico. O artigo autoral nomeia Framer Motion, Three.js, React Three Fiber, Lethargy e virtual scroll no [case autoral do Codrops](https://tympanus.net/codrops/2025/03/05/case-study-stefan-vitasovic-portfolio-2025/) [R05]; o site real é `stefanvitasovic.dev` [R55]. Isso documenta uma versão datada, não a versão atual nem autorização para copiar composição. Adaptação: usar o Framer já presente, sem scroll hijack ou WebGL adicional.
6. **Corentin Bernadou — portfólio pessoal, Awwwards SOTD.** A home apresenta Featured Works/Archive/About, disponibilidade, metadados de edição, seis projetos repetidos e affordance “Copy email?”. A paleta publicada é `#FF4401/#070304` [R06]; o site real é `corentinbernadou.com` [R56]. A repetição textual sugere loop, mas não prova direção ou timing; layout e foco não foram medidos. Adaptação: índice editorial próprio, sem loop contínuo dependente de hover.
7. **MAX MILKIN — portfólio pessoal, Awwwards SOTD.** A sequência manifesto → posicionamento → about → prêmios → projetos → expertise → contato usa índices e edição; a paleta publicada é `#C2CABB/#10120F` [R07]; o site real é `maxmilkin.com` [R57]. Percentuais, contadores e texto espaçado não comprovam motion específico. Adaptação: progressão de confiança B2B, sem métricas inventadas.
8. **Elliott Mangham — portfólio pessoal, Awwwards SOTD.** HTML/CSS servido documenta cinco colunas, gap de 40px, padding de 20px, fontes Neue Montreal/Roobert Mono, clamp de 11–13px e troca de layout até 1024px; a ficha lista GSAP, JavaScript e Vite [R08]; o site real é `elliott.mangham.dev` [R58]. A ficha de ferramentas não prova que GSAP controla todo efeito, e não houve auditoria runtime. É uma das referências do pacote com medidas CSS explicitamente reproduzíveis. Adaptação: tokens clamp e grid editorial, com texto maior para B2B.

### Doze novos registros CSSDA

#### 9. Antoine Wodniack — Website Of The Day + Website Of The Month

- **Prêmio e elegibilidade:** a ficha CSSDA registra **Website Of The Day em 27 nov. 2024** e **Website Of The Month de novembro**, com nota final de júri 8,87; a página do WOTY é apenas indicação, não vitória [R09][R49]. O site real é o portfólio pessoal `wodniack.dev` [R10].
- **Padrões observados:** página única com apresentação pessoal, sobre, prêmios, trajetória e contato; alterna informação profissional direta com narrativa biográfica visual. A hierarquia inclui “Creative Developer”, textos curtos, Awards, memórias/projetos, links sociais, e-mail e controle “Change contrast” [R10].
- **Stack e evidência:** o HTML expõe o gerador Astro v4.15.9; o site pessoal lista distinções GSAP SOTM em outubro e novembro de 2024. Isso comprova Astro na versão acessada e reconhecimento associado ao autor, mas não prova GSAP nesta página específica. O repositório aberto em 2025 é posterior à premiação e se identifica como Open Source Edition; não é usado para inferir o build premiado [R10][R11][R50]. Não atribuo Motion ou Three.js por aparência.
- **Medidas reproduzíveis:** o HTML aponta `/_astro/index.MJ9FiCyD.css`; a inspeção textual encontrou `font-size:14vw`, outra regra `calc(31vw - 1rem)` e media queries em 576, 767, 987, 1080 e 1280px. São declarações CSS; não foi possível ligar cada regra a um elemento nem obter computed layout [R11].
- **Adaptação:** para Felipe, converter a narrativa em percurso B2B: promessa objetiva, prova de expertise, serviços/processo, cases com problema-resultado e CTA de diagnóstico. A identidade pode usar dark com luz 3D roxo/azul contida e controle de contraste; retirar parallax, rotação e reveals sob `prefers-reduced-motion`.
- **Limitações:** não houve navegador isolado/renderização; o CSS pode ser posterior à premiação; escalas, gaps, paddings e layout computed para 1280px/mobile não foram inventados. A elegibilidade se limita ao prêmio exibido pela CSSDA.

#### 10. Mees Verberne — Website Of The Day

- **Prêmio e elegibilidade:** a CSSDA registra **Website Of The Day em 1 jan. 2025**, score final 8,56, e liga o prêmio ao site de Mees Verberne [R12]. O portfólio se apresenta como “Freelance Creative Developer Designer” [R13].
- **Padrões observados:** fundo bege claro e tipografia azul-marinho; a seção de clientes usa acentos laranja. A home combina H1 de grande escala, microtexto de apresentação, parágrafos de serviço, grade numerada de projetos, contexto editorial, clientes e contato; a navegação oferece Index, Work, About e Contact [R13].
- **Medidas reproduzíveis:** em viewport de **1280px** no navegador isolado, H1 computed de **203,81px** com line-height **158,972px**, largura do conteúdo **1216px** e início em x=32px; corpo **11,2px/14,4px**; hero com padding-top **72px**; margin-bottom de seção **128px**; texto `#22264B` e clientes `#F7A026` [R13]. Gap retornou “normal”; não há medida mobile ou breakpoint confiável.
- **Stack e evidência:** não foram confirmadas GSAP, Motion ou Three.js. A tag WebGL da CSSDA é descritor, não prova de biblioteca. O CSS observado foi `e62857b0eb72a8ba3ce567f535e34351.css?ver=aedb3` [R12][R14].
- **Adaptação:** usar promessa B2B acima da dobra, prova social, escopo e CTA de diagnóstico; cards com desafio, intervenção e impacto verificável. Uma rota dark pode ser secundária, com fallback estático, foco visível e reduced motion.
- **Limitações:** o viewport mobile real não foi configurado; as medidas são amostras da sessão de 9 out. 2026 e não devem ser generalizadas para outras rotas ou para a versão histórica do prêmio.

#### 11. Eric Huguenin — Website Of The Day

- **Prêmio e autoria:** a ficha CSSDA registra **Website Of The Day em 5 jul. 2025** e identifica o site como Eric Huguenin – Creative Developer; Ezperanza Studio aparece como colaborador [R15]. O site pessoal atribui a Eric o desenvolvimento de projetos e traz crédito técnico `dev : erichuguenin.com` [R16][R17].
- **Padrões observados:** a home funciona como índice visual de nove projetos numerados, com título e imagem; About e Contact mantêm rotas diretas; há “See project / Click to scroll”, disponibilidade e alternância Grid view/List view [R16]. A direção é editorial, com imagem protagonista, espaçamento de letras e navegação fixa com blend mode [R16].
- **Medidas reproduzíveis:** o CSS público `app.css?ver=1790781712` declara grade de 12 colunas, `--gutter:20px`, `--margin:20px` e coluna `((--vw − 2×margin − gutter×11)/12)`. Também declara breakpoints `max-width:660px`, intervalo 661–1024px e componentes `max-width:1280px`; `.aboutrewards--bigtitle` usa 120px, reduz 7vw até 1600px e 6vw até 660px, portanto 89,6px a 1280px para esse seletor [R18]. São valores declarados, não computed da home.
- **Adaptação:** transformar a sequência em proposta, serviços, cases e contato; usar uma peça 3D leve roxo/azul ligada ao serviço, fallback estático e grid/lista acessível. Desligar parallax e transições espaciais com reduced motion.
- **Limitações:** leitura por HTTP/HTML/CSS, sem renderização isolada; tokens podem ser redefinidos por componente; não generalizar o título de About para a home.

#### 12. Abhishek Jha — Website Of The Day

- **Prêmio e elegibilidade:** a CSSDA registra **Website Of The Day em 20 set. 2025**, com tags animated, typographic e WebGL [R19]. O site declara “Visual Designer & Coder”, “Designed and developed by Abhishek Jha” e “Purely hand-coded” [R20].
- **Padrões observados:** abertura imersiva e tipográfica; depois narrativa sobre autor, trabalhos em destaque, filosofia, serviços e contato. A navegação oferece Home/About/Works, links sociais e disponibilidade. O código público sugere cursor customizado, sublinhado animado em links e loader [R20].
- **Stack e evidência:** entrevista do autor afirma que o portfólio 2025 é o primeiro dele com WebGL e Three.js; o bundle público contém referência a `gsap`. Isso sustenta a declaração sobre Three.js e presença textual de GSAP no bundle, mas não prova execução nem o escopo de cada animação. Não há base para Motion [R22][R23].
- **Medidas reproduzíveis:** CSS `main-CS-w4MMY.css` declara `.nav { padding:30px 4vw }`; a 1280px, 4vw equivale a 51,2px laterais. `.project { width:90%; margin-left:5% }` equivale a 1152px e x=64px se seu containing block medir 1280px; `.works .float` usa 28vw, equivalente a 358,4px; `padding:0 3%` equivale a 38,4px sob a mesma condição. Breakpoints encontrados: 599/600, 1024/1025, além de regras para 1440 e 1800px [R21].
- **Adaptação:** abrir com headline B2B mensurável, CTA de diagnóstico e cases com desafio, solução, escopo, resultado e depoimento. Um objeto 3D deve ser opcional, carregado sob demanda, com poster estático e conteúdo completo sem WebGL.
- **Limitações:** não há computed styles nem screenshots controlados; valores são CSS declarado e não tamanho visual final.

#### 13. Arnaud Rocca — Website Of The Day

- **Prêmio e elegibilidade:** a ficha confirma **Website Of The Day em 22 mar. 2026**, autor creative developer freelancer em Paris, e tags animated, responsive e WebGL [R24].
- **Padrões observados:** cabeçalho enxuto com marca AR, Index e About; na home, nome em grande escala, projeto em destaque, descrição e “Discover Project”, além de disponibilidade e contatos [R25]. O autor descreve slider com autoplay inspirado em Stories, operável por rolagem vertical, teclas esquerda/direita, bullets e arrasto; páginas de projeto usam espaço em branco e cor de acento por case [R26].
- **Stack declarada:** o case técnico lista Nuxt, GSAP com SplitText e ScrollTrigger, Lenis, OGL, Prismic e Figma; também descreve efeitos GSAP e interação WebGL [R26]. É declaração do autor para este portfólio, não inventário independente de dependências.
- **Medidas reproduzíveis:** em Chromium headless, 1280×900, h1 computed **204,8px**, gap interno **45px**, body com fundo `rgb(39,27,22)` e texto `rgb(247,244,242)`, cabeçalho padding **32px 48px**, nav gap **16px**, links **14px**. A caixa do h1 foi 0×0 naquele estado e não é usada para proporções. Em 390×900: h1 **56px**, gap **9px**, caixa x=35,y=96,w=320,h=121; header padding **16px**, links **12px**. Breakpoint do cabeçalho: max-width **960px** [R25].
- **Adaptação:** múltiplas entradas sem autoplay obrigatório, teclas e bullets, com CTA B2B visível. Substituir slider e WebGL por estado estático sob reduced motion; não usar scroll-jacking.
- **Limitações:** home dinâmica; os números são amostras do momento/estado e não abrangem páginas internas ou todos os estados do slider.

#### 14. Dave Holloway — Website Of The Day

- **Prêmio e elegibilidade:** a ficha CSSDA registra **Website Of The Day em 4 abr. 2026**, score final 8,04, e descreve Dave Holloway como designer freelancer, creative developer e estrategista [R27].
- **Padrões observados:** a home comunica serviço criativo e organiza Work e Lab; os resumos conectam cliente, problema/entrega e prova de resultado. A ficha marca animated, illustrated e SVG, mas extração textual não permite verificar hover ou hierarquia renderizada [R28].
- **Stack e escopo:** as descrições de casos citam GSAP para projetos específicos; o experimento Space Chase declara Three.js e GSAP; Silverfish cita Motion.page. Isso não prova que a homepage inteira use essas bibliotecas [R28][R29].
- **Medidas:** não obtidas. As páginas foram lidas por extração textual, sem CSS público/computed styles nem navegador isolado; não se reportam gap, padding, escala, cor ou breakpoint [R27][R28].
- **Adaptação:** fundo grafite, tipografia legível, acentos roxo/azul e um único elemento 3D sob demanda com alternativa estática. Motion deve ser feedback funcional, removido com reduced motion, preservando CTA e leitura.
- **Limitações:** confirmação visual e medidas responsivas não foram possíveis; a evidência de bibliotecas vale apenas para os cases explicitamente citados.

#### 15. Ravi Klaassens — Website Of The Day

- **Prêmio e elegibilidade:** a CSSDA exibe **Website Of The Day em 7 abr. 2026**, ligando ao portfólio de Ravi e descrevendo designer/desenvolvedor freelancer que apoia marcas e agências [R30].
- **Padrões observados:** a arquitetura distingue Repertoire (Works/Insights), Narrative (About/Brand story/Connect) e Liaison (For Brands/For Agencies). O hero traz “Design & Code for those who refuse to settle”; projetos antecedem ofertas e conteúdo editorial [R31]. A ficha marca animated, grid e typographic [R30].
- **Stack declarada:** o case técnico lista Webflow, GSAP, Barba.js, Slater, Unicorn Studio, Bunny.net, Howler.js e Osmo; atribui GSAP a animações, Barba a transições e Unicorn Studio ao hero WebGL [R32]. O relato é autoral, não auditoria de scripts.
- **Medidas reproduzíveis:** não foram obtidas medidas computed. O CSS declara heading XXL `var(--_sizes---size--64px)` com line-height 1.04em, heading XL `--size--40px`, parágrafo regular 1em/1.3em e media queries em 991, 767 e 479px. São tokens e condições do CSS, não pixels de 1280px/mobile [R33].
- **Adaptação:** faixa superior com Serviços, Cases, Processo e CTA; usar objeto 3D original apenas como apoio da mensagem, som desligado por padrão e controle explícito. Com reduced motion, manter conteúdo e CTA sem preloader/reveal.
- **Limitações:** valores declarados podem variar por contexto; não atribuir os breakpoints do framework a mudanças específicas do portfólio.

#### 16. Yuta Abe — Website Of The Day

- **Prêmio e elegibilidade:** a CSSDA identifica o portfólio de Yuta Abe, creative developer de Tokyo, com **Website Of The Day em 11 jun. 2026** e tags animated, minimal e WebGL [R34].
- **Padrões observados:** canvas de tela cheia e navegação superior em dois grupos: Projects/About à esquerda e Playground/Contact/X/Instagram à direita, com marca central. O conteúdo acessível inclui “Yuta Abe — Creative Developer / Interactive Design” e o convite “LIGHTS OUT, PRESS SHIFT!” [R35].
- **Stack:** nenhuma biblioteca GSAP, Motion ou Three.js foi confirmada. Canvas e tags WebGL/animated não bastam para identificar dependência [R34][R35].
- **Medidas reproduzíveis:** em 1280×1100, header padding computed **19,2px 38,4px**, gap esquerda/direita **30,72px**, links **12px**, corpo **15,36px**, header bounding box **1280×71,03px**. O h1 DOM tinha 1×1px e font-size 15,36px; não se atribui escala visual ao h1. Não houve viewport mobile confiável [R35].
- **Adaptação:** painel B2B claro com Serviços, Cases, Método e Contato; cena 3D abstrata roxo/azul opcional, fallback HTML e controles de pausa/som. Em mobile, remover ou reduzir a cena sem esconder o conteúdo.
- **Limitações:** canvas e estados interativos podem mudar; só 1280×1100 foi medido e as métricas são do estado acessível no momento da consulta.

#### 17. Jesse van Heijningen (Code by Jesse) — Website Of The Day

- **Prêmio e elegibilidade:** a CSSDA confirma **Website Of The Day em 28 jun. 2026**, com tags animated, responsive e scroll; o site o apresenta como designer/developer [R36][R37].
- **Padrões observados:** navegação curta (Home, Cases, Over mij, Contact) e CTA de projeto; título em linhas curtas, relógio/localização e proposta de valor precedem cases. A interface escura usa títulos dominantes; páginas separadas sustentam percurso de avaliação e contato [R37].
- **Bibliotecas declaradas no HTML:** GSAP 3.15.0 e plugins, Barba.js 2.10.3, Lenis 1.3.17, hls.js 1.6.11 e Matter.js 0.19.0 aparecem como scripts públicos. Isso prova inclusão/carregamento no documento, não que cada biblioteca controle uma interação; não foi confirmada Motion/Framer Motion ou Three.js [R38].
- **Medidas reproduzíveis:** CSS público declara `.scaling-element-header__h1` com `font-size:7em` e, em breakpoint mobile, `13.5vw`; breakpoints Webflow em 991, 767 e 479px. Não há computed style de 1280px/mobile nem gap/padding confiável do hero [R39].
- **Adaptação:** manter a sequência proposta → cases → contato, mas explicitar problema, solução e resultado. Usar dark próprio com roxo/azul e 3D leve com poster estático; motion removível e foco visível.
- **Limitações:** dependências foram observadas por URLs de script, sem prova de uso efetivo; CSS minificado e cascata podem alterar a renderização.

#### 18. Russell Numo — Website Of The Day

- **Prêmio e elegibilidade:** a ficha CSSDA confirma **Website Of The Day em 26 jul. 2026**, categoria web design/dev, e descreve portfólio pessoal de desenvolvedor criativo em Amsterdam; tags animated, typographic e WebGL [R40].
- **Padrões observados:** âncoras About, Projects e Contact; títulos numerados 01/02; “Frontend developer” e “UX/UI Designer” precedem perfil, abordagem “from concept to code”, projetos por papel/ano/cliente, serviços acionados por clique e contato [R41].
- **Bibliotecas e medidas:** não há biblioteca GSAP, Motion ou Three.js afirmada. A tag WebGL e o termo “motion” no HTML não identificam dependência [R40][R41]. Não foram obtidos gap, padding, escala, breakpoint ou medidas computed; a fonte foi HTML/texto público [R41].
- **Adaptação:** sequência About → Projects → Contact convertida em proposta, cases e CTA; usar tema dark com acentos próprios e um bloco 3D opcional, poster estático e fallback HTML. Serviços expansíveis devem ter estado claro e funcionar sem animação.
- **Limitações:** a home atual pode diferir da versão premiada; nenhuma medida de desktop/mobile foi inventada.

#### 19. Jesper Landberg — Website Of The Day

- **Prêmio e elegibilidade:** a CSSDA confirma **Website Of The Day em 31 ago. 2026** e descreve Landberg como engenheiro de design sueco que cria sites ricos em movimento [R42].
- **Padrões observados:** a home prioriza nome/identidade, credenciais e trabalho em destaque; projetos são entradas editoriais, enquanto Full index, newsletter, contato e redes ficam como caminhos secundários. O site também publica versão Markdown [R43].
- **Stack declarada:** o `llms.txt` do site declara GSAP, Three.js/WebGL em camadas sobre layout HTML e técnicas de animação/interação; é declaração do autor/site, não auditoria independente do bundle [R44].
- **Medidas:** nenhum gap, padding, escala tipográfica ou breakpoint foi obtido com confiabilidade. A leitura textual não expôs CSS/computed styles nem dimensões; não se reportam números para 1280px/mobile [R42][R43].
- **Adaptação:** painel B2B inspirado em interface navegável, com Serviços, Cases, Método e Contato; cena 3D abstrata sob demanda, fallback estático, reduced motion, foco e controles de pausa/som. Conteúdo profissional deve continuar útil sem WebGL.
- **Limitações:** a consulta ocorreu em 9 out. 2026; stack e descrição são autorais e podem referir-se ao site atual, não a cada estado do prêmio.

#### 20. Eddy Naboulet — Website Of The Day

- **Prêmio e elegibilidade:** a CSSDA identifica o portfólio de Eddy Naboulet como **Website Of The Day em 8 out. 2026**, com galeria WebGL, janelas interativas e 404 jogável [R45]. O site se apresenta como portfólio profissional e desenvolvedor front-end sênior [R46].
- **Padrões observados:** metáfora de sistema operacional retro com barra de menus, arquivos/volumes, caminho de navegação, status, janelas, temas, idiomas e atalhos. O menu oferece contato, currículo, projeto aleatório, fullscreen, som, CRT, temas e idioma; projetos, trajetória, perfil e contato permanecem acessíveis [R46].
- **Stack e evidência:** o site declara React, TypeScript, Three.js, WebGL, GLSL e GSAP em competências/status; a ficha CSSDA descreve Astro. Isso sustenta declarações públicas de tecnologia, mas não atribui uma biblioteca a cada interação [R45][R46].
- **Medidas reproduzíveis:** o CSS público `Base.DKJVjgZa.css` e `Desktop.CJivPPsu.css` contém media queries em width≤1000px, ≤767px e regras de `prefers-reduced-motion: reduce`; não se atribuem gap, padding ou escalas ao layout sem computed styles [R47][R48].
- **Adaptação:** traduzir o retro em painel de operação B2B: Serviços, Cases, Método e Contato, mantendo comandos secundários. Criar cena 3D original leve, com fallback estático, conteúdo HTML, contraste e navegação por teclado; em mobile, reduzir a cena.
- **Limitações:** acesso por HTTP/texto e CSS, sem navegador isolado; breakpoints são condições do código, não prova de qual layout está ativo em cada viewport.

> **Limite das adaptações:** recomendações de métricas, clientes, resultados ou depoimentos valem apenas para futuros cases reais com autorização e evidência. O site atual mantém os três estudos conceituais, sem inventar provas comerciais.

## Síntese aplicável ao projeto

### Leis Absolutas — editorial de princípios, não leis científicas

O título é deliberadamente editorial. Estas **não são leis científicas, estatísticas, universais ou regras de prevalência**; são princípios de decisão derivados dos 20 portfólios e das limitações da evidência:

1. **A proposta vem antes do efeito.** Hero e primeiros blocos devem explicar o que Felipe faz, para quem e qual é o próximo passo antes de 3D, brilho ou canvas.
2. **A navegação deve ser direta.** Serviços, Projetos, Processo, Planos e Contato precisam ser alcançáveis sem depender de intro, hover ou scroll capturado.
3. **O contraste deve ter função.** O dark pode marcar o Portfólio e explorações conceituais; conteúdo comercial e leitura permanecem claros e escaneáveis.
4. **Todo card precisa ser compreensível parado.** Hover, scroll e entrada são reforços; título, natureza do estudo e ação permanecem visíveis a teclado, toque e reduced motion.
5. **Motion é progressivo.** Framer Motion e CSS já disponíveis bastam para fade, feedback e entrada curta; não se adicionam GSAP, Three.js ou outro pacote por modismo.
6. **Medida só entra quando é reproduzível.** Medidas declaradas devem vir com seletor, unidade e método; medidas computed devem indicar viewport e estado. Não há base para golden ratio/φ.
7. **A prova precisa ser verificável.** Não criar clientes, métricas, resultados ou depoimentos. Em painéis conceituais, estados qualitativos substituem números fictícios.
8. **O próximo passo precisa ser transparente.** Contatos demonstrativos continuam desativados; o formulário explica isso e não simula backend.

### Limitações globais

- A contagem corrigida é de **20 portfólios premiados confirmados**, sendo 8 Awwwards SOTD preservados e 12 CSSDA WOTD adicionados. As 12 referências auxiliares abaixo não entram na contagem.
- Não há denominador válido para declarar prevalência de Framer Motion, GSAP, Three.js, WebGL, View Transitions ou qualquer biblioteca. Tags, expertise e scripts incluídos não provam uso em todos os efeitos.
- “Proporção áurea”, φ ou dominância visual não foram declarados em nenhum perfil: não existe amostra pareada e suficiente de medidas geométricas correspondentes.
- Algumas medidas são CSS declarado; outras são amostras computed de uma sessão. Elas não devem ser generalizadas para todo o site, todas as rotas ou a versão histórica do prêmio.
- As recomendações para Felipe são adaptações originais, não reprodução de layout, copy, código, logo ou assets.

## Referências auxiliares

Estas fontes foram preservadas para contexto, mas **não são portfólios adicionais e não aumentam o total confirmado**:

1. [Awwwards — Default page transition — Cyd](https://www.awwwards.com/inspiration/default-page-transition-cyd-stumpel-portfolio-2025): elemento de page transition/View Transition API; sem duração, easing ou código verificável.
2. [Awwwards — Page loading — Cyd](https://www.awwwards.com/inspiration/page-loading-cyd-stumpel-portfolio-2025): elemento com categorias loading/parallax/3D/variable fonts; tags não provam implementação.
3. [Awwwards — Site intro interaction — Henri](https://www.awwwards.com/inspiration/site-intro-interaction-henri-heymans-25): interação de intro associada à entrada; não especifica técnica, teclado ou toque.
4. [Awwwards — Gallery transition + scroll — Henri](https://www.awwwards.com/inspiration/gallery-transition-scroll-henri-heymans-25): ficha de transição/scroll da Gallery; não comprova scroll hijack ou easing.
5. [Awwwards — Project hover — Henri](https://www.awwwards.com/inspiration/project-hover-henri-heymans-25): padrão de hover; hover sozinho não atende teclado/toque.
6. [Awwwards — Homepage scroll — Henri](https://www.awwwards.com/inspiration/homepage-scroll-henri-heymans-25): comportamento de scroll sem gatilho ou mecanismo especificado.
7. [Codrops — Case study: Stefan Vitasovic portfolio 2025](https://tympanus.net/codrops/2025/03/05/case-study-stefan-vitasovic-portfolio-2025/): declaração autoral técnica datada, usada como contexto do portfólio de Stefan, não como novo portfólio.
8. [Vercel — Homepage](https://vercel.com/): benchmark de copy B2B/SaaS; “Agentic Infrastructure”, “Deploy now” e “Talk to sales” pertencem ao produto Vercel.
9. [Vercel — Next.js platform](https://vercel.com/frameworks/nextjs): benchmark de produto/self-service; não é serviço customizado de Felipe.
10. [Linear — Homepage](https://linear.app/): benchmark de copy de produto; não é referência de portfólio.
11. [Linear — Plan](https://linear.app/plan): narrativa de planejamento de produto; não é case ou portfólio.
12. [Stripe — Homepage e Payments](https://stripe.com/): benchmark de mensagem B2B financeira; não autoriza claims de infraestrutura ou resultado para Felipe.

## Decisões adotadas

- Hierarquia: **proposta de valor → capacidades/formatos → estudos conceituais e contato**.
- Design editorial claro com roxo `#8B5CF6` e azul `#3B82F6`; apenas Portfólio em obsidiana.
- Copy B2B específica: “Sites e sistemas feitos para o jeito que seu negócio trabalha.” e “Conversar sobre meu projeto”.
- Pré-visualizações em HTML/CSS; cada estudo é marcado como conceitual e abre diálogo acessível.
- Tokens clamp e tipografia funcional: Hero de apoio 15–17px, descrições centrais de 14px e labels de aproximadamente 11–12px; microtexto decorativo permanece puramente visual.
- Framer Motion e CSS apenas quando ajudam a orientar a leitura; `prefers-reduced-motion` remove animações decorativas, delays e transições não essenciais.

## Referências numeradas

[R01] [Awwwards — Cyd Stumpel portfolio 2025](https://www.awwwards.com/sites/cyd-stumpel-portfolio-2025) — ficha do prêmio e tags.

[R02] [Awwwards — Henri Heymans 25](https://www.awwwards.com/sites/henri-heymans-25) — ficha do prêmio e tags.

[R03] [Awwwards — Portfolio 25 — Roman Jean-Elie](https://www.awwwards.com/sites/portfolio-25-1) — ficha do prêmio.

[R04] [Awwwards — Eduard Bodak portfolio](https://www.awwwards.com/sites/eduard-bodak-portfolio) — ficha do prêmio.

[R05] [Awwwards — Stefan Vitasovic portfolio 25](https://www.awwwards.com/sites/stefan-vitasovic-portfolio25) — ficha do prêmio.

[R06] [Awwwards — Corentin Bernadou portfolio](https://www.awwwards.com/sites/corentin-bernadou-portfolio) — ficha do prêmio.

[R07] [Awwwards — Max Milkin portfolio](https://www.awwwards.com/sites/max-milkin-portfolio) — ficha do prêmio.

[R08] [Awwwards — Elliott Mangham](https://www.awwwards.com/sites/elliott-mangham) — ficha do prêmio.

[R09] [CSSDA — Antoine Wodniack Portfolio](https://www.cssdesignawards.com/sites/antoine-wodniack-portfolio/46614/) — WOTD/WOTM, nota, tags e critérios.

[R10] [Antoine Wodniack — site real](https://wodniack.dev/) — conteúdo, navegação, biografia, contato e HTML acessível.

[R11] [Antoine Wodniack — CSS público](https://wodniack.dev/_astro/index.MJ9FiCyD.css) — regras tipográficas e media queries declaradas.

[R12] [CSSDA — Mees Verberne Creative Developer](https://www.cssdesignawards.com/sites/mees-verberne-creative-developer/46796) — WOTD, data, notas, tags e descrição.

[R13] [Mees Verberne — site real](https://meesverberne.com/) — estrutura, projetos, clientes, contato e medidas computed da sessão.

[R14] [Mees Verberne — CSS público](https://meesverberne.com/wp-content/litespeed/css/e62857b0eb72a8ba3ce567f535e34351.css?ver=aedb3) — CSS observado na sessão.

[R15] [CSSDA — Eric Huguenin](https://www.cssdesignawards.com/sites/eric-huguenin/47713/) — WOTD, data, autoria, colaborador, tags e notas.

[R16] [Eric Huguenin — site em inglês](https://erichuguenin.com/en/) — projetos, navegação, grid/list e créditos.

[R17] [Eric Huguenin — About](https://erichuguenin.com/en/about/) — autodeclaração profissional, clientes e contato.

[R18] [Eric Huguenin — CSS público](https://erichuguenin.com/wp-content/themes/eh/dist/css/app.css?ver=1790781712) — tokens, grid, tipografia e breakpoints declarados.

[R19] [CSSDA — Abhishek Jha Folio 25](https://www.cssdesignawards.com/sites/abhishek-jha-folio-25/48067/) — WOTD, data, tags e avaliação.

[R20] [Abhishek Jha — site real](https://abhishekjha.me/) — autoria, navegação, serviços e trabalhos.

[R21] [Abhishek Jha — CSS público](https://abhishekjha.me/assets/main-CS-w4MMY.css) — medidas declaradas e breakpoints.

[R22] [Codrops — The human side of the interface: Abhishek Jha](https://tympanus.net/codrops/2025/10/24/the-human-side-of-the-interface-abhishek-jhas-art-of-storytelling-through-design/) — declaração sobre WebGL/Three.js e contexto.

[R23] [Abhishek Jha — bundle JS público](https://abhishekjha.me/assets/main-D5MQsYQ6.js) — referência textual a GSAP.

[R24] [CSSDA — Arnaud Rocca portfolio](https://www.cssdesignawards.com/sites/arnaud-rocca-portfolio/48998/) — WOTD, data, categoria e tags.

[R25] [Arnaud Rocca — site real](https://arnaudrocca.fr/) — render e medidas computed/layout em 1280×900 e 390×900.

[R26] [Codrops — Arnaud Rocca’s portfolio](https://tympanus.net/codrops/2026/03/31/arnaud-roccas-portfolio-from-a-gsap-powered-motion-system-to-fluid-webgl/) — navegação e stack declarada.

[R27] [CSSDA — Dave Holloway portfolio](https://www.cssdesignawards.com/sites/dave-holloway-portfolio/49076/) — WOTD, data, descrição e score.

[R28] [Dave Holloway — site real](https://daveholloway.uk/) — Work/Lab, cases e menções tecnológicas por projeto.

[R29] [Dave Holloway — Space Chase](https://daveholloway.uk/lab/space-chase-3d-animation-experiment-with-three-js-gsap/) — Three.js/GSAP limitados ao experimento.

[R30] [CSSDA — Ravi Klaassens](https://www.cssdesignawards.com/sites/ravi-klaassens/49105/) — WOTD, data, descrição e tags.

[R31] [Ravi Klaassens — site real](https://www.raviklaassens.com/) — arquitetura, trabalhos, serviços e contatos.

[R32] [Codrops — R—K ’26](https://tympanus.net/codrops/2026/04/07/r-k-26-the-thinking-and-code-behind-a-portfolio-led-by-presence/) — stack e decisões técnicas autorais.

[R33] [Ravi Klaassens — CSS público](https://cdn.prod.website-files.com/69905c96f939ade61f497575/css/rk-demo.webflow.shared.5db33a410.min.css) — tokens tipográficos e media queries.

[R34] [CSSDA — Yuta Abe portfolio](https://www.cssdesignawards.com/sites/yuta-abe-portfolio/49418/) — WOTD, data, autor e tags.

[R35] [Yuta Abe — site real](https://yutaabe.com/) — conteúdo, canvas, navegação e medidas computed da sessão.

[R36] [CSSDA — Code by Jesse](https://www.cssdesignawards.com/sites/code-by-jesse/49543/) — WOTD, data, autor e tags.

[R37] [Code by Jesse — site real](https://www.codebyjesse.com/) — navegação, proposta, cases e contato.

[R38] [Code by Jesse — scripts públicos](https://www.codebyjesse.com/) — URLs de GSAP, Barba, Lenis, hls.js e Matter.js observadas no HTML.

[R39] [Code by Jesse — CSS público](https://cdn.prod.website-files.com/69874be3b82240db37624f7c/css/codebyjesse.webflow.shared.28ac0b474.min.css) — escala declarada e breakpoints.

[R40] [CSSDA — Russell Numo](https://www.cssdesignawards.com/sites/russell-numo/49728/) — WOTD, data, categoria e tags.

[R41] [Russell Numo — site real](https://www.russellnumo.nl/) — About/Projects/Contact, serviços e projetos.

[R42] [CSSDA — Jesper Landberg](https://www.cssdesignawards.com/sites/jesper-landberg/49966/) — WOTD, data, descrição e tags.

[R43] [Jesper Landberg — site real](https://jesperlandberg.com/) — identidade, projetos, índice, newsletter e contato.

[R44] [Jesper Landberg — llms.txt](https://jesperlandberg.com/llms.txt) — declaração autoral de GSAP, Three.js/WebGL e arquitetura HTML.

[R45] [CSSDA — Eddy Naboulet](https://www.cssdesignawards.com/sites/eddyos-eddy-naboulet/50204/) — WOTD, data, Astro/WebGL e recursos descritos.

[R46] [Eddy Naboulet — site real](https://eddy-naboulet.dev/) — navegação, metáfora de sistema, perfil e competências.

[R47] [Eddy Naboulet — CSS Base](https://eddy-naboulet.dev/_astro/Base.DKJVjgZa.css) — breakpoints e reduced motion.

[R48] [Eddy Naboulet — CSS Desktop](https://eddy-naboulet.dev/_astro/Desktop.CJivPPsu.css) — regras desktop/responsivas e reduced motion.

[R49] [CSSDA — WOTY 2024: Antoine Wodniack](https://www.cssdesignawards.com/woty2024/sites/antoine-wodniack-portfolio) — indicação a Website of the Year 2024; não tratada como vitória.

[R50] [GitHub — AW-2025-Portfolio](https://github.com/AntoineW/AW-2025-Portfolio) — repositório posterior, identificado como Open Source Edition; não usado para inferir o build premiado.

[R51] [Cyd Stumpel — site real](https://cydstumpel.nl/) — portfólio pessoal preservado no benchmark anterior.

[R52] [Henri Heymans — site real](https://www.henriheymans.com/) — portfólio pessoal preservado no benchmark anterior.

[R53] [Roman Jean-Elie — site real](https://www.romanjeanelie.com/) — portfólio pessoal preservado no benchmark anterior.

[R54] [Eduard Bodak — site real](https://www.eduardbodak.com/) — portfólio pessoal preservado no benchmark anterior.

[R55] [Stefan Vitasović — site real](https://stefanvitasovic.dev/) — portfólio pessoal preservado no benchmark anterior.

[R56] [Corentin Bernadou — site real](https://corentinbernadou.com/) — portfólio pessoal preservado no benchmark anterior.

[R57] [Max Milkin — site real](https://www.maxmilkin.com/) — portfólio pessoal preservado no benchmark anterior.

[R58] [Elliott Mangham — site real](https://elliott.mangham.dev/) — portfólio pessoal preservado no benchmark anterior.
