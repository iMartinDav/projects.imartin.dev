import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_bMn8tCat.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate, a as formatTag } from './helpers_IQzZvkDr.mjs';
/* empty css                         */

const $$Astro = createAstro("https://bento.engage-dev.com/");
const $$PostItemV2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostItemV2;
  const { title, description, date, url, category, tags, image, author } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="w-full post-item"> <div class="text-sm overflow-hidden md:text-base decoration-none flex flex-col justify-between text-neutral-100 ease-in-out transition-colors border-gray-700 hover:border-gray-500 border-[1px] my-2 rounded-lg"> <div class="flex w-full h-full group"> <div class="w-1/3 shrink-0 rounded transition-all duration-300"> <a${addAttribute(`/${category}/${url}`, "href")} class="relative block w-full h-full"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="object-cover w-full h-full rounded rounded-l-lg border-gray-500" decoding="async" loading="eager"> <div class="absolute top-0 left-0 bg-gradient-to-l from-darkslate-400 to-none h-full w-full"></div> </a> </div> <div class="w-2/3 flex flex-col justify-between p-2 md:p-4"> <div> <div class="flex items-center justify-between w-full"> <time class="text-xs text-neutral-100/70"${addAttribute(date.toISOString(), "datetime")}${addAttribute(date.toISOString(), "data-date")}> ${formatDate(date)} </time> <a${addAttribute(`/${category}`, "href")}> <div class="border border-gray-500 px-2 rounded capitalize text-sm text-neutral-100/70"> ${category} </div> </a> </div> <div class="my-5 post-title"> <a${addAttribute(`/${category}/${url}`, "href")}> <div class="inline-block f-bold text-lg lg:text-2xl transition-all duration-300"> ${title} </div> </a> <a${addAttribute(`/${category}/${url}`, "href")}> <div class="text-neutral-100/70 md:group-hover:text-neutral-100 transition-all duration-300 f-light line-clamp-2"> ${description} </div> </a> </div> </div> <!-- Author info --> <div class="flex items-center mt-4"> <img src="/profile-cool.webp"${addAttribute(author, "alt")} class="w-10 h-10 rounded-full mr-2 object-cover"> <span class="text-neutral-100 font-medium">${author}</span> </div> <div class="mt-2"> <div class="text-neutral-100 mb-2"> <a href="/tags">Tags:</a> </div> <div class="flex gap-1 overflow-scroll"> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${formatTag(tag)}`, "href")} class="text-sm bg-gray-700 text-neutral-100 rounded px-2 py-1 lowercase whitespace-nowrap">
#${formatTag(tag)} </a>`)} </div> </div> </div> </div> </div>  </li>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/Post/PostItemV2.astro", void 0);

export { $$PostItemV2 as $ };
