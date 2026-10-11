import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  // Next keeps tsconfig's `jsx: preserve`, so tests that render components
  // need the automatic runtime to compile JSX themselves.
  esbuild: { jsx: "automatic" },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
