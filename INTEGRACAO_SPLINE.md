# Integração 3D — Nexus Studio

## Resultado

Integração aplicada exclusivamente à cópia de `Projeto-Nexus-Studio.zip`. O projeto anterior em `/home/ubuntu/devpremium` não foi substituído. Não houve publicação, commit ou alteração no Windows; o acesso solicitado ao dispositivo não foi autorizado na tentativa anterior.

O Hero usa `PremiumSpline type="orb"` e Serviços usa `PremiumSpline type="diagram"`. O componente existente continua com as quatro URLs originais. Não foi criado outro componente Spline. A física e animações são as que já existem nos assets publicados; esta integração não adiciona uma simulação física nova nem certifica todos os comportamentos internos das cenas.

## Alterações e evidências

| Área | Implementação | Evidência |
| --- | --- | --- |
| Hero | Substituição de CyberSpline e imagem sobreposta por palco 3D próprio | `client/src/pages/Home.tsx:300–325` |
| Serviços | Diagrama no espaço antes da grade, sem cobrir cards ou links | `client/src/pages/Home.tsx:687–702` |
| Performance | Chunk lazy; montagem a partir de 768px, sem movimento reduzido e próxima da viewport | `client/src/pages/Home.tsx:35–39,271–298` |
| Interação | Canvas com ponteiro ativo; eventos Spline locais ao canvas | `client/src/components/PremiumSpline.tsx:19–60`; `client/src/index.css:1871–1925` |
| Camadas | Stacking context local; CTAs e grade acima; decoração não intercepta mouse | `client/src/index.css:1871–1886` |
| Falha | Arte original enquanto carrega, em mobile/reduced-motion e em erro de cena | `PremiumSpline.tsx:23–60`; `ErrorBoundary.tsx:5–39` |
| Enquadramento | Viewport interna ampliada e escalada para o conteúdo largo de diagram, com hit-test contido no palco | `client/src/index.css:1904–1909` |

O diff normalizado contra o ZIP original está em `research/spline-integration.patch`. As alterações de código ficam em Home, PremiumSpline, ErrorBoundary e CSS global. Foram acrescentados uma configuração oxlint, harness de validação e registros de evidência.

## Validação realizada em 10/10/2026

```text
npm run check
> tsc --noEmit
exit 0

npx -y oxlint@1.56.0 -c .oxlintrc.json \
  client/src/pages/Home.tsx \
  client/src/components/PremiumSpline.tsx \
  client/src/components/ErrorBoundary.tsx
Found 0 warnings and 0 errors.

npm test
Test Files 2 passed (2)
Tests 6 passed (6)

npm run build
✓ built in 8.18s
Done in 4ms (server bundle)

python3 scripts/verify-spline.py
PASS: 6 directed scenarios
```

Os seis cenários são 1280px e 768px com cenas reais; 390px e 320px sem WebGL; 1280px com movimento reduzido; e 1280px com HTTP 503 induzido nas cenas. Todos passaram: hit-test dos canvases ativos, CTAs/navbar/links clicáveis quando posicionados na viewport, clique real para `#contato`, ausência de overflow horizontal e de erros de página. Mobile e movimento reduzido não solicitam arquivos `scene.splinecode`. Falha induzida mantém a arte estática e a página navegável. Dados completos em `research/spline-validation/results.json`.

Os testes são dirigidos em Chromium com renderização WebGL de teste via SwiftShader. Não são certificação de FPS, GPU, compatibilidade de todos os navegadores, acessibilidade integral ou desempenho de produção.

## Ressalvas preservadas

**Assets diferentes dos nomes:** a URL denominada `orb` contém um painel de ícones conectados. A denominada `diagram` contém uma composição “Effortless AI integration for business” e uma forma 3D. As URLs foram mantidas, sem inventar imagens de referência ou trocar assets arbitrariamente. Prints adicionais não acompanharam este ZIP; foi usada sua implementação como fonte.

**Build:** runtime Spline e o bundle inicial geram aviso de chunks acima de 500 kB. O limite não foi aumentado para ocultá-lo. As cenas são lazy, mas não há alegação de ganho de Core Web Vitals.

**Lint completo:** oxlint em todo `client/src` encontra três erros já presentes no ZIP: spread redundante em `main.tsx:67` e duas variáveis não usadas em `ComponentShowcase.tsx:180`. Foram reproduzidos nos bytes originais do ZIP. Não foram alterados por estarem fora desta integração. Log: `research/spline-validation/lint-inherited.log`. Os três TSX modificados passam sem avisos ou erros. Não foi usado ESLint.

**Instalação:** `npm ci` puro encontra peer antigo do plugin de debug Builder.io com Vite 7. A instalação reproduzível do lockfile recebido foi `npm ci --legacy-peer-deps --no-audit --no-fund`; não foram atualizadas versões. Os testes imprimem avisos herdados sobre OAuth não configurado, mas os seis testes passam. Nenhum novo canal ou login foi ativado.

## Uso

```bash
npm ci --legacy-peer-deps --no-audit --no-fund
npm run check
npm test
npm run build
```

Para desenvolvimento, usar o comando já existente `npm run dev:static` no ambiente compatível com o script do projeto. Em Windows, pode-se iniciar diretamente `npm exec vite -- --host 0.0.0.0 --port 3000 --strictPort`.

O Preview temporário desta cópia usa porta 3100, sem alterar a porta declarada nos arquivos do projeto. Não é uma publicação nem atualização da versão anterior.
