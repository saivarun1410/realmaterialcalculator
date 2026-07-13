// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

import { SITE_URL } from './src/consts.js';

// Keep the integration's index/chunk files, and also publish the conventional
// single-file /sitemap.xml expected by crawlers and search-console tools.
const directSitemap = {
  name: 'materialcalculator-direct-sitemap',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const { copyFile } = await import('node:fs/promises');
      await copyFile(new URL('sitemap-0.xml', dir), new URL('sitemap.xml', dir));
    },
  },
};

// Build for Cloudflare Workers, with static assets emitted to dist/.
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), directSitemap],
  adapter: cloudflare(),
});
