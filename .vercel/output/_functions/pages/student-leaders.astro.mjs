import { c as createComponent, a as createAstro } from '../chunks/astro/server_wWZRp_y9.mjs';
import 'clsx';
import { U as URLS } from '../chunks/urls_DezZakVp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect(URLS.STUDENT_LEADERS.STUDENT_COUNCIL, 301);
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/student-leaders/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/student-leaders/index.astro";
const $$url = "/student-leaders";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
