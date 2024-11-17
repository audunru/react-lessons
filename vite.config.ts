import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          redux: ["@reduxjs/toolkit", "react-redux"],
          "react-hook-form": ["react-hook-form"],
          highlight: ["highlight.js"],
        },
      },
    },
  },
});
