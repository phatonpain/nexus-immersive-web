# Regras de Motion e Frontend (React 19 + Vite + Tailwind + Framer Motion)

- Animações React DEVEM usar framer-motion nativamente com as tags <motion.div>, <motion.article>, etc.
- NÃO USE transition-delay ou animações genéricas em CSS para substituir o que o Framer Motion foi feito para fazer. 
- Componentes com stagger DEVEM usar staggerChildren com as variantes adequadas.
- Física natural de objetos interativos DEVE usar useSpring.
- Assegure o suporte a prefers-reduced-motion globalmente, desativando animações pesadas e stagger.
