/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderSlot, m as maybeRenderHead, F as Fragment, e as addAttribute } from '../chunks/astro/server_Fo31Ezp-.mjs';
import { $ as $$BasicLayout, a as $$Icon } from '../chunks/Icon_IB9rjt9H.mjs';
import { g as getCollection } from '../chunks/_astro_content_CF6XHS_F.mjs';
import { ssr, ssrHydrationKey, escape, createComponent as createComponent$1 } from 'solid-js/web';
import { createSignal, Show } from 'solid-js';
import { b as formatTimeForLosAngeles, g as getCurrentTimeInLosAngeles } from '../chunks/helpers_IQzZvkDr.mjs';
import { G as GlobeComponent } from '../chunks/Globe_D7RVIoOX.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://projects.imartin.dev/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, page, fullScreen } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])} `, "loader": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="loader bg-darkslate-400 text-neutral-50 text-3xl font-black uppercase flex justify-center items-center w-screen h-screen z-50 fixed top-0 bottom-0 right-0 left-0"></div>` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro("https://projects.imartin.dev/");
const $$Content = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Content;
  const { title, body } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${title && renderTemplate`${maybeRenderHead()}<h2 class="text-2xl f-bold m-0 z-20 drop-shadow">${title}</h2>`}${body && renderTemplate`<p class="m-0 f-light text-base">${body}</p>`}${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/Card/Content.astro", void 0);

const $$Astro$3 = createAstro("https://projects.imartin.dev/");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { title, body, colSpan, rowSpan, href, colorText, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`card group h-max sm:h-auto min-h-40 sm:min-h-auto overflow-hidden transform-y-[-40%] shadow-lg rounded-lg p-6 border border-darkslate-100 md:hover:border-gray-500 align-start flex-none ${height || "h-full"} justify-start relative transform perspective-1200 w-full transition duration-200 ease-in-out col-span-1 ${colSpan || "md:col-span-2"} ${rowSpan || ""}`, "class")}> ${href ? renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`h-full w-full transition-colors duration-500 ${colorText || ""}`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "ri:arrow-right-up-line", "class": "h-6 float-right group-hover:text-neutral-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out duration-100 z-20" })} ${renderComponent($$result, "Content", $$Content, { "title": title, "body": body }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </a>` : renderTemplate`${renderComponent($$result, "Content", $$Content, { "title": title, "body": body }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`} </div>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/Card/index.astro", void 0);

const $$ProjectsCard = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const nowPosts = allPosts.filter((post) => post.data.category === "projects");
  nowPosts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  const mostRecentProjectPost = nowPosts[0] || null;
  return renderTemplate`${renderComponent($$result, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-2", "title": "Projects", "href": "/projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="group"> <div class="line-clamp-4"> ${mostRecentProjectPost ? renderTemplate`<a${addAttribute(`/${mostRecentProjectPost.data.category}/${mostRecentProjectPost.slug || "#default"}`, "href")} target="" rel="noopener noreferrer" class="text-neutral-100 md:text-neutral-100/70 text-sm f-light md:group-hover:text-neutral-100 transition-colors duration-300"> <div class="group/newPost mt-5"> <div class="f-bold text-lg text-neutral-100"> ${mostRecentProjectPost.data.title} </div>  <div class="text-neutral-100/70 md:group-hover/newPost:text-neutral-100"> ${mostRecentProjectPost.data.description} </div> </div> </a>` : renderTemplate`<p>No recent posts in 'Projects' category.</p>`} </div> </div> ` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/ProjectsCard.astro", void 0);

const $$Astro$2 = createAstro("https://projects.imartin.dev/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { rounded } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="md:hover:scale-[99%] duration-200 ease-in-out transition-all"> <button${addAttribute(`custom-btn flex items-center justify-center text-xl shadow-custom shadow-gray-500 active:shadow-none active:translate-x-[1px] active:translate-y-[1px] text-neutral-100 px-4 py-2 border border-gray-500 transition-colors duration-100 ease-in-out bg-darkslate-400 cursor-pointer ${rounded ? "rounded-full" : "rounded-lg"}`, "class")}> <div class=""> ${renderSlot($$result, $$slots["default"])} </div> </button> </div>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/Button.astro", void 0);

const LINKS = {
  github: "https://github.com/iMartinDav",
  linkedin: "https://www.linkedin.com/in/imartindav/",
  twitter: "https://x.com/iMartinDav",
  discord: "https://discordapp.com/users/iMartinDav",
  email: "aldntmi@gmail.com"
};

var _tmpl$ = ["<div", ' class="-translate-y-26 absolute left-1/2 z-10 max-h-[70px] w-auto -translate-x-1/2 whitespace-normal rounded-lg bg-purple-600 px-4 py-2 text-center text-white shadow-lg"><p class="w-max">', "</p></div>"], _tmpl$2 = ["<div", ' class="relative inline-block"><div>', "</div><!--$-->", "<!--/--></div>"];
function Tooltip(props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(0);
  const messages = ["Exploring new horizons!", "Curious about our science?", "Innovation at your fingertips!", "Discovery awaits!", "Eager to learn more?", "Keep clicking for insights!", "Uncover the mysteries!", "Your curiosity drives progress!", "Stay curious, stay innovative!", "The journey of discovery continues!", "Delving deeper into biotech!", "Every click reveals more!", "Science is a click away!", "Pioneering knowledge with every click!", "Your quest for knowledge is inspiring!", "Unlocking the future of biotech!", "Stay tuned for more discoveries!", "The adventure of science unfolds!", "Continuing the exploration!", "Great minds explore!", "Curiosity fuels innovation!", "Last chance to unveil more!", "You're on a roll with discovery!", "Final insight: What’s next in biotech?"];
  const currentMessage = () => {
    const count = clickCount();
    return messages[Math.min(count, messages.length - 1)];
  };
  return ssr(_tmpl$2, ssrHydrationKey(), escape(props.children), escape(createComponent$1(Show, {
    get when() {
      return isVisible();
    },
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), escape(currentMessage()));
    }
  })));
}

const $$IntroCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Index$1, { "colSpan": "md:col-span-3", "rowSpan": "md:row-span-4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full h-full gap-5"> <div class="flex flex-col justify-between md:max-h-[300px] gap-4 z-50"> <div class="flex flex-col h-full"> <h6 class="text-sm f-light m-0 text-neutral-100/50">
welcome to my bioinformatics hub
</h6> <p class="m-0 f-light text-xl lg:text-2xl w-2/3 lg:w-full f-light drop-shadow-lg">
I'm <b>Martin</b>, a bioinformatics engineer turning gigabytes of
          genomic data into actionable insights. From BLAST searches to Hi-C
          analysis, I'm here to decode the language of life!
</p> </div> <div class="flex gap-2 md:gap-4"> <a${addAttribute(LINKS.github, "href")} aria-label="github profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "github profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:github-fill", "class": "h-7 w-7" })} <span class="sr-only">GitHub: Where I commit code and push the boundaries of genomic
              analysis</span> ` })} </a> <a${addAttribute(LINKS.linkedin, "href")} aria-label="linkedin profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "linkedin profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:linkedin-box-fill", "class": "h-7 w-7" })} <span class="sr-only">LinkedIn: Connect for bioinformatics insights and collaborations</span> ` })} </a> <a${addAttribute(LINKS.twitter, "href")} aria-label="twitter profile" target="_blank"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "twitter profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:twitter-x-fill", "class": "h-7 w-7" })} <span class="sr-only">Twitter: Follow for updates on bioinformatics trends and
              breakthroughs</span> ` })} </a> ${renderComponent($$result2, "Tooltip", Tooltip, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/martindavila/Developer/projects-imartin.dev/src/components/Tooltip/index", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Button", $$Button, { "aria-label": "bioinformatics fact" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "name": "ri:dna-fill", "class": "h-7 w-7" })} <span class="sr-only">Click for a bioinformatics insight!</span> ` })}  `, "tooltip": ($$result3) => renderTemplate`<span>Fun fact: I developed a novel computational method that improved
            Hi-C spatial resolution by 40%, bringing us closer to understanding
            3D genome organization!</span>` })} </div> </div> <img src="https://github.com/iMartinDav.png" class="absolute right-0 bottom-0 z-[-1] object-left opacity-70 object-cover w-1/2 sm:w-1/3 lg:w-auto h-full lg:relative sm:opacity-100 lg:rounded-lg lg:border md:group-hover:border-neutral-100/70 border-gray-500 border-l-none" alt="Martin analyzing complex genomic data structures"> <div class="absolute z-0 bottom-0 right-0 bg-gradient-to-r from-darkslate-400 to-none h-full w-1/2 sm:w-1/3 md:w-1/3 lg:w-[21.75rem]
       h-full lg:rounded-lg"></div> </div> ` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/IntroCard.astro", void 0);

