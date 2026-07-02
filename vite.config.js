import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BACKEND   = 'http://localhost:9100'

export default defineConfig(({ mode }) => {
  const isFirebase = mode === 'firebase'
  return {
    base: '/',
    plugins: [react()],
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@src':        resolve(__dirname, './src'),
        '@db':         resolve('/home/alpha/fitness-dev/src/db.firestore.js'),
        '@components': resolve('/home/alpha/fitness-dev/src/components'),
      },
    },
    server: {
      port: 9181,
      proxy: {
        '/fitness':  BACKEND,
        '/exercise': BACKEND,
        '/session':  BACKEND,
        '/coverage': BACKEND,
        '/health':   BACKEND,
      },
    },
    build: {
      outDir: isFirebase ? 'dist-firebase' : 'dist',
      emptyOutDir: true,
    },
  }
})
