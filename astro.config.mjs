// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE_URL } from './src/consts.js';

// Static site (default output) — deployable to Cloudflare Pages via `npm run build` -> dist/.
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
