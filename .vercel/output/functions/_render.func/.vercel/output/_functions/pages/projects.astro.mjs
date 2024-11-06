/* empty css                                  */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Fo31Ezp-.mjs';
import { g as getCollection } from '../chunks/_astro_content_CF6XHS_F.mjs';
import { $ as $$PostFeedLayout } from '../chunks/PostFeedLayout_DxjnbDj8.mjs';
import { $ as $$PostItemV2 } from '../chunks/PostItemV2_L3GpE9FV.mjs';
/* empty css                                 */
import { a as $$Icon } from '../chunks/Icon_IB9rjt9H.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts"))?.sort(
    (blogEntryA, blogEntryB) => (blogEntryB.data.pubDate || /* @__PURE__ */ new Date()).getTime() - (blogEntryA.data.pubDate || /* @__PURE__ */ new Date()).getTime()
  );
  return renderTemplate` ${renderComponent($$result, "PostFeedLayout", $$PostFeedLayout, { "title": "iMartin.dev: projects", "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-screen h-full flex flex-col justify-start items-start max-w-2xl mx-auto p-2 md:py-5"> <div class="h-full"></div> <h1 class="text-5xl f-bold mb-2 text-neutral-100 flex gap-2 items-center"> <div>Projects</div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:dashboard-outline", "class": "w-12 h-12" })} </h1> <div class="f-light mb-4 text-neutral-100/50"> <span class="f-bold">${JSON.stringify(
    posts?.filter((post) => post.data.category === "projects").length
  )}</span>
Personal projects and experiments
</div> <div class="w-full"> <ul> ${posts?.filter((post) => post.data.category === "projects").map((post) => renderTemplate`<div class="post-item opacity-0"> ${renderComponent($$result2, "PostItem", $$PostItemV2, { "title": post.data.title || "No title", "description": post.data.description || "No description", "date": post.data.pubDate || /* @__PURE__ */ new Date(), "url": post.slug, "category": post.data.category || "No category", "tags": post.data.tags || [], "image": post.data.image || "", "author": post.data.author || "Martin DAVILA" })} </div>`)} </ul> </div> </div> ` })} `;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/pages/projects/index.astro", void 0);

const $$file = "/Users/martindavila/Developer/projects-imartin.dev/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