const $$ContactsCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-full"> <header class="flex items-center"> <h1 class="text-white text-2xl font-bold">Let’s Connect and Innovate!</h1> </header> <div class="flex flex-col mt-4"> <div class="text-neutral-100/70">Reach Out</div> <div class="w-full mt-2"> <a${addAttribute(`mailto:${LINKS.email}`, "href")} aria-label="Email me"> ${renderComponent($$result2, "Button", $$Button, { "aria-label": "Email me" }, { "default": ($$result3) => renderTemplate` <div class="flex items-center gap-2"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "ri:mail-fill", "class": "h-5 w-5" })} <div>Send a Message</div> <span class="sr-only">Send a Message</span> </div> ` })} </a> </div> <div class="flex flex-col mt-4 w-full"> <h2 class="text-neutral-100/70">Connect with Me</h2> <div class="flex flex-col gap-1 w-full"> <div> <a${addAttribute(LINKS.linkedin, "href")} target="_blank" class="flex items-center gap-2 border border-darkslate-100 md:hover:border-gray-500 transition-colors duration-300 py-1 px-2 rounded-lg"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:linkedin-fill", "class": "h-5 w-5" })} <div>Let’s Network</div> </a> </div> <div> <a${addAttribute(LINKS.github, "href")} target="_blank" class="flex items-center gap-2 border border-darkslate-100 md:hover:border-gray-500 transition-colors duration-300 py-1 px-2 rounded-lg"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:github-fill", "class": "h-5 w-5" })} <div>Explore My Projects</div> </a> </div> <div> <a${addAttribute(LINKS.twitter, "href")} target="_blank" class="flex items-center gap-2 border border-darkslate-100 md:hover:border-gray-500 transition-colors duration-300 py-1 px-2 rounded-lg"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:twitter-x-fill", "class": "h-5 w-5" })} <div>Follow the Latest</div> </a> </div> <div> <a${addAttribute(LINKS.discord, "href")} target="_blank" class="flex items-center gap-2 border border-darkslate-100 md:hover:border-gray-500 transition-colors duration-300 py-1 px-2 rounded-lg"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:discord-fill", "class": "h-5 w-5" })} <div>Join the Conversation</div> </a> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/ContactsCard.astro", void 0);

