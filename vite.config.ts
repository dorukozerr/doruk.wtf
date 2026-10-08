import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig, lazyPlugins } from 'vite-plus'

export default defineConfig({
  fmt: {
    ignorePatterns: ['./src/routeTree.gen'],
    jsdoc: {
      commentLineStrategy: 'multiline',
      lineWrappingStyle: 'balance',
      preferCodeFences: true
    },
    jsxSingleQuote: true,
    semi: false,
    singleQuote: true,
    sortImports: true,
    sortPackageJson: true,
    sortTailwindcss: true,
    trailingComma: 'none'
  },
  lint: {
    categories: { correctness: 'error' },
    ignorePatterns: ['./src/routeTree.gen'],
    options: { typeAware: true, typeCheck: true },
    plugins: ['typescript', 'import', 'react', 'oxc'],
    rules: {
      'arrow-body-style': 'error',
      'no-duplicate-imports': 'error',
      'one-var': 'off',
      'sort-keys': 'error'
    }
  },
  plugins: lazyPlugins(() => [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tailwindcss(),
    tanstackStart(),
    viteReact()
  ]),
  resolve: { tsconfigPaths: true }
})
