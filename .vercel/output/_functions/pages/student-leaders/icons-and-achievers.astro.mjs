import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$SectionHeaderMain } from '../../chunks/SectionHeaderMain_BmwBqac_.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$FilterBar } from '../../chunks/FilterBar_Bn-EiNam.mjs';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
export { renderers } from '../../renderers.mjs';

const achieversBreadcrumbItems = [
  {
    label: "Achievers",
    href: URLS.STUDENT_LEADERS.ICONS_ACHIEVERS
  }
];
const achieversSectionHeader = {
  title: "Icons & Achievers",
  subtitle: "Celebrating students who excelled in academics, sports, research, and creative arts."
};
const achievers = {
  years: [2025, 2024, 2023, 2022, 2021, 2020],
  achievers: {
    2025: [
      {
        id: 1,
        name: "John Doe",
        description: "John Doe",
        year: 2025
      },
      {
        id: 2,
        name: "John Doe",
        description: "John Doe",
        year: 2025
      }
    ],
    2024: [
      {
        id: 1,
        name: "John Doe",
        description: "John Doe",
        year: 2024
      },
      {
        id: 2,
        name: "John Doe",
        description: "John Doe",
        year: 2024
      }
    ]
  }
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const year = Number(Astro2.url.searchParams.get("year")) || achievers?.years[0];
  const students = achievers?.achievers[year];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container m-auto flex flex-col gap-10 px-5 pt-32 pb-14 md:gap-14 lg:gap-16 lg:pt-40"> <!-- Breadcrumbs --> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": achieversBreadcrumbItems })} <!-- Body of the Results --> <div class="flex flex-col gap-8 md:gap-12 lg:gap-14"> <!-- Section Header --> ${renderComponent($$result2, "SectionHeaderMain", $$SectionHeaderMain, { "title": achieversSectionHeader.title, "subtitle": achieversSectionHeader.subtitle })} <!-- Filter & Students --> <div class="flex flex-col gap-7 md:gap-8 lg:gap-11"> <!-- Years Filters --> ${renderComponent($$result2, "FilterBar", $$FilterBar, { "showSearch": false, "years": achievers.years })} <!-- List of Icons & Achievers --> <div class="grid grid-cols-1 gap-4"> ${students?.map((studentsItem) => renderTemplate`<ul> <li> <strong>${studentsItem.name}</strong>,${" "} ${studentsItem.description} </li> </ul>`)} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/student-leaders/icons-and-achievers/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/student-leaders/icons-and-achievers/index.astro";
const $$url = "/student-leaders/icons-and-achievers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
