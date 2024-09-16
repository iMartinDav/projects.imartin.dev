import { ssr, ssrHydrationKey } from 'solid-js/web';
import { onMount, onCleanup } from 'solid-js';
import 'd3';
/* empty css                         */

var _tmpl$ = ["<div", ' class="flex mt-10 flex-col text-white justify-center items-center w-full h-full"><div class="w-full max-w-sm text-xl px-6"><p>"Every discovery is a step into the unknown, where science meets the unexplored."</p><p class="text-right">– The Spirit of Biotech Innovation</p></div><div class="w-full flex justify-center"></div></div>'];
const GlobeComponent = () => {
  onMount(() => {
    const handleResize = () => {
    };
    window.addEventListener("resize", handleResize);
    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
    });
  });
  return ssr(_tmpl$, ssrHydrationKey());
};

export { GlobeComponent as G };
