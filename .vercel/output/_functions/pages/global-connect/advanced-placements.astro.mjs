import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Article } from '../../chunks/Article_STap5Rbj.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
export { renderers } from '../../renderers.mjs';

const sectionHeaderContent = {
  title: "Advanced Placement (AP) Program",
  subtitle: "Global recognition for academic excellence, empowering students to earn university credits and stand out in admissions."
};
const advancedPlacementsContent = {
  content: `<p class="fade-in">We see SAI International School as a global Brand mapped with the 21st Century skills and the pedagogy aligned with the global curriculum. SAI International School imparts comprehensive learning which cultivates a global outlook in students. The Global Dimension focuses on building responsible global citizens of tomorrow who identify themselves with the emerging cross border communities and whose laudable actions contribute to build a better world to live in.</p>
  <p class="fade-in">The affiliations and accreditations from renowned International educational bodies such as Round Square, AFS, British Council, Cambridge, Microsoft, UNIC, UNESCO, ASPnet and many more, further enables SAI International School to strengthen the foundation of education in the state.</p>
  <p class="fade-in">It becomes highly pertinent to capacitate these students in transferable competencies besides giving them an International exposure to align with the fast-changing world.</p>
  <p class="fade-in">An exemplary manifestation of academic excellence is evident when the students of SAI International School reach out and cross the International waters, to pursue courses in foreign Universities such as Standford University, Upenn, University of California, Los Angeles, MIT, Oxford University of Sheffield, NTU, Singapore, HKUST just to name a few.</p>
  <a href="https://sisinternationaldimensions.wordpress.com/" target="_blank">Read Blog</a>
   <table>
      <thead>
        <tr>
          <th>Week 1</th>
          <th>8 a.m. Local Time</th>
          <th>12 p.m. Local Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tuesday, May 5, 2026</td>
          <td>Chemistry Algebra II</td>
          <td>World Literature Environmental Science</td>
        </tr>
        <tr>
          <td>Wednesday, May 6, 2026</td>
          <td>Physics Geometry</td>
          <td>American Government Statistics</td>
        </tr>
        <tr>
          <td>Thursday, May 7, 2026</td>
          <td>Computer Science History</td>
          <td>Psychology Art Appreciation</td>
        </tr>
        <tr>
          <td>Saturday, May 9, 2026</td>
          <td>Astronomy Trigonometry</td>
          <td>Ethics Theater Arts</td>
        </tr>
        <tr>
          <td>Friday, May 8, 2026</td>
          <td>Advanced Biology Calculus</td>
          <td>Sociology Music Theory</td>
        </tr>
      </tbody>
    </table>
  `,
  landscapeImg: ""
};
const metaData = {
  author: "Sai Admin",
  date: "2025-11-06T21:14:00+05:30",
  readTimeMins: 8
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { label: "Global Connect", href: URLS.GLOBAL_CONNECT.ROOT },
    { label: "Advanced Placements", href: `#` }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto flex flex-col gap-5 px-6 pt-34 pb-30 md:gap-8 md:px-8 md:pt-40 md:pb-40 lg:gap-9 2xl:px-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Advanced Placements Section --> ${renderComponent($$result2, "Article", $$Article, { "title": sectionHeaderContent?.title, "subtitle": sectionHeaderContent?.subtitle, "metaStripDetails": metaData }, { "default": ($$result3) => renderTemplate`  <div class="flex flex-col gap-10 md:gap-14 lg:gap-20"> <!-- Advanced Placements Image and Details --> ${advancedPlacementsContent.landscapeImg} <!--  Advanced Placements Description --> <div>${unescapeHTML(advancedPlacementsContent.content)}</div> </div> ` })} </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/global-connect/advanced-placements/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/global-connect/advanced-placements/index.astro";
const $$url = "/global-connect/advanced-placements";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
