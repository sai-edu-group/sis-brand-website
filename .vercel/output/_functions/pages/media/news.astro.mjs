import { c as createComponent, m as maybeRenderHead, b as renderTemplate } from '../../chunks/astro/server_wWZRp_y9.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p>Content coming soon.</p>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/media/news/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/media/news/index.astro";
const $$url = "/media/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
