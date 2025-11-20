import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$FilterBar } from '../../../chunks/FilterBar_Bn-EiNam.mjs';
import { $ as $$SectionHeaderMain } from '../../../chunks/SectionHeaderMain_BmwBqac_.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$ResultsCard } from '../../../chunks/ResultsCard__g9cVhDh.mjs';
import { c as cbseClasses } from '../../../chunks/cbse-12th_Dpf_XRyB.mjs';
import { U as URLS } from '../../../chunks/urls_DezZakVp.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { streamId } = Astro2.params;
  const year = Astro2.url.searchParams.get("year");
  const classItem = cbseClasses.find(
    (cbseClassItem) => cbseClassItem.id === parseInt(streamId ?? "0")
  );
  if (!streamId || !year || !classItem) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: Astro2.request.headers.get("referer") || URLS.HOME
      }
    });
  }
  const results = classItem.results[parseInt(year)];
  const breadcrumbItems = [
    { label: "12th Results", href: URLS.RESULTS.CBSE_12.ROOT },
    {
      label: classItem.name,
      href: `${URLS.RESULTS.CBSE_12.STREAM(streamId)}?year=${year}`
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container m-auto flex flex-col gap-10 px-5 pt-32 pb-14 md:gap-14 lg:gap-16 lg:pt-40"> <!-- Breadcrumbs --> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Body of the Results --> <div class="flex flex-col gap-8 md:gap-12 lg:gap-14"> <!-- Section Header --> ${renderComponent($$result2, "SectionHeaderMain", $$SectionHeaderMain, { "title": classItem.name, "subtitle": "Celebrating our students hard work and achievements" })} <!-- Filter & Students --> <div class="flex flex-col gap-7 md:gap-8 lg:gap-11"> <!-- Years Filters --> ${renderComponent($$result2, "FilterBar", $$FilterBar, { "showSearch": false, "years": classItem.years })} <!-- Results --> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4"> ${results?.map((resultItem) => renderTemplate`${renderComponent($$result2, "ResultsCard", $$ResultsCard, { "studentName": resultItem.studname, "score": resultItem.percentage, "image": resultItem.studprofilepic })}`)} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/results/cbse-12th/[streamId]/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/results/cbse-12th/[streamId]/index.astro";
const $$url = "/results/cbse-12th/[streamId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
