/* empty css                                  */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Fo31Ezp-.mjs';
import { g as getCollection } from '../chunks/_astro_content_BXrMCoEW.mjs';
import { $ as $$PostFeedLayout } from '../chunks/PostFeedLayout_DxjnbDj8.mjs';
import { $ as $$PostItemV2 } from '../chunks/PostItemV2_L3GpE9FV.mjs';
/* empty css                                 */
import { a as $$Icon } from '../chunks/Icon_IB9rjt9H.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts"))?.sort(
    (blogEntryA, blogEntryB) => (blogEntryB.data.pubDate || /* @__PURE__ */ new Date()).getTime() - (blogEntryA.data.pubDate || /* @__PURE__ */ new Date()).getTime()
  );
  return renderTemplate` ${renderComponent($$result, "PostFeedLayout", $$PostFeedLayout, { "title": "BioCode: Blog", "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-screen h-full flex flex-col justify-start items-start max-w-2xl mx-auto p-2 md:py-5"> <div class="h-full"></div> <h1 class="text-5xl f-bold mb-2 text-neutral-100 flex items-center justify-between gap-2"> <div>BioCode</div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:dna", "class": "w-12 h-12" })} </h1> <div class="f-light mb-4 text-neutral-100/50">
What I'm working on, articles, ideas, notes, and ramblings.
</div> <div class="w-full"> <ul class=""> ${posts?.filter((post) => post.data.category === "biocode").map((post) => renderTemplate`<div class="post-item opacity-0"> ${renderComponent($$result2, "PostItem", $$PostItemV2, { "title": post.data.title || "No title", "description": post.data.description || "No description", "date": post.data.pubDate || /* @__PURE__ */ new Date(), "url": post.slug, "category": post.data.category || "No category", "tags": post.data.tags || [], "image": post.data.image || "", "author": post.data.author || "Martin DAVILA" })} </div>`)} </ul> </div> </div> ` })} `;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/pages/biocode/index.astro", void 0);

const $$file = "/Users/martindavila/Developer/projects-imartin.dev/src/pages/biocode/index.astro";
const $$url = "/biocode";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
