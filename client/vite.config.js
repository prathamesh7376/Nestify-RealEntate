import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001", // Backend server URL
        changeOrigin: true, // Ensure the origin header matches the target
        secure: false, // If using HTTP, not HTTPS
      },
    },
  },
  plugins: [react()],
});
