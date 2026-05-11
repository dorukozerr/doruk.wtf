import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["./src/routeTree.gen"],
  categories: {
    correctness: "error",
    // WOWWW
    // perf: "error", style: "error"
  },
  options: { typeAware: true, typeCheck: true },
  plugins: ["typescript", "react", "react-perf"],
  rules: {
    "arrow-body-style": "error",
    "no-duplicate-imports": "error",
  },
});
