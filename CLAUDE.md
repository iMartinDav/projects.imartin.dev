# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **Bun** (`bun.lock`). Node 24 (`.nvmrc`) matches the Vercel runtime.

```bash
bun install
bun dev                       # astro dev on http://localhost:4321
bun run build                 # astro build (Vercel adapter output)
bun run preview
bun run lint                  # eslint (flat config, browser + node globals)
bun run lint:fix
bun run format                # prettier --write .
bun run test                  # vitest (watch mode)
bunx tsc --noEmit -p .        # type-check .ts/.tsx (no @astrojs/check for .astro)
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
  Post URLs are always `/${category}/${post.id}`; each `[slug]` route only generates pages for its own category. `/tags/[...tag]` groups by `tags`.
- **Schema**: `image` and `author` are required; `image` is also used as the post's og:image. `minutesRead` is injected at build time by `src/lib/remark-reading-time.mjs` (registered in `astro.config.mjs`), so don't set it manually. Markdown output is passed through `rehype-sanitize`.
- **Layouts**: everything renders through `BasicLayout.astro`, which owns `<html>`/`<head>`: SEO meta (canonical, OG/Twitter, JSON-LD), the Content-Security-Policy meta tag, and the Umami analytics script. Any new external script or fetch origin must be added to that CSP. Wrappers: `Layout` (home, provides the `.loader` overlay), `PostLayout` (posts, GSAP fade-in), `PostFeedLayout` (feed pages, adds Navbar), `TagsLayout`. Page content and page `<script>`s must go *inside* the layout element, otherwise they render outside `<html>`.
- **Islands**: Solid (`Globe.tsx`, a D3 globe using `src/lib/world.json`; `Tooltip/`). The Svelte integration is enabled but no `.svelte` components exist. Animation: `motion` v14 (home cards and loader; spring easing is `type: spring` plus options, not `easing: spring(...)`), `gsap` + ScrollTrigger (posts/tags; typed via `src/declarations.d.ts`).
- **Plain `<script>` tags in `.astro` files are not Solid components**: Solid lifecycle hooks (`onMount`, etc.) do nothing there.
- **Styling**: UnoCSS (`uno.config.ts`, `presetUno`) with custom `gray` (teal), `darkslate`, and `primary` palettes and a `hide-scrollbar` rule; global CSS in `src/styles/global.css`.
- **Feeds/SEO**: `src/pages/rss.xml.js`, `@astrojs/sitemap`, `astro-robots-txt`; `site` in `astro.config.mjs` is `https://projects.imartin.dev/`.

## Conventions

- Prettier: single quotes, semicolons, 2-space indent, no trailing commas, `singleAttributePerLine`, import sorting via `@trivago/prettier-plugin-sort-imports`.
- Post images live under `public/images/` and are referenced as `/images/...` in frontmatter.
