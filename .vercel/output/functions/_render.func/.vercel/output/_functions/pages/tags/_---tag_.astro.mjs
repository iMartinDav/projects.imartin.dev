/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as renderSlot, e as addAttribute } from '../../chunks/astro/server_bMn8tCat.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_C19ef6d_.mjs';
import { a as formatTag } from '../../chunks/helpers_IQzZvkDr.mjs';
/* empty css                                    */
import { $ as $$BasicLayout } from '../../chunks/Icon_BNfNYvvF.mjs';
import { $ as $$PostItemV2 } from '../../chunks/PostItemV2_CIoqhPiQ.mjs';
import { $ as $$Navbar } from '../../chunks/Navbar_CISsp3sU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://projects.imartin.dev/");
const $$TagsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagsLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "description": description }, { "": ($$result2) => renderTemplate`${maybeRenderHead()}<div class=""></div>`, "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/layouts/TagsLayout.astro", void 0);

const $$Astro = createAstro("https://projects.imartin.dev/");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  const tagSet = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    if (Array.isArray(post.data.tags)) {
      post.data.tags.forEach((tag) => {
        const lowercaseTag = tag.toLowerCase();
        const urlTag = formatTag(lowercaseTag);
        tagSet.add(urlTag);
      });
    }
  });
  const tagRoutes = Array.from(tagSet).map((tag) => ({
    params: { tag }
  }));
  return tagRoutes;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const tagParam = Astro2.params.tag || "";
  const allPosts = await getCollection("posts");
  const pageObjects = [];
  for (const post of allPosts) {
    const tags = post.data.tags;
    if (Array.isArray(tags)) {
      const processedTags = tags.map((tag) => formatTag(tag));
      if (processedTags.includes(formatTag(tagParam))) {
        const postTitle = String(post.data.title);
        const postSlug = formatTag(postTitle);
        const postCategory = String(post.data.category);
        const postDescription = String(post.data.description);
        const postPubDate = String(post.data.pubDate);
        const postImage = String(post.data.image);
        const newPost = {
          slug: postSlug,
          data: {
            title: postTitle,
            description: postDescription,
            category: postCategory,
            pubDate: postPubDate,
            tags,
            image: postImage
          }
        };
        pageObjects.push(newPost);
      }
    }
  }
  pageObjects.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
  let filteredPosts = pageObjects;
  const Content = filteredPosts.map((post) => post);
  return renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result, "TagsLayout", $$TagsLayout, { "title": "projects.imartin.dev : tags", "description": "" })} ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="w-screen h-full flex flex-col justify-start items-start max-w-2xl mx-auto p-2 md:py-5"> <h1 class="text-5xl f-bold mb-2 text-neutral-100"> <a${addAttribute(`/tags`, "href")} class="f-light text-neutral-100/70">tag:</a>
#${formatTag(tagParam)} </h1> <div class="f-light mb-4 text-neutral-100/50">
Other posts tagged with "${tagParam}".
</div> <div class="w-full"> <ul class=""> ${Content.map((post) => renderTemplate`<div class="post-item opacity-0"> ${renderComponent($$result, "PostItem", $$PostItemV2, { "title": post.data.title || "No title", "description": post.data.description || "No description", "date": post.data.pubDate ? new Date(post.data.pubDate) : /* @__PURE__ */ new Date(), "url": post.slug, "category": post.data.category || "No category", "tags": post.data.tags || [], "image": post.data.image || "" })} </div>`)} </ul> </div> </div> </div>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/pages/tags/[...tag].astro", void 0);

const $$file = "/Users/martindavila/Developer/projects-imartin.dev/src/pages/tags/[...tag].astro";
const $$url = "/tags/[...tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
