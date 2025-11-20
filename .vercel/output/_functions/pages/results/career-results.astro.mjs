import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$CourseCard } from '../../chunks/CourseCard_CtJChudk.mjs';
import { $ as $$SectionHeaderMain } from '../../chunks/SectionHeaderMain_BmwBqac_.mjs';
import { c as careerResults, a as careerResultsBreadcrumbs, b as careerResultsSectionHeader } from '../../chunks/career-results_gYZhTQrO.mjs';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container m-auto flex flex-col gap-9 px-5 pt-32 pb-14 md:gap-14 lg:gap-16 lg:pt-40"> <!-- Breadcrumbs Section --> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": careerResultsBreadcrumbs })} <div class="flex flex-col gap-8 md:gap-12 lg:gap-14"> <!-- Section Header --> ${renderComponent($$result2, "SectionHeaderMain", $$SectionHeaderMain, { "title": careerResultsSectionHeader.title, "subtitle": careerResultsSectionHeader.subtitle })} <!-- Courses --> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:grid-cols-4"> ${careerResults.map((examItem) => renderTemplate`${renderComponent($$result2, "CourseCard", $$CourseCard, { "title": `${examItem.name} Results`, "image": `/results/career/${examItem.name.toLowerCase().replace(" ", "-")}.jpg`, "onCtaClick": `window.location.href = "${URLS.RESULTS.CAREER_RESULTS.EXAM(examItem.name.toLowerCase().replace(" ", "-"))}?year=${examItem.years[0]}"`, "ctaText": "Show Results" })}`)} </div> </div> </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/results/career-results/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/results/career-results/index.astro";
const $$url = "/results/career-results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
