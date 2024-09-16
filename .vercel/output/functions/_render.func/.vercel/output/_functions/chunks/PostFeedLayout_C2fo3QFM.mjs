import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as renderSlot } from './astro/server_bMn8tCat.mjs';
import 'kleur/colors';
import { $ as $$BasicLayout } from './Icon_MISruTs7.mjs';
import { $ as $$Navbar } from './Navbar_CyhXkS58.mjs';

const $$Astro = createAstro("https://bento.engage-dev.com/");
const $$PostFeedLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostFeedLayout;
  const { title, description, page, fullScreen } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "description": description }, { "": ($$result2) => renderTemplate`<div class="bg-darkslate-400 text-neutral-50 text-3xl font-black uppercase flex justify-center items-center w-screen h-screen z-50 fixed top-0 bottom-0 right-0 left-0"></div>`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Navbar", $$Navbar, {})} <div class="h-full"> ${renderSlot($$result2, $$slots["default"])} </div> ` })} </div>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/layouts/PostFeedLayout.astro", void 0);

export { $$PostFeedLayout as $ };
