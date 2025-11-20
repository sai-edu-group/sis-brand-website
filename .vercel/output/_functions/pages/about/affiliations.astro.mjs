import { c as createComponent, m as maybeRenderHead, r as renderComponent, d as addAttribute, b as renderTemplate } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_BpT8Tlhj.mjs';
import { $ as $$SectionHeaderMain } from '../../chunks/SectionHeaderMain_BmwBqac_.mjs';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
import { a as affiliationsDetails } from '../../chunks/affiliations_4qpC5bxj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Affiliations = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-n-100 relative w-full overflow-hidden"> <div class="container mx-auto flex flex-col gap-10 p-6 md:gap-14 md:py-9 md:pb-18 lg:gap-20 lg:pb-24"> <!-- Section header title --> ${renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { ...affiliationsDetails.sectionHeaderContent })} <!-- Affiliations Cards wrapper --> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-9"> <!-- Affiliations Cards --> ${affiliationsDetails.affiliationsContent.map(
    (affiliationsContentItem, cardIndex) => renderTemplate`<div class="card-anim card-bottom"${addAttribute(`--delay: ${cardIndex * 0.1}s`, "style")}> ${renderComponent($$result, "ArticleCard", $$ArticleCard, { "title": affiliationsContentItem.title, "img": affiliationsContentItem.img, "href": URLS.ABOUT.AFFILIATIONS.ITEM(
      affiliationsContentItem.title
    ), "description": affiliationsContentItem.description, "badgeText": "" })} </div>`
  )} </div> </div> </section>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/about/affiliations/Affiliations.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { label: "About", href: "/about/" },
    { label: "Affiliations", href: "/about/affiliations" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-n-100 relative w-full overflow-hidden"> <div class="container mx-auto px-6 pt-30 md:pt-40 2xl:px-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} </div> </div> ${renderComponent($$result2, "Affiliations", $$Affiliations, {})} ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/about/affiliations/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/about/affiliations/index.astro";
const $$url = "/about/affiliations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
