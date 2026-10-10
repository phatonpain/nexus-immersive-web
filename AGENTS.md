# Project invariants
- React 19 + TypeScript + Vite; preserve the existing data model and routes.
- Run 
pm run check and 
pm run build:static after source changes.
- Use actual Framer Motion components for interaction; do not replace Motion with CSS-only delays.
- Preserve keyboard navigation, focus states, aria labels and prefers-reduced-motion.
- Never edit 
ode_modules, secrets, generated caches or production credentials.
- Do not claim success without a passing check, build result and browser evidence.
