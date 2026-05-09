import { type Config } from 'prettier'

const PrettierConfig = {
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'none',
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  semi: false
} satisfies Config

export default PrettierConfig
