import { fileURLToPath, URL } from 'url'
import Unocss from 'unocss/vite'
import {
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue(),
          Unocss({
              presets: [
                  // presetUno(),
                  // presetAttributify(),
                  // presetIcons({
                  //     scale: 1.8,
                  //     warn: true,
                  // }),
              ],
              transformers: [
                  transformerDirectives(),
                  transformerVariantGroup(),
              ]
          }),
          AutoImport({
            resolvers: [ElementPlusResolver()],
          }),
          Components({
            resolvers: [ElementPlusResolver()],
          }),

  ],
  resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `@use "~/styles/element/index.scss" as *;`,
              },
          },
      },
  },
  server: {
    host:'0.0.0.0',
    port: '9999'
  },


})
