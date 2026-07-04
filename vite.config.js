import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
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
    plugins: [
      react(),
      // Ersetzt den hartkodierten public/sw.js (learn-vos-v1, nie gebumpt) —
      // workbox precached mit Content-Hashes, Versionierung passiert von selbst.
      // Manifest bleibt public/manifest.json (bereits verlinkt in index.html).
      VitePWA({
        base: '/',
        scope: '/',
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        manifest: false,
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
          navigateFallback: '/index.html',
          navigateFallbackDenylist: [/^\/fitness/, /^\/exercise/, /^\/session/, /^\/coverage/, /^\/health/],
        },
      }),
    ],
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@src':                resolve(__dirname, './src'),
        '@db':                 resolve(FITNESS_SRC, isFirebase ? 'db.firestore.js' : 'db.js'),
        '@utils':              resolve(FITNESS_SRC, 'lib/utils.js'),
        '@components':         resolve(FITNESS_SRC, 'components'),
        '@fitness/components': resolve(FITNESS_SRC, 'components'),
        '@constants':          resolve(FITNESS_SRC, 'constants'),
        '@fitness/constants':  resolve(FITNESS_SRC, 'constants'),
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
      outDir:      resolve(__dirname, isFirebase ? 'dist-firebase' : 'dist'),
      emptyOutDir: true,
    },
  }
})
