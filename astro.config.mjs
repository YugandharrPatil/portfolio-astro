import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        tslib: path.resolve(__dirname, 'node_modules/tslib'),
      },
    },
    ssr: {
      noExternal: ['tslib', 'react-remove-scroll'],
    },
  },
});
