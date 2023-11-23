import react from '@vitejs/plugin-react'
// import mdx from '@mdx-js/rollup'
import ssr from 'vike/plugin'
import { UserConfig } from 'vite'

export default {
  legacy: { buildSsrCjsExternalHeuristics: true },
  // ssr: { external: ['@nbit/vant'] },
  plugins: [
    ssr({
      prerender: true
    }),
    react()
    // mdx()
  ],
  build: {
    target: 'es2018',
    outDir: './dist',
  },
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  // (The 'react/jsx-runtime' entry is not needed in Vite 3 anymore.)
  optimizeDeps: { include: ['cross-fetch', 'react/jsx-runtime'] }
} as UserConfig
