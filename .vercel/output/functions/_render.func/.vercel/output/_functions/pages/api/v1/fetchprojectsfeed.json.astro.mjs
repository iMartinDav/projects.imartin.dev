import { g as getCollection } from '../../../chunks/_astro_content_wasJ2WD1.mjs';
export { renderers } from '../../../renderers.mjs';

const allPosts = await getCollection("posts");
const nowPosts = allPosts?.filter((post) => post.data.category === "projects").sort(
  (blogEntryA, blogEntryB) => (blogEntryB.data.pubDate || /* @__PURE__ */ new Date()).getTime() - (blogEntryA.data.pubDate || /* @__PURE__ */ new Date()).getTime()
);
async function GET({ params, request }) {
  return new Response(
    JSON.stringify(nowPosts)
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
