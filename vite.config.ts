import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import ReactCompilerConfig from 'babel-plugin-react-compiler';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import unusedCode from 'vite-plugin-unused-code';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
      // babel: { plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]] }
    }),
    tailwindcss(),
    unusedCode({ patterns: ['src/**/*.{ts,tsx}'] }),
    visualizer({ open: true, filename: 'bundle-visualization.html' })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
});
