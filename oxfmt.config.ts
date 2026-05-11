import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: ["./src/routeTree.gen"],
  sortImports: true,
  sortPackageJson: true,
  sortTailwindcss: true,
});
