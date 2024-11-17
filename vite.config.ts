import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("highlight.js")) {
            return "highlight";
          }
          if (id.includes("@reduxjs/toolkit") || id.includes("react-redux")) {
            return "redux";
          }
          if (id.includes("react-hook-form")) {
            return "react-hook-form";
          }
          return "vendors"; // Default chunk for other dependencies
        },
      },
    },
  },
});
