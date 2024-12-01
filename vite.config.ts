import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 7001,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    assetsDir: "public",
  },
  base: "/",
});