const $$TimeZoneCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "Card", $$Index$1, { "colSpan": "lg:col-span-2", "rowSpan": "md:row-span-2", "title": "Local Time:" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<time datetime="" id="timeDisplay" class="text-3xl md:text-2xl lg:text-5xl flex f-bold h-full mt-5"> ${formatTimeForLosAngeles(getCurrentTimeInLosAngeles())} </time> ` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/TimeZoneCard.astro", void 0);

const $$Astro$1 = createAstro("https://projects.imartin.dev/");
const $$TechCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TechCard;
  const { title, description, tag, iconName, cardUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(cardUrl, "href")} class=""> <div class="flex flex-col items-center whitespace-nowrap gap-2 p-4 flex-grow border md:group-hover:border-gray-400 border-gray-500 rounded-lg h-full w-40 md:hover:-translate-y-[2px] transition-all duration-500"> <div class="flex flex-col gap-2 items-center"> <div class="md:group-hover:scale-[110%] transition-all duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": "w-10 h-10" })} </div> <div class="text-lg font-bold capitalize"> ${title} </div> </div> <!-- <div class="text-sm pb-2 text-left font-thin text-primary/70">
      {description}
    </div>
    <!-- 
    <div class="mt-auto">
      <div class="bg-primary/20 text-sm inline-block px-2 py-1 rounded">
        {tag}
      </div>
    </div> --> </div> </a>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/TechCard.astro", void 0);

const $$Astro = createAstro("https://projects.imartin.dev/");
const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Technologies;
  return renderTemplate`${maybeRenderHead()}<div class="flex overflow-auto gap-2 py-5 snap-x snap-mandatory"> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Next.js", "description": "A versatile React framework for building performant server-side rendered and statically generated web applications with seamless integration with popular web technologies.", "iconName": "cib:next-js", "cardUrl": "/tags/nextjs", "tag": "JS Framework" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "React", "description": "A popular JavaScript library for building user interfaces with reusable components and a virtual DOM, backed by a vast ecosystem of tools and resources.", "iconName": "logos:react", "cardUrl": "/tags/react", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Astro", "description": "A modern static site generator that combines performance, flexibility, and simplicity, enabling developers to build dynamic sites with modern web technologies.", "iconName": "vscode-icons:file-type-astro", "cardUrl": "/tags/astro", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Typescript", "description": "A superset of JavaScript that provides static type checking, enhanced IDE support, and other features for safer and more maintainable code, ideal for large-scale projects.", "iconName": "vscode-icons:file-type-typescript-official", "cardUrl": "/tags/typescript", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Python", "description": "A versatile and popular high-level programming language that emphasizes readability, simplicity, and productivity, with extensive libraries and frameworks for web development and machine learning.", "iconName": "vscode-icons:file-type-python", "cardUrl": "/tags/python", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "OpenAI", "description": "A research laboratory that develops artificial intelligence technology, including the GPT-3 language model, which can generate human-like text in response to prompts.", "iconName": "simple-icons:openai", "cardUrl": "/tags/openai", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Hugging Face", "description": "An open-source natural language processing library that provides a wide range of pretrained models and tools for building conversational AI applications.", "iconName": "noto-v1:hugging-face", "cardUrl": "/tags/hugging-face", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "PyTorch", "description": "A popular machine learning library that provides a Python interface for tensor computation and deep neural networks, with extensive support for GPU acceleration.", "iconName": "cib:pytorch", "cardUrl": "/tags/pytorch", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Tensorflow", "description": "", "description": "An open-source machine learning framework that enables developers to easily build and deploy ML models, offering comprehensive libraries and tools for research and production.", "iconName": "cib:tensorflow", "cardUrl": "/tags/tensorflow", "tag": "AI/ML" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Tailwind", "description": "A utility-first CSS framework for rapidly building custom user interfaces with a modern design system, offering a wide range of pre-built components and utilities.", "iconName": "vscode-icons:file-type-tailwind", "cardUrl": "/tags/tailwindcss", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Django", "description": "A modern Python framework for building APIs with a focus on developer productivity and code quality, offering automatic documentation and data validation.", "iconName": "simple-icons:django", "cardUrl": "/tags/django", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "MySQL", "description": "A popular relational database management system that is widely used for storing and managing structured data in various applications..", "iconName": "vscode-icons:file-type-mysql", "cardUrl": "/tags/mysql", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Supabase", "description": "An open-source alternative to Firebase that provides a suite of tools for building applications with serverless functions, authentication, and a PostgreSQL database.", "iconName": "simple-icons:supabase", "cardUrl": "/tags/supabase", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "GraphQL", "description": "A query language for APIs that provides a flexible and efficient approach to data fetching, enabling clients to specify exactly what data they need and nothing more.", "iconName": "vscode-icons:file-type-graphql", "cardUrl": "/tags/graphql", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "FastAPI", "description": "A modern Python framework for building APIs with a focus on developer productivity and code quality, offering automatic documentation and data validation.", "iconName": "simple-icons:fastapi", "cardUrl": "/tags/fastapi", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Node.js", "description": "An open-source, cross-platform runtime environment that enables developers to build server-side applications in JavaScript. It features an event-driven, non-blocking I/O model, making it ideal for scalable network applications.", "iconName": "logos:nodejs-icon", "cardUrl": "/tags/nodejs", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Linux", "description": "An open-source operating system that provides a free and highly customizable alternative to Windows and macOS, with a wide range of distributions and desktop environments.", "iconName": "logos:linux-tux", "cardUrl": "/tags/linux", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Ubuntu", "description": "An open-source operating system based on Debian Linux. Used for desktops, servers, and clouds. Ubuntu is known for its security, regular updates, and strong community support.", "iconName": "logos:ubuntu", "cardUrl": "/tags/ubuntu", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Nginx", "description": "A web server software known for its high performance, scalability, and reverse proxy capabilities. It is commonly used to serve web content, handle load balancing, and act as a reverse proxy.", "iconName": "logos:nginx", "cardUrl": "/tags/nginx", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Vercel", "description": "A cloud platform for static sites and serverless functions that provides a global edge network, serverless functions, and other tools for rapid deployment and scaling.", "iconName": "ion:logo-vercel", "cardUrl": "/tags/vercel", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "AWS", "description": "A cloud platform that provides a wide range of services for building and deploying applications, including serverless functions, databases, storage, and more.", "iconName": "mdi:aws", "cardUrl": "/tags/aws", "tag": "Web" })} </div> <div class="w-full snap-center"> ${renderComponent($$result, "TechCard", $$TechCard, { "title": "Sveltekit", "description": "A lightweight and fast web framework for building server-rendered and static sites with Svelte, offering intuitive development and easy deployment.", "iconName": "vscode-icons:file-type-svelte", "cardUrl": "/tags/sveltekit", "tag": "Web" })} </div> </div>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/Technologies.astro", void 0);

