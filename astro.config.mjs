import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Map tslib directly to the physical ESM file in the node_modules folder
const tslibPath = path.resolve(__dirname, 'node_modules/tslib/tslib.es6.js');

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        tslib: tslibPath,
      },
    },
    ssr: {
      noExternal: ['tslib', 'react-remove-scroll'],
    },
  },
});
