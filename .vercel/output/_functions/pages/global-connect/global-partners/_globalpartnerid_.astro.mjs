import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$ArticleConsumption } from '../../../chunks/ArticleConsumption_BgN0YJdE.mjs';
import { U as URLS } from '../../../chunks/urls_DezZakVp.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_B_XTT9GI.mjs';
import { g as globalPartnersContent, s as sectionHeaderContent } from '../../../chunks/global-partners_D6e-p3_k.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const paths = [];
  globalPartnersContent.forEach((globalPartnerItem) => {
    paths.push({
      params: {
        globalPartnerId: globalPartnerItem.id
      },
      props: {
        globalPartnerItem
      }
    });
  });
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { globalPartnerItem } = Astro2.props;
  const breadcrumbItems = [
    { label: "Global Partners", href: URLS.GLOBAL_CONNECT.PARTNERS.ROOT },
    { label: globalPartnerItem.breadcrumbTitle, href: `#` }
  ];
  const sectionHeaderDetails = {
    title: sectionHeaderContent.title,
    subtitle: sectionHeaderContent.subtitle
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto px-6 pt-30 pb-5 md:pt-40 md:pb-8 lg:pb-9 2xl:px-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} </div> </div> ${renderComponent($$result2, "ArticleConsumption", $$ArticleConsumption, { "sectionHeaderDetails": sectionHeaderDetails, "articleDetail": globalPartnerItem })} ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/global-connect/global-partners/[globalPartnerId]/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/global-connect/global-partners/[globalPartnerId]/index.astro";
const $$url = "/global-connect/global-partners/[globalPartnerId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
