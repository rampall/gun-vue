import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import extractorPug from '@unocss/extractor-pug'
import { extractorSplit } from '@unocss/core'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from "vite-plugin-pages";
import path from "path";

const moduleExclude = match => {
  const m = id => id.indexOf(match) > -1
  return {
    name: `exclude-${match}`,
    resolveId(id) {
      if (m(id)) return id
    },
    load(id) {
      if (m(id)) return `export default {}`
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Unocss({
      extractors: [
        extractorPug(),
        extractorSplit,
      ]
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: [
        'vue',
        {
          '@vueuse/core': ['useStorage'],
        },
      ],
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue', 'ts','js'],
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
    }),
    moduleExclude('text-encoding'),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			"@use": path.resolve(__dirname, "src/use"),
			"@store": path.resolve(__dirname, "src/store"),
    }
  },
  optimizeDeps: {
    include: [
      'gun',
      'gun/gun',
      'gun/sea',
      'gun/sea.js',
      'gun/lib/then',
      'gun/lib/webrtc',
      'gun/lib/radix',
      'gun/lib/radisk',
      'gun/lib/store',
      'gun/lib/rindexed',
    ],
  },
})
