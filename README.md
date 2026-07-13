# MaterialCalculator

A fast, static multi-page site of material-estimation calculators (concrete, gravel, mulch),
built with [Astro](https://astro.build/) and deployable to **Cloudflare Pages**.

## What's here

Three self-contained calculator pages that shared one design system have been merged into a
single Astro site with a deduplicated shell:

- `src/layouts/Base.astro` — `<head>` boilerplate, topbar nav, footer, canonical + Open Graph,
  global CSS import. Props: `title`, `description`, `canonical?`, `active?`, `jsonLd?`.
- `src/consts.js` — the brand name (`SITE_NAME`) and site URL (`SITE_URL`) in one place.
- `src/styles/global.css` — shared `:root` tokens, resets, page layout, and the unified
  topbar + footer (loaded on every page).
- `src/styles/standard.css` — the calculator/content styles shared by the **gravel** and
  **mulch** pages (their stylesheets were identical).
- `src/styles/concrete.css` — the **concrete** page's styles. Its calculator is a different
  implementation and redefines some class names (`.calc`, `.slot`, `.note`, `table`, ...)
  differently, so it is kept separate to avoid collisions.
- `src/pages/` — `index.astro` (homepage hub), the three calculator pages, and TODO stubs
  (`about`, `contact`, `privacy`, `terms`, `disclaimer`, `articles/`).

Each calculator's original JavaScript is ported **verbatim** inside `<script is:inline>` so
Astro does not bundle or transform it — it runs exactly as written.

## Commands

| Command           | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start the dev server at `http://localhost:4321` |
| `npm run build`   | Build the static site to `dist/`              |
| `npm run preview` | Preview the production build locally          |

## Deploying to Cloudflare Pages

Create a new Pages project pointing at this repository and use:

- **Framework preset:** Astro (or "None")
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 18.20.8 or newer (set `NODE_VERSION` in the Pages environment variables
  if the default is older)

No server or SSR is used — the build emits plain HTML/CSS/JS.