const $$AboutCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-6", "title": "About me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-2"> <p class="text-sm text-neutral-100/70 f-light">Lyon, France</p> <div class="flex flex-col"> <div class="text-xl f-bold m-0 z-20 mt-5">Bioinformatics Tech Stack</div> <p class="text-sm text-neutral-100/70 f-light">
Tools I use to decode genomes. Click to see related projects:
</p> </div> ${renderComponent($$result2, "Technologies", $$Technologies, {})} <p class="text-sm text-neutral-100/70 f-light">
While these are my preferred tools, I adapt to use the best solution for
      each bioinformatics challenge.
</p> <p class="text-sm text-neutral-100/70 f-light mt-2">
Passionate about creating innovative software solutions to unlock insights
      from complex biological data.
</p> </div> ` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/AboutCard.astro", void 0);

const $$Pulse = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="relative flex h-3 w-3"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span> </span>`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/Pulse.astro", void 0);

const $$BiocodeCard = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const nowPosts = allPosts.filter((post) => post.data.category === "biocode");
  nowPosts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  const mostRecentNowPost = nowPosts[0] || null;
  return renderTemplate`${renderComponent($$result, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-2" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="group"> <div class="flex justify-between w-full items-start mb-2"> <div class="flex flex-col w-full"> <a href="/biocode" class="text-white text-2xl f-bold w-full">BioCode</a> <a href="https://sive.rs/nowff" target="_blank"> <span class="hover:text-purple-500 text-sm text-neutral-100/50 cursor-pointer">Where Software Meets Genomics</span> </a> </div> <div class="md:group-hover:scale-150 transition-all duration-300"> ${renderComponent($$result2, "Pulse", $$Pulse, {})} </div> </div> <div class="line-clamp-3"> ${mostRecentNowPost ? renderTemplate`<a${addAttribute(`/${mostRecentNowPost.data.category}/${mostRecentNowPost.slug || "#default"}`, "href")} target="" rel="noopener noreferrer" class="text-neutral-100 md:text-neutral-100/70 text-sm f-light group/newPost transition-colors duration-300"> <div class="f-bold text-neutral-100"> ${mostRecentNowPost.data.title} </div> <div class="md:group-hover/newPost:text-neutral-100"> ${mostRecentNowPost.data.description}"
