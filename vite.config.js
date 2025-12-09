import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      "/api/study": {
        target: "http://192.168.0.148:8081",
        changeOrigin: true,
        secure: false,
      },
      "/api/auth": {
        target: "http://192.168.0.148:8083",
        changeOrigin: true,
        secure: false,
      },
      "/api/submit": {
        target: "http://192.168.0.148:8082",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
