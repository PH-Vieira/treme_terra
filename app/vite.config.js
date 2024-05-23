import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import postcss from 'postcss'

export default ({ mode }) => {
  return defineConfig({
    publicPath: '',
    plugins: [
      vue(),
      VueDevTools(),
    ],
    css: {
      postcss: './postcss.config.js'
    },
    server: {
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}