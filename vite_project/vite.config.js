import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), 
    react()],
});
