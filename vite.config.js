import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // Включает CommonJS модули
    },
  },
  resolve: {
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js",
    },
  },
});
