import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    rollupOptions: {
      // Two pages: the developer portfolio at / and the product portfolio at /pm/.
      input: {
        main: "index.html",
        pm: "pm/index.html",
      },
    },
  },
});
