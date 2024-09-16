import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BCNrxJKs.mjs';
import { manifest } from './manifest_B6qrPzQ1.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/v1/fetchnowfeed.json.astro.mjs');
const _page2 = () => import('./pages/api/v1/fetchprojectsfeed.json.astro.mjs');
const _page3 = () => import('./pages/api/v1/hello.json.astro.mjs');
const _page4 = () => import('./pages/biocode.astro.mjs');
const _page5 = () => import('./pages/biocode/_---slug_.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page8 = () => import('./pages/resume.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/tags.astro.mjs');
const _page11 = () => import('./pages/tags/_---tag_.astro.mjs');
const _page12 = () => import('./pages/travel.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.6_@types+node@22.0.0_rollup@4.21.3_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/v1/fetchNowFeed/index.json.ts", _page1],
    ["src/pages/api/v1/fetchProjectsFeed/index.json.ts", _page2],
    ["src/pages/api/v1/hello/index.json.ts", _page3],
    ["src/pages/biocode/index.astro", _page4],
    ["src/pages/biocode/[...slug].astro", _page5],
    ["src/pages/projects/index.astro", _page6],
    ["src/pages/projects/[...slug].astro", _page7],
    ["src/pages/resume.astro", _page8],
    ["src/pages/rss.xml.js", _page9],
    ["src/pages/tags/index.astro", _page10],
    ["src/pages/tags/[...tag].astro", _page11],
    ["src/pages/travel.astro", _page12],
    ["src/pages/index.astro", _page13]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "89f76aec-0cfe-4e28-9c46-63b3e283ff68",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
