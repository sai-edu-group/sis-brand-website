import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate, u as unescapeHTML, d as addAttribute } from '../../../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Breadcrumbs } from '../../../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$Article } from '../../../../chunks/Article_STap5Rbj.mjs';
import { s as saiSevaContent, f as flagshipContent, c as curriculumDetails, a as amenitiesDetails } from '../../../../chunks/sai-seva_CbUcB0np.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$LearningAndBeyondConsumption = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LearningAndBeyondConsumption;
  const { sectionHeaderDetails, learningAndBeyondDetails } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto flex flex-col gap-5 px-6 pb-30 md:gap-8 md:pb-40 lg:gap-9 2xl:px-0"> <!-- Article Section --> ${renderComponent($$result, "Article", $$Article, { "title": sectionHeaderDetails?.title, "subtitle": sectionHeaderDetails?.subtitle, "eyebrowText": sectionHeaderDetails?.eyebrowText }, { "default": ($$result2) => renderTemplate`  <div class="flex flex-col gap-10 md:gap-14 lg:gap-20"> <!-- Learning and Beyond Image and Details --> ${learningAndBeyondDetails.landscapeImg && renderTemplate`<img${addAttribute(learningAndBeyondDetails.landscapeImg, "src")} alt=" Learning and Beyond Consumption Image" class="card-anim card-bottom h-[257px] w-full rounded-3xl object-cover md:h-[524px] lg:h-[600px]"${addAttribute(`--delay: 0.1s`, "style")}>`} <!--  Learning and Beyond Description --> <div>${unescapeHTML(learningAndBeyondDetails.content)}</div> </div> ` })} </div> </section>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/about/learning-and-beyond/LearningAndBeyondConsumption.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const typeMap = {
    amenities: amenitiesDetails.amenitiesCards,
    curriculum: curriculumDetails.curriculumContent,
    "flagship-events": flagshipContent,
    "sai-seva": saiSevaContent
  };
  const paths = [];
  Object.entries(typeMap).forEach(([type, list]) => {
    list.forEach((detail) => {
      paths.push({
        params: {
          type,
          id: detail.id.toString()
        },
        props: {
          type,
          detail
        }
      });
    });
  });
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { type, detail } = Astro2.props;
  const breadcrumbMap = {
    amenities: "Amenities",
    curriculum: "Curriculum",
    "flagship-events": "Flagship Events",
    "sai-seva": "Sai Seva"
  };
  const breadcrumbItems = [
    {
      label: breadcrumbMap[type] || "Details",
      href: `/about/learning-and-beyond#${type}`
    },
    { label: detail.title, href: "#" }
  ];
  const sectionHeaderDetails = {
    title: detail.title,
    subtitle: detail.description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto px-6 pt-30 pb-5 md:pt-40 md:pb-8 lg:pb-9 2xl:px-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} </div> </div>  ${renderComponent($$result2, "LearningAndBeyondConsumption", $$LearningAndBeyondConsumption, { "sectionHeaderDetails": sectionHeaderDetails, "learningAndBeyondDetails": detail })} ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/about/learning-and-beyond/[type]/[id]/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/about/learning-and-beyond/[type]/[id]/index.astro";
const $$url = "/about/learning-and-beyond/[type]/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
