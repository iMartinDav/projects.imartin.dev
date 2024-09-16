/* empty css                                  */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_bMn8tCat.mjs';
import 'kleur/colors';
import { G as GlobeComponent } from '../chunks/Globe_Dl9Y4lTy.mjs';
import { $ as $$BasicLayout } from '../chunks/Icon_MISruTs7.mjs';
import { $ as $$Navbar } from '../chunks/Navbar_CyhXkS58.mjs';
export { renderers } from '../renderers.mjs';

const $$Travel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`  ${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "engage-bento: visited countries", "description": "A 3d globe showing countries that I have visited so far", "page": "travel" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<div class="w-full flex justify-center"> ${renderComponent($$result2, "Globe", GlobeComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/martindavila/Developer/projects-imartin.dev/src/components/Globe", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/pages/travel.astro", void 0);

const $$file = "/Users/martindavila/Developer/projects-imartin.dev/src/pages/travel.astro";
const $$url = "/travel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Travel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
