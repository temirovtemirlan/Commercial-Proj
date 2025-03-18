import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  resolve: {
    alias: {
      public: "/public",
      app: "/src/app/",
      assets: "/src/app/assets",
      pages: "/src/pages",
      styles: "/src/app/styles",

      core: "/src/core",
      components: "/src/components",
      common: "/src/common",
      layout: "/src/layout",
      test: "/src/test",

      ts: "/src/fusion/ts",
      helpers: "/src/fusion/helpers",
      hooks: "/src/fusion/hooks",
      data: "/src/fusion/data",
      routes: "/src/routes",
      fusion: "/src/fusion",
      api: "/src/fusion/api",
      store: "/src/store",
    },
  },
});
