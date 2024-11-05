import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel/serverless';
import UnoCSS from '@unocss/astro';

import { remarkReadingTime } from './src/lib/ remark-reading-time.mjs';
import icon from 'astro-icon';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://projects.imartin.dev/',
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        'https://projects.imartin.dev/sitemap-index.xml',
        'https://projects.imartin.dev/sitemap-0.xml'
      ]
    }),
    solidJs(),
    UnoCSS({
      injectReset: true
    }),
    icon(),
    svelte()
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  output: 'server',
  adapter: vercel(),
  vite: {
    assetsInclude: '**/*.riv'
  }
});
