import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
  },
  plugins: [
    react(),
    svgr(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          "react-core": ["react", "react-dom"],
          // Routing
          "react-router": ["react-router-dom"],
          // Animations — largest lib, isolate it
          "framer-motion": ["framer-motion"],
          // Data fetching
          "react-query": ["@tanstack/react-query"],
          // UI components
          "radix-ui": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-select",
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-tabs",
            "@radix-ui/react-accordion",
          ],
          // Icons
          icons: ["lucide-react"],
        },
      },
    },
    // Warn on chunks over 400kb
    chunkSizeWarningLimit: 400,
    // Minify
    minify: "esbuild",
    // Generate source maps only in dev
    sourcemap: mode === "development",
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "@tanstack/react-query",
    ],
  },
}));
