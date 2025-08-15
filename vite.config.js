import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Build çıktısı için dizin
    assetsDir: "assets", // Statik dosyalar için dizin
  },
  publicDir: "public", // Public klasörünü build'e dahil et
});
