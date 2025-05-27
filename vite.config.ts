import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactCompiler from 'babel-plugin-react-compiler';
import tailwindcss from '@tailwindcss/vite';
import unusedCode from 'vite-plugin-unused-code';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: { plugins: [['babel-plugin-react-compiler', reactCompiler]] }
    }),
    tailwindcss(),
    unusedCode({ patterns: ['src/**/*.{ts,tsx}'] })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
});
