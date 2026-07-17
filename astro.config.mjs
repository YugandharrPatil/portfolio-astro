import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';
import path from 'path';
import fs from 'fs';

// Resolve to the physical ESM entry point file of tslib (un-symlinked)
let tslibPath;
try {
  tslibPath = fs.realpathSync(path.resolve(process.cwd(), 'node_modules/tslib/tslib.es6.js'));
} catch (e) {
  tslibPath = 'tslib';
}

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
