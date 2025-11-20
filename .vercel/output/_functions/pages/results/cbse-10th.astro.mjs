import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$FilterBar } from '../../chunks/FilterBar_Bn-EiNam.mjs';
import { $ as $$SectionHeaderMain } from '../../chunks/SectionHeaderMain_BmwBqac_.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$ResultsCard } from '../../chunks/ResultsCard__g9cVhDh.mjs';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
export { renderers } from '../../renderers.mjs';

const cbseTenth = {
  years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018],
  results: {
    2025: [
      {
        id: 1,
        studname: "Jyotiraditya Parida 2025",
        studprofilepic: "/images/results/10th/student.png",
        percentage: "97.6"
      },
      {
        id: 2,
        studname: "Omkarraditya Parida",
        studprofilepic: "/images/results/10th/student.png",
        percentage: "97.2"
      },
      {
        id: 1,
        studname: "Jyotiraditya Parida 2025",
        studprofilepic: "/images/results/10th/student.png",
        percentage: "97.6"
      },
      {
        id: 2,
        studname: "Omkarraditya Parida",
        studprofilepic: "/images/results/10th/student.png",
        percentage: "97.2"
      },
      {
        id: 1,
        studname: "Jyotiraditya Parida 2025",
        studprofilepic: "/images/results/10th/student.png",
        percentage: "97.6"
      },
      {
        id: 2,
        studname: "Omkarraditya Parida",
        studprofilepic: "/images/results/10th/student.png",
        percentage: "97.2"
      }
    ],
    2024: [
      {
        id: 1,
        studname: "Jyotiraditya  2024",
        studprofilepic: "/images/results/10th/student.png",
        percentage: "97.6"
      },
      {
        id: 2,
        studname: "Omkarraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.2"
      }
    ],
    2023: [
      {
        id: 1,
        studname: "Jyotiraditya Parida 2023",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.6"
      },
      {
        id: 2,
        studname: "Omkarraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.2"
      }
    ],
    2022: [
      {
        id: 1,
        studname: "Jyotiraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.6"
      },
      {
        id: 2,
        studname: "Omkarraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.2"
      }
    ],
    2021: [
      {
        id: 1,
        studname: "Jyotiraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.6"
      },
      {
        id: 2,
        studname: "Omkarraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.2"
      }
    ],
    2020: [
      {
        id: 1,
        studname: "Jyotiraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.6"
      },
      {
        id: 2,
        studname: "Omkarraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.2"
      }
    ],
    2019: [
      {
        id: 1,
        studname: "Jyotiraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.6"
      },
      {
        id: 2,
        studname: "Omkarraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.2"
      }
    ],
    2018: [
      {
        id: 1,
        studname: "Jyotiraditya Parida 2018",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.6"
      },
      {
        id: 2,
        studname: "Omkarraditya Parida",
        studprofilepic: "1640718105_8931 Jyotiraditya Parida 97.6.jpg",
        percentage: "97.2"
      }
    ]
  }
};
const cbseTenthBreadcrumbItems = [
  { label: "10th Results", href: URLS.RESULTS.CBSE_10 }
];
const cbseTenthSectionHeader = {
  title: "Class X Results",
  subtitle: "Celebrating our students hard work and achievements"
};

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const year = Number(Astro2.url.searchParams.get("year")) || cbseTenth.years[0];
  if (!year) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: Astro2.request.headers.get("referer") || URLS.HOME
      }
    });
  }
  const results = cbseTenth.results[year];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container m-auto flex flex-col gap-10 px-5 pt-32 pb-14 md:gap-14 lg:gap-16 lg:pt-40"> <!-- Breadcrumbs --> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": cbseTenthBreadcrumbItems })} <!-- Body of the Results --> <div class="flex flex-col gap-8 md:gap-12 lg:gap-14"> <!-- Section Header --> ${renderComponent($$result2, "SectionHeaderMain", $$SectionHeaderMain, { "title": cbseTenthSectionHeader.title, "subtitle": cbseTenthSectionHeader.subtitle })} <!-- Filter & Students --> <div class="flex flex-col gap-7 md:gap-8 lg:gap-11"> <!-- Years Filters --> ${renderComponent($$result2, "FilterBar", $$FilterBar, { "showSearch": false, "years": cbseTenth.years })} <!-- Results --> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4"> ${results?.map((resultItem) => renderTemplate`${renderComponent($$result2, "ResultsCard", $$ResultsCard, { "studentName": resultItem.studname, "score": resultItem.percentage, "image": resultItem.studprofilepic })}`)} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/results/cbse-10th/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/results/cbse-10th/index.astro";
const $$url = "/results/cbse-10th";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
