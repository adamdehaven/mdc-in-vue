import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "#mdc-imports": path.resolve(__dirname, "./stub-mdc-imports.js"),
      "#mdc-configs": path.resolve(__dirname, "./stub-mdc-imports.js"),
    },
  },
});
