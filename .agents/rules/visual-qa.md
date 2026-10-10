# Visual QA e Adversarial QA

- NUNCA assuma que o código funcionou só porque o build passou.
- VERIFIQUE explicitamente a ausência de flash branco no modo escuro.
- OBRIGATÓRIO validar overflows no eixo X nas resoluções 320px, 390px, 768px, 1440px.
- Use a abordagem de "Adversarial QA": tente encontrar problemas como se você fosse o cliente. Procure por textos ilegíveis, z-index quebrado, imagens esmagadas, etc.
- SE o ambiente não permitir captura visual, anote estritamente "screenshot impossibilitada" em vez de mentir que validou visualmente.
