import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname  = dirname(fileURLToPath(import.meta.url))
const FITNESS_DEV = resolve(__dirname, '../fitness-dev')
const FITNESS_SRC = resolve(FITNESS_DEV, 'src')
const BACKEND     = 'http://localhost:9100'

export default defineConfig(({ mode }) => {
  const isFirebase = mode === 'firebase'
  return {
    root: __dirname,
    base: '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@db':         resolve(__dirname, isFirebase ? 'src/db.firestore.js' : 'src/db.js'),
        '@utils':      resolve(__dirname, 'src/lib/utils.js'),
        '@components': resolve(FITNESS_SRC, 'components'),
        '@constants':  resolve(FITNESS_SRC, 'constants'),
      },
    },
    server: {
      port: 9181,
      proxy: {
        '/fitness':   BACKEND,
        '/exercise':  BACKEND,
        '/session':   BACKEND,
        '/coverage':  BACKEND,
        '/health':    BACKEND,
      },
    },
    build: {
      outDir:      resolve(__dirname, isFirebase ? 'dist-firebase' : 'dist'),
      emptyOutDir: true,
    },
  }
})
