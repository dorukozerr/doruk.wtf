import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactCompiler from 'babel-plugin-react-compiler';
import tailwindcss from '@tailwindcss/vite';
import unusedCode from 'vite-plugin-unused-code';

const reactDom = ['react-dom'];
const motion = ['motion'];
const p5 = ['p5'];
const reactP5 = ['react-p5'];

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
  },
  optimizeDeps: { include: p5 },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: { reactDom, motion, p5, reactP5 }
      }
    }
  }
});
