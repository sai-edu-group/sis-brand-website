import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$SectionHeaderMain } from '../../chunks/SectionHeaderMain_BmwBqac_.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$ResultsCard } from '../../chunks/ResultsCard__g9cVhDh.mjs';
import { $ as $$FilterBar } from '../../chunks/FilterBar_Bn-EiNam.mjs';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
export { renderers } from '../../renderers.mjs';

const globalSioneersBreadcrumbItems = [
  {
    label: "Global Sioneers",
    href: URLS.STUDENT_LEADERS.GLOBAL_SIONEERS
  }
];
const globalSioneersSectionHeader = {
  title: "Global Sioneers",
  subtitle: "Celebrating students who secured admissions to leading universities across the world."
};
const globalSioneers = {
  years: [2025, 2024, 2023, 2022, 2021, 2020],
  globalSioneers: {
    2025: [
      {
        id: 1,
        name: "John Doe",
        image: "/images/student-leaders/global-sioneers/2025/1.png",
        year: 2025,
        instituteName: "John Doe"
      },
      {
        id: 2,
        name: "John Doe",
        image: "/images/student-leaders/global-sioneers/2025/2.png",
        year: 2025,
        instituteName: "John Doe"
      }
    ],
    2024: [
      {
        id: 1,
        name: "John Doe",
        image: "/images/student-leaders/global-sioneers/2024/1.png",
        year: 2024,
        instituteName: "John Doe"
      },
      {
        id: 2,
        name: "John Doe",
        image: "/images/student-leaders/global-sioneers/2024/2.png",
        year: 2024,
        instituteName: "John Doe"
      }
    ]
  }
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const year = Number(Astro2.url.searchParams.get("year")) || globalSioneers?.years[0];
  const students = globalSioneers?.globalSioneers[year];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container m-auto flex flex-col gap-10 px-5 pt-32 pb-14 md:gap-14 lg:gap-16 lg:pt-40"> <!-- Breadcrumbs --> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": globalSioneersBreadcrumbItems })} <!-- Body of the Results --> <div class="flex flex-col gap-8 md:gap-12 lg:gap-14"> <!-- Section Header --> ${renderComponent($$result2, "SectionHeaderMain", $$SectionHeaderMain, { "title": globalSioneersSectionHeader.title, "subtitle": globalSioneersSectionHeader.subtitle })} <!-- Filter & Students --> <div class="flex flex-col gap-7 md:gap-8 lg:gap-11"> <!-- Years Filters --> ${renderComponent($$result2, "FilterBar", $$FilterBar, { "showSearch": false, "years": globalSioneers.years })} <!-- Global Sioneers Images --> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4"> ${students?.map((studentsItem) => renderTemplate`${renderComponent($$result2, "ResultsCard", $$ResultsCard, { "image": studentsItem.image, "studentName": studentsItem.name, "grade": studentsItem.instituteName })}`)} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/student-leaders/global-sioneers/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/student-leaders/global-sioneers/index.astro";
const $$url = "/student-leaders/global-sioneers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
