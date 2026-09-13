import { defineConfig } from 'oxlint'

// If I had self respect I would enable commented out stuff
export default defineConfig({
  categories: {
    correctness: 'error'
    // perf: 'error', style: 'error'
  },
  ignorePatterns: ['./src/routeTree.gen'],
  options: { typeAware: true, typeCheck: true },
  plugins: [
    'typescript',
    'import',
    'react'
    // 'oxc', 'unicorn', 'react-perf'
  ],
  rules: {
    'arrow-body-style': 'error',
    'no-duplicate-imports': 'error',
    'one-var': 'off',
    'sort-keys': 'error'
  }
})
