import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Layout } from '../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$FilterBar } from '../chunks/FilterBar_Bn-EiNam.mjs';
import { $ as $$SectionHeaderMain } from '../chunks/SectionHeaderMain_BmwBqac_.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$AwardsCard } from '../chunks/AwardsCard_DnFL7IDB.mjs';
import { U as URLS } from '../chunks/urls_DezZakVp.mjs';
export { renderers } from '../renderers.mjs';

const awards = {
  years: [2025, 2024, 2023, 2022, 2021, 2020],
  awards: {
    2025: [
      {
        id: 1,
        image: "/images/awards/2025/1.jpg",
        year: "2025",
        title: "Ivy League Status by Education World India School Rankings 2025-26",
        description: "SAl International is among the six elite schools in India to be accorded the prestigious Ivy League' status, recognizing our commitment to comprehensive excellence."
      },
      {
        id: 2,
        image: "/images/awards/2025/2.jpg",
        year: "2025",
        title: "Ivy League Status by Education World India School Rankings 2025-26",
        description: "SAl International is among the six elite schools in India to be accorded the prestigious Ivy League' status, recognizing our commitment to comprehensive excellence."
      }
    ],
    2024: [
      {
        id: 1,
        image: "/images/awards/2024/1.jpg",
        year: "2024",
        title: "Ivy League Status by Education World India School Rankings 2025-26",
        description: "SAl International is among the six elite schools in India to be accorded the prestigious Ivy League' status, recognizing our commitment to comprehensive excellence."
      },
      {
        id: 2,
        image: "/images/awards/2024/2.jpg",
        year: "2024",
        title: "Ivy League Status by Education World India School Rankings 2025-26",
        description: "SAl International is among the six elite schools in India to be accorded the prestigious Ivy League' status, recognizing our commitment to comprehensive excellence."
      }
    ]
  }
};
const awardsBreadcrumbItems = [
  {
    label: "Awards & Achievements",
    href: URLS.AWARDS
  }
];
const awardsSectionHeader = {
  title: "Awards & Achievements",
  subtitle: "Celebrating excellence and milestones that define our journey"
};

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const year = parseInt(Astro2.url.searchParams.get("year")) || awards.years[0];
  if (!year) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: Astro2.request.headers.get("referer") || URLS.HOME
      }
    });
  }
  const awardItems = awards.awards[year];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container m-auto flex flex-col gap-10 px-5 pt-32 pb-14 md:gap-14 lg:gap-16 lg:pt-40"> <!-- Breadcrumbs --> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": awardsBreadcrumbItems })} <!-- Body of the Results --> <div class="flex flex-col gap-8 md:gap-12 lg:gap-14"> <!-- Section Header --> ${renderComponent($$result2, "SectionHeaderMain", $$SectionHeaderMain, { "title": awardsSectionHeader.title, "subtitle": awardsSectionHeader.subtitle })} <!-- Filter & Students --> <div class="flex flex-col gap-7 md:gap-8 lg:gap-11"> <!-- Years Filters --> ${renderComponent($$result2, "FilterBar", $$FilterBar, { "showSearch": false, "years": awards.years })} <!-- Results --> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8"> ${awardItems?.map((awardItem) => renderTemplate`${renderComponent($$result2, "AwardsCard", $$AwardsCard, { "title": awardItem.title, "subTitle": awardItem.description, "img": awardItem.image, "year": awardItem.year })}`)} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/awards/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/awards/index.astro";
const $$url = "/awards";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
