import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Article } from '../../chunks/Article_STap5Rbj.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
export { renderers } from '../../renderers.mjs';

const sectionHeaderContent = {
  title: "Global Vision",
  subtitle: "Shaping responsible global citizens through international exposure, world-class partnerships, and 21st-century learning."
};
const globalVisionContent = {
  content: `<p class="fade-in">We see SAI International School as a global Brand mapped with the 21st Century skills and the pedagogy aligned with the global curriculum. SAI International School imparts comprehensive learning which cultivates a global outlook in students. The Global Dimension focuses on building responsible global citizens of tomorrow who identify themselves with the emerging cross border communities and whose laudable actions contribute to build a better world to live in.</p>
  <p class="fade-in">The affiliations and accreditations from renowned International educational bodies such as Round Square, AFS, British Council, Cambridge, Microsoft, UNIC, UNESCO, ASPnet and many more, further enables SAI International School to strengthen the foundation of education in the state.</p>
  <p class="fade-in">It becomes highly pertinent to capacitate these students in transferable competencies besides giving them an International exposure to align with the fast-changing world.</p>
  <p class="fade-in">An exemplary manifestation of academic excellence is evident when the students of SAI International School reach out and cross the International waters, to pursue courses in foreign Universities such as Standford University, Upenn, University of California, Los Angeles, MIT, Oxford University of Sheffield, NTU, Singapore, HKUST just to name a few.</p>
  <a href="https://sisinternationaldimensions.wordpress.com/" target="_blank">Read Blog</a>
  `,
  landscapeImg: ""
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { label: "Global Connect", href: URLS.GLOBAL_CONNECT.ROOT },
    { label: "Global Vision", href: `#` }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto flex flex-col gap-5 px-6 pt-34 pb-30 md:gap-8 md:px-8 md:pt-40 md:pb-40 lg:gap-9 2xl:px-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Global Vision Section --> ${renderComponent($$result2, "Article", $$Article, { "title": sectionHeaderContent?.title, "subtitle": sectionHeaderContent?.subtitle }, { "default": ($$result3) => renderTemplate`  <div class="flex flex-col gap-10 md:gap-14 lg:gap-20"> <!-- Global Vision Image and Details --> ${globalVisionContent.landscapeImg} <!--  Global Vision Description --> <div>${unescapeHTML(globalVisionContent.content)}</div> </div> ` })} </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/global-connect/global-vision/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/global-connect/global-vision/index.astro";
const $$url = "/global-connect/global-vision";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
