import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.resolve(projectRoot, "client"),
  publicDir: path.resolve(projectRoot, "client", "public"),
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    disabled: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(projectRoot, "client", "src"),
      "@shared": path.resolve(projectRoot, "shared"),
      "@assets": path.resolve(projectRoot, "attached_assets"),
    },
  },
  server: {
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ["localhost", "127.0.0.1", ".manus.computer", ".manuspre.computer"],
  },
});
