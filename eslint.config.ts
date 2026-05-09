import js from '@eslint/js'
import eslintTSParse from '@typescript-eslint/parser'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import ts from 'typescript-eslint'

export default defineConfig(
  js.configs.recommended,
  ts.configs.recommended,
  globalIgnores(['dist', 'node_modules']),
  reactHooks.configs.flat['recommended-latest'],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        programs: [eslintTSParse.createProgram('tsconfig.json')]
      }
    }
  },
  {
    plugins: { prettier: prettier, 'simple-import-sort': simpleImportSort },
    files: ['src/**/*', '*.config.ts'],
    rules: {
      'prettier/prettier': 'error',
      'no-restricted-syntax': [
        'error',
        'FunctionExpression',
        'FunctionDeclaration'
      ],
      'arrow-body-style': 'error',
      'prefer-arrow-callback': 'error',
      'no-console': ['error', { allow: ['error', 'info'] }],
      'no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              '^node:',
              '^(fs|path|crypto|stream|util|process|os|child_process|http|https|url)'
            ],
            ['^react$', '^react-', '^@?\\w'],
            [
              '^~/types',
              '^~/lib',
              '^~/context',
              '^~/router',
              '^~/pages',
              '^~/layout',
              '^~/components'
            ]
          ]
        }
      ],
      'simple-import-sort/exports': 'error'
    }
  }
)
