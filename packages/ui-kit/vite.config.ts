import type { LibraryFormats } from 'vite'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import typescript from '@rollup/plugin-typescript'

export default defineConfig(() => ({
  plugins: [
    react(),
    externalizeDeps(),
  ],
  build: {
    copyPublicDir: false,
    sourcemap: true,
    outDir: 'build',
    lib: {
      formats: ['es', 'cjs'] as LibraryFormats[],
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      fileName: 'index',
    },
    rollupOptions: {
      plugins: [
        typescript({
          // tsconfig: './tsconfig.json',
          exclude: [/dev/, /assets/, /stories/, /tests/],
        }),
      ],
    },
  },
}))
