import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // مهم عشان Vite يسمع على كل الـ interfaces مش localhost بس
    port: 5173,
  },
});