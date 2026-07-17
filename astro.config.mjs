import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';
import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);

// Resolve to the physical ESM entry point file of tslib (un-symlinked)
let tslibPath;
try {
  const tslibDir = path.dirname(require.resolve('tslib'));
  tslibPath = path.resolve(tslibDir, 'tslib.es6.js');
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
