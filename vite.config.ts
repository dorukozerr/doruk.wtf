import path from 'path'

import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'automatic' }),
    babel({
      presets: [reactCompilerPreset({ compilationMode: 'annotation' })]
    }),
    tailwindcss()
  ],
  resolve: { alias: { '~': path.resolve(__dirname, './src') } },
  optimizeDeps: {
    include: ['p5', 'reactP5', 'react-router-dom', 'react', 'motion']
  },
  build: { chunkSizeWarningLimit: 1000 }
})
