# Auditoria do screencast e lifting visual

> Vídeo analisado: `video_20261009_015202.mp4` — 1936×1080, 43,4 s, 1.753 quadros reais. Gravado no Windows 11 em `https://3000-…` (porta direta), com escala do sistema de 125% (viewport efetiva ≈ 1517 px CSS). Método: 87 quadros a 2 fps inspecionados visualmente, diferença de luminância calculada em todos os quadros e medições do DOM com Chromium na mesma viewport.

## Fase 1 — Diagnóstico

| # | Falha observada no vídeo | Evidência medida | Gravidade |
|---|---|---|---|
| 1 | Todas as seis artes aparecem como "A arte não carregou; exibindo uma composição de apoio" | No host da porta 3000, `/manus-storage/…` responde `200 text/html` (página do app). No Preview estável, responde `307` para o arquivo e as seis artes carregam | Crítica (ambiente) |
| 2 | Espaçamentos fora da grade de 8px | 298 de 344 valores de padding/margin/gap no CSS; 456 espaçamentos computados na página (ex.: 10, 11, 13, 23, 83, 127px) | Alta |
| 3 | Arte de Processo sangrando até a borda da janela | Termina em x = 1606 px com o container em 1359 px (247 px para fora); em 1280 px fica cortada | Alta |
| 4 | Card do formulário de Contato com grande área branca vazia | Card com 838 px de altura para um formulário de 403 px (435 px vazios) | Alta |
| 5 | Transições secas entre seções | Corte reto claro → Portfólio escuro e troca dura de fundo em Planos e FAQ | Média |
| 6 | Pouco respiro ao redor das artes | Arte de Serviços a 19 px do link; Contato com 23/25 px; legendas a 15 px da borda | Média |
| 7 | Rolagem "dura" | Mudanças concentradas em 86 saltos isolados entre quadros estáticos; parte vem da gravação com taxa de quadros variável, mas imagens também surgiam sem transição | Média |
| 8 | Placeholder de Contato duplicava a "escadaria" de Planos | Mesma legenda nos dois slots | Baixa |

## Fases 2 e 3 — O que foi aplicado

| Tratamento | Implementação |
|---|---|
| Nitidez tipográfica | `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`, `text-rendering: optimizeLegibility` e `font-kerning` no `body` (já existiam em `:root`) |
| Vidro 3D | `backdrop-filter: blur(16px) saturate(180%)` + `border: 1px solid rgba(255,255,255,.1)` em artes, placeholders, legendas, notas flutuantes, cards de plano, formulário, selos e header; anel violeta de 1px para manter a definição no Light Mode |
| Sombras de estúdio | 15 sombras neutras substituídas por tokens violeta em camadas (`--shadow-studio-sm/md/lg/xl`) e `--shadow-obsidian` no Dark Mode; utilitários `shadow-*` do Tailwind também foram recoloridos |
| Grade de 8px | Migração determinística de 284 valores; 10 valores fluidos arredondados com `round(nearest, …, 8px)`; espaçamentos computados fora da grade caíram de 456 para 12, todos internos aos `<option>` nativos do navegador |
| Telas de cinema | Bezel de 8px, raio 32/24px (24/16px no mobile), reflexo superior, vinheta interna e sombra XL; FAQ mantém o formato circular |
| Respiro | 32px entre arte e texto em Serviços e Contato, 48px abaixo da arte do Portfólio e 24px no avatar do FAQ |
| Layout | Arte de Processo contida na coluna e alinhada à lista (termina exatamente em 1359 px); formulário de Contato com altura do conteúdo (481 px) e fixo durante a rolagem no desktop |
| Rolagem suave | Artes surgem com subida e fade ligados à rolagem (`animation-timeline: view()`), imagens aparecem com fade após carregar e o header muda de estado em 0,4 s; tudo é desativado em `prefers-reduced-motion` |
| Seções | Portfólio, Planos e FAQ viraram palcos arredondados (raio 40px, recuo de 16px), sem linhas de corte |

Validação: `pnpm check` e o build estático sem erros. A verificação dirigida passou em 320, 390, 768 e 1280 px no Preview e em 390 e 1280 px no build estático (diálogos, foco, imagens e movimento reduzido). Também não há overflow horizontal nas três viewports medidas. A comparação visual está em `research/lifting_antes_depois.jpg`.

## Limites honestos

- **Porta 3000:** é o servidor de desenvolvimento acessado direto, sem a rota de armazenamento da plataforma. As artes só aparecem no Preview estável ou no site publicado. O caminho estável `/manus-storage/…` foi mantido de propósito.
- **Windows:** `-webkit-font-smoothing` só tem efeito no macOS. No Windows, a nitidez depende do ClearType/DirectWrite e da escala da tela.
- **Resolução das fontes:** as artes de Hero e Processo foram entregues pelo Canva com 645 px de largura. Elas ficam nítidas em telas comuns, mas abaixo do ideal para Retina 2x. Para nitidez máxima, exporte versões de 1600 px ou mais e troque o arquivo.