</div> </a>` : renderTemplate`<p>No recent posts in 'BioCode' category.</p>`} </div> </div> ` })}`;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/components/BiocodeCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "iMartin.dev: projects", "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="text-white m-auto p-2 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-3 md:gap-3 md:p-5 lg:h-screen lg:grid-rows-8 lg:grid-cols-4 lg:gap-4 lg:max-h-[800px]"> ${renderComponent($$result2, "IntroCard", $$IntroCard, {})} ${renderComponent($$result2, "AboutCard", $$AboutCard, {})} ${renderComponent($$result2, "ContactsCard", $$ContactsCard, {})} ${renderComponent($$result2, "TimeZone", $$TimeZoneCard, {})} ${renderComponent($$result2, "BiocodeCard", $$BiocodeCard, {})} ${renderComponent($$result2, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-1", "title": "Countries visited", "href": "travel", "colorText": "background" }, { "default": ($$result3) => renderTemplate` <div class="h-full w-full absolute inset-0 -z-10"> ${renderComponent($$result3, "Globe", GlobeComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/martindavila/Developer/projects-imartin.dev/src/components/Globe", "client:component-export": "default" })} </div> ` })} <!-- <Card
      colSpan="md:col-span-1"
      rowSpan="md:row-span-2 flex gap-4"
      title="Projects"
      href="/projects"
    >
      <div class="text-neutral-100/70">Personal projects and experiments.</div>
    </Card> --> ${renderComponent($$result2, "ProjectsCard", $$ProjectsCard, {})} ${renderComponent($$result2, "Card", $$Index$1, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-1" }, { "default": ($$result3) => renderTemplate` <p class="text-sm h-full w-full flex items-center justify-center text-center"> <span>© ${(/* @__PURE__ */ new Date()).getFullYear()}</span> <a href="https://github.com/iMartinDav" class="hover:underline font-twitter">
Martin DAVILA 💚
</a> <span>GPT-o1</span> </p> ` })} </main> ` })} `;
}, "/Users/martindavila/Developer/projects-imartin.dev/src/pages/index.astro", void 0);

const $$file = "/Users/martindavila/Developer/projects-imartin.dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
