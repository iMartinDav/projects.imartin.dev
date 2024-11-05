/* empty css                                  */
import { a as createComponent, r as renderTemplate, f as renderHead } from '../chunks/astro/server_Fo31Ezp-.mjs';
export { renderers } from '../renderers.mjs';

const $$Resume = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Resume</title><meta http-equiv="refresh" content="0; url=/resume.pdf">${renderHead()}</head> <body> <p>
If you are not redirected automatically, follow this <a href="/resume.pdf">link to the resume</a>.
</p> </body></html>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/pages/resume.astro", void 0);

const $$file = "/Users/martindavila/Developer/projects-imartin.dev/src/pages/resume.astro";
const $$url = "/resume";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resume,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
