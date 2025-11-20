import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Article } from '../../chunks/Article_STap5Rbj.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
export { renderers } from '../../renderers.mjs';

const sectionHeaderContent = {
  title: "SAI TV",
  subtitle: "A student-led media studio fostering real-world skills in film, production, and storytelling."
};
const saiTVContent = {
  content: `<p class="fade-in">SAI TV is one of the most stimulating clubs that enables students to get an exposure on the basics of film making and television production. It focuses on enriching student’s knowledge on the 4 P’s of creating television programs, namely, Planning, Production, Programming and Publicity.</p>
  <p class="fade-in">Through activities such as panel discussion, anchoring, compering, interviews, studio discussions, outdoor recordings etc., students gain a hands-on experience of script writing, scouting, audio, video & lighting, use of camera, editing, studio production, digital cinematography as well as producing and directing. Furthermore, eminent National and International personalities have been interviewed in this studio, thereby giving the students a real time feel of working in a studio.</p>
  <p class="fade-in">Through activities such as panel discussion, anchoring, compering, interviews, studio discussions, outdoor recordings etc., students gain a hands-on experience of script writing, scouting, audio, video & lighting, use of camera, editing, studio production, digital cinematography as well as producing and directing. Furthermore, eminent National and International personalities have been interviewed in this studio, thereby giving the students a real time feel of working in a studio.</p>
  `,
  landscapeImg: "/images/media/sai-tv/sai-tv.jpg"
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { label: "Media", href: URLS.MEDIA.ROOT },
    { label: "SAI TV", href: `#` }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto flex flex-col gap-5 px-6 pt-34 pb-30 md:gap-8 md:px-8 md:pt-40 md:pb-40 lg:gap-9 2xl:px-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- SAI TV Section --> ${renderComponent($$result2, "Article", $$Article, { "title": sectionHeaderContent?.title, "subtitle": sectionHeaderContent?.subtitle }, { "default": ($$result3) => renderTemplate`  <div class="flex flex-col gap-10 md:gap-14 lg:gap-20"> <!-- SAI TV Image and Details --> ${renderTemplate`<img${addAttribute(saiTVContent.landscapeImg, "src")} alt=" SAI TV Image" class="card-anim card-bottom h-[257px] w-full rounded-3xl object-cover md:h-[524px] lg:h-[600px]"${addAttribute(`--delay: 0.1s`, "style")}>`} <!--  SAI TV Description --> <div>${unescapeHTML(saiTVContent.content)}</div> </div> ` })} </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/media/sai-tv/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/media/sai-tv/index.astro";
const $$url = "/media/sai-tv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
