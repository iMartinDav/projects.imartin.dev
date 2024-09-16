export { renderers } from '../../../renderers.mjs';

async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      msg: "Hello World!",
      app: "Projects-imartin.dav",
      repository: "https://github.com/iMartinDav/projects.imartin.dev",
      version: "1.0.0",
      endpoints: [
        "/api/v1/hello.json",
        "/api/v1/fetchNowFeed.json",
        "/api/v1/fetchProjectsFeed.json"
      ],
      status: 200
    })
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
