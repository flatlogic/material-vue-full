import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: './',
  plugins: [vue({
    template: { transformAssetUrls: { 'v-img': ['src', 'lazy-src'], img: ['src'], source: ['src'] } },
  })],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.json', '.vue'],
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: { outDir: 'build' },
});
