import { a as createComponent, r as renderTemplate, m as maybeRenderHead, c as createAstro, e as addAttribute, g as renderTransition, b as renderComponent } from './astro/server_bMn8tCat.mjs';
import 'kleur/colors';
import { a as $$Icon } from './Icon_MISruTs7.mjs';
import 'clsx';
/* empty css                                                                       */
/* empty css                                   */

const $$ScrollIndicator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="scroll-indicator" data-astro-cid-7ivj2o3m></div>  `;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/ScrollIndicator.astro", void 0);

const $$Astro = createAstro("https://bento.engage-dev.com/");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate` ${maybeRenderHead()}<div class="sticky top-0 w-full max-w-2xl mx-auto px-2 bg-darkslate-400 z-50 border-b border-b-[0.1px] border-gray-500 relative"${addAttribute(renderTransition($$result, "nlp4cvb2", "none"), "data-astro-transition-scope")}> <div class="mx-auto"> <div class="flex justify-between items-center"> <div class="flex items-center gap-2"> <a href="javascript:window.location.href='/'" class="group py-2 items-center justify-center px-4 border border-gray-500 rounded text-neutral-100"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:home", "class": "w-5 h-5 inline-block md:group-hover:scale-110 transition-all duration-100" })} </a> <a href="/biocode" class="group py-2 flex items-center justify-center px-4 border border-gray-500 rounded text-neutral-100 decoration-none hover:decoration-none">
BioCode
<!-- <Icon
            name="carbon:blog"
            class="w-5 h-5 inline-block md:group-hover:scale-110 transition-all duration-100"
          /> --> </a> <a href="/projects" class="group py-2 flex items-center justify-center px-4 border border-gray-500 rounded text-neutral-100 decoration-none hover:decoration-none">
Projects
<!-- <Icon
            name="material-symbols:code"
            class="w-5 h-5 inline-block md:group-hover:scale-110 transition-all duration-100"
          /> --> </a> </div> <div class="p-4"> <a href="javascript:history.back()" class="hidden text-lg flex items-center gap-1 group text-neutral-100 no-underline hover:no-underline hover:text-neutral-200 transition-all duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-left", "class": "w-5 h-5 inline-block md:group-hover:-translate-x-1 transition-all duration-300" })} <div>back</div> </a> </div> </div> </div> <div class=""> ${renderComponent($$result, "ScrollIndicator", $$ScrollIndicator, {})} </div> </div>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/Navbar.astro", "self");

export { $$Navbar as $ };
