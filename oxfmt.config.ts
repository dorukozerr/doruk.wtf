import { defineConfig } from 'oxfmt'

export default defineConfig({
  ignorePatterns: ['./src/routeTree.gen'],
  jsdoc: { commentLineStrategy: 'multiline', lineWrappingStyle: 'balance', preferCodeFences: true },
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  sortImports: true,
  sortPackageJson: true,
  sortTailwindcss: true,
  trailingComma: 'none'
})
