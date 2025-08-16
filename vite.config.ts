import tailwindcss from "@tailwindcss/vite";
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()], // ✅ REMOVE tailwindcss() here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
