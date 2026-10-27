# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **Bun** (`bun.lock`); Node >= 22.

```bash
bun install
bun dev                       # astro dev on http://localhost:4321
bun run build                 # astro build (Vercel adapter output)
bun run preview
bun run lint                  # eslint (.js,.ts,.astro,.svelte)
bun run lint:fix
bun run format                # prettier --write .
bun run test                  # vitest (watch mode)
bunx vitest run src/lib/helpers.test.ts   # single test file, no watch
```

Use `bun run test`, not `bun test` — the latter invokes Bun's own test runner instead of Vitest.

## Architecture

Personal bento-style portfolio for projects.imartin.dev, built with **Astro** (`output: "server"`, `@astrojs/vercel` adapter). Content pages opt into static generation with `export const prerender = true`.

- **Home (`src/pages/index.astro`)** is a CSS grid of "cards" (`src/components/*Card.astro`, wrapped by `components/Card/`). Entrance animation is a `motion` sequence over `.card` elements, using `loaderAnimation` from `src/lib/constants.ts` to fade out the `.loader` overlay.
- **Single content collection: `posts`** (`src/content.config.ts`, glob loader over `src/content/posts/*.md`). The frontmatter `category` field routes a post to a section:
  - `projects` → `ProjectsCard`, `/projects`, `/api/v1/fetchProjectsFeed.json`
  - `biocode` → `BiocodeCard`, `/biocode`
  - `now` → `/api/v1/fetchNowFeed.json`
  Note that `/projects/[slug]` and `/biocode/[slug]` both generate pages for *all* posts regardless of category; only the index pages and cards filter. `/tags/[...tag]` groups by `tags`.
- **Schema**: `image` and `author` are required; `minutesRead` is injected at build time by `src/lib/remark-reading-time.mjs` (registered in `astro.config.mjs`), so don't set it manually. Markdown output is passed through `rehype-sanitize`. (`src/lib/ remark-reading-time.mjs` with a leading space is a stray duplicate; the config imports the one without the space.)
- `src/content/posts/config.ts` is a legacy collection definition (`now` with `rssSchema`) and is not used by `content.config.ts`.
- **Layouts**: `Layout.astro` (home), `BasicLayout.astro` (holds the Umami analytics script), `PostLayout.astro` (post pages, GSAP fade-in), plus `PostFeedLayout`, `ProjectLayout`, `TagsLayout`.
- **Islands**: mixed frameworks are enabled — Solid (`Globe.tsx`, a D3 globe using `src/lib/world.json`; `Tooltip/`) and Svelte. Animation libraries in use: `motion` (home), `gsap` + ScrollTrigger (posts/tags; typed via `src/declarations.d.ts`), Rive (`.riv` assets are allowed via `vite.assetsInclude`).
- **Styling**: UnoCSS (`uno.config.ts`, `presetUno`) with custom `gray` (teal), `darkslate`, and `primary` palettes and a `hide-scrollbar` rule; global CSS in `src/styles/global.css`.
- **Feeds/SEO**: `src/pages/rss.xml.js`, `@astrojs/sitemap`, `astro-robots-txt`; `site` in `astro.config.mjs` is `https://projects.imartin.dev/`.

## Conventions

- Prettier: single quotes, semicolons, 2-space indent, no trailing commas, `singleAttributePerLine`, import sorting via `@trivago/prettier-plugin-sort-imports`.
- Post images live under `public/images/` and are referenced as `/images/...` in frontmatter.
