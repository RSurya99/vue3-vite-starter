import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [IconsResolver()],
      directoryAsNamespace: true,
      dts: true,
    }),
    Icons(),
    AutoImport({
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
      ],
      eslintrc: {
        enabled: true, // Default `false`
      },
    }),
    Inspect(), // only applies in dev mode
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
