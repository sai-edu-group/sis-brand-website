import { c as createComponent, b as renderTemplate } from '../../../../chunks/astro/server_wWZRp_y9.mjs';
import 'clsx';
export { renderers } from '../../../../renderers.mjs';

async function getStaticPaths() {
  const paths = [];
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/media/news/[id]/[title]/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/media/news/[id]/[title]/index.astro";
const $$url = "/media/news/[id]/[title]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
