import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Breadcrumbs } from '../../../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$ArticleConsumption } from '../../../../chunks/ArticleConsumption_BgN0YJdE.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_B_XTT9GI.mjs';
import { l as learning360Content } from '../../../../chunks/learning-360_Ck2JJQ0s.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const paths = [];
  learning360Content.forEach((learning360ContentItem) => {
    paths.push({
      params: {
        id: learning360ContentItem.id,
        name: learning360ContentItem.title.replaceAll(" ", "-")
      },
      props: {
        learning360Item: learning360ContentItem
      }
    });
  });
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { learning360Item } = Astro2.props;
  const breadcrumbItems = [
    { label: "Learning 360", href: "/#learning-360" },
    { label: learning360Item.title, href: `#` }
  ];
  const sectionHeaderDetails = {
    title: learning360Item.title,
    subtitle: learning360Item.description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto px-6 pt-30 pb-5 md:pt-40 md:pb-8 lg:pb-9 2xl:px-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} </div> </div> ${renderComponent($$result2, "ArticleConsumption", $$ArticleConsumption, { "sectionHeaderDetails": sectionHeaderDetails, "articleDetail": learning360Item })} ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/about/learning-360/[id]/[name]/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/about/learning-360/[id]/[name]/index.astro";
const $$url = "/about/learning-360/[id]/[name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
