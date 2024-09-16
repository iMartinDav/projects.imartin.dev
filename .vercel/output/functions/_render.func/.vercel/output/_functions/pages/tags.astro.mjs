/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, e as addAttribute, b as renderComponent, m as maybeRenderHead, g as renderTransition, h as fade } from '../chunks/astro/server_bMn8tCat.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_C19ef6d_.mjs';
import { $ as $$PostFeedLayout } from '../chunks/PostFeedLayout_jFwqOZjW.mjs';
/* empty css                                 */
import 'clsx';
/* empty css                                 */
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://projects.imartin.dev/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/node_modules/.pnpm/astro@4.15.6_@types+node@22.0.0_rollup@4.21.3_typescript@5.5.4/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts"))?.sort(
    (blogEntryA, blogEntryB) => (blogEntryB.data.pubDate || /* @__PURE__ */ new Date()).getTime() - (blogEntryA.data.pubDate || /* @__PURE__ */ new Date()).getTime()
  );
  const allTags = posts?.filter((post) => post.data.tags && post.data.tags.length > 0).flatMap((post) => post.data.tags);
  const uniqueTags = [...new Set(allTags.sort())];
  return renderTemplate` ${renderComponent($$result, "PostFeedLayout", $$PostFeedLayout, { "title": "projects.imartin.dev : tags", "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-screen h-full flex flex-col justify-start items-start max-w-2xl mx-auto p-2 md:py-5"> <div class="h-full"></div> <h1 class="text-5xl f-light mb-2 text-neutral-100">tags:</h1> <div class="f-light mb-4 text-neutral-100/50">All taggs used in posts</div> <div class="text-neutral-100 w-full"> <div class="grid grid-cols-2 lg:grid-cols-3 w-full gap-2 w-full"> ${uniqueTags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag}`, "href")} class="border border-gray-500 hover:border-neutral-100/70 p-2 rounded-lg flex justify-center items-center w-full text-center transition-transform duration-100 md:hover:scale-[102%]"${addAttribute(renderTransition($$result2, "2jidzyhg", fade({ duration: "0.75s" })), "data-astro-transition-scope")}> <div class="flex-1">${tag}</div> </a>`)} </div> </div> </div> ` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/pages/tags/index.astro", "self");

const $$file = "/Users/martindavila/Developer/projects-imartin.dev/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
