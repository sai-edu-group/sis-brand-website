import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Article } from '../../chunks/Article_STap5Rbj.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
export { renderers } from '../../renderers.mjs';

const sectionHeaderContent = {
  title: "Radio Orange",
  subtitle: "A student-led media studio fostering real-world skills in film, production, and storytelling."
};
const radioOrangeContent = {
  content: `<p class="fade-in">Radio Orange 99.9 is an in-house virtual radio station, operated by the students under faculty supervision. It is the first School radio broad casting system in the state of Odisha and is a brilliant training ground for those students who dream of pursuing a career in broad casting. It gives them a great platform to share their thoughts and views and at the same time develop their communication skills along with unleashing their creativity.
</p>
  <p class="fade-in">Students from class VI onwards are taught how to entertain audience through the magic of voice and content with spontaneity. They get to know the various techniques of mike placement, voice modulation, diction, clarity of speech etc. They are guided on how to select a topic, prepare an efficacious script, and train the voice to make it sound interesting so as to keep the audience engrossed as well as learn how to speak impromptu.
</p>
  <p class="fade-in">Students are introduced to the concept of conveying information creatively, which is useful during presentations in class or later in their careers. Exposure to audio-visual aids in school teaches them to communicate through sight and sound and to understand the underlying content. A vast array of equipment is available, which is used by students during their Club classes or while preparing for any event.
</p>
  `,
  landscapeImg: "/images/media/radio-orange/radio-orange.jpg"
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { label: "Media", href: URLS.MEDIA.ROOT },
    { label: "Radio Orange", href: `#` }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto flex flex-col gap-5 px-6 pt-34 pb-30 md:gap-8 md:px-8 md:pt-40 md:pb-40 lg:gap-9 2xl:px-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Radio Orange Section --> ${renderComponent($$result2, "Article", $$Article, { "title": sectionHeaderContent?.title, "subtitle": sectionHeaderContent?.subtitle }, { "default": ($$result3) => renderTemplate`  <div class="flex flex-col gap-10 md:gap-14 lg:gap-20"> <!-- Radio Orange Image and Details --> ${renderTemplate`<img${addAttribute(radioOrangeContent.landscapeImg, "src")} alt="Radio Orange Image" class="card-anim card-bottom h-[257px] w-full rounded-3xl object-cover md:h-[524px] lg:h-[600px]"${addAttribute(`--delay: 0.1s`, "style")}>`} <!--  SAI TV Description --> <div>${unescapeHTML(radioOrangeContent.content)}</div> </div> ` })} </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/media/radio-orange/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/media/radio-orange/index.astro";
const $$url = "/media/radio-orange";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
