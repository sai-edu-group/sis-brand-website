import { c as createComponent, b as renderTemplate, r as renderComponent, d as addAttribute, m as maybeRenderHead, a as createAstro } from '../chunks/astro/server_wWZRp_y9.mjs';
import { a as $$Button, $ as $$Layout } from '../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$AwardsCard } from '../chunks/AwardsCard_DnFL7IDB.mjs';
import { $ as $$SectionHeaderMain } from '../chunks/SectionHeaderMain_BmwBqac_.mjs';
/* empty css                                 */
import 'clsx';
import { $ as $$Ethos, a as $$Founder } from '../chunks/Founder_K7Yho-yL.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_BpT8Tlhj.mjs';
import { U as URLS } from '../chunks/urls_DezZakVp.mjs';
import { l as learning360Content } from '../chunks/learning-360_Ck2JJQ0s.mjs';
export { renderers } from '../renderers.mjs';

const sectionHeaderContent$3 = {
  eyebrowText: "Achievements & Recognition",
  title: "Celebrating Excellence, Year After Year"
};
const awardsCardContent = [
  {
    id: 1,
    title: "Ivy League Status by EducationWorld India School Rankings 2025-26",
    img: "/images/awards/ivy-league-status.jpg",
    subTitle: "SAI International is among the six elite schools in India to be accorded the prestigious 'Ivy League' status, recognizing our commitment to comprehensive excellence.",
    year: "2025"
  },
  {
    id: 2,
    title: "No. 1 School in India by EducationWorld India School Rankings",
    img: "/images/awards/no-1-school-in-india-2024.jpg",
    subTitle: "Recognized as the premier institution nationwide, reflecting our dedication to outstanding academic results and holistic student development.",
    year: "2024"
  },
  {
    id: 3,
    title: "Best Education Brands in India by The Economic Times",
    img: "/images/awards/best-education-brands-2023.jpg",
    subTitle: "Honored by The Economic Times, this award highlights our school's strong brand equity and leadership in the Indian education sector.",
    year: "2023"
  },
  {
    id: 4,
    title: "No. 1 School in India by EducationWorld India School Rankings",
    img: "/images/awards/no-1-school-in-india-2023.jpg",
    subTitle: "A celebration of our journey towards nurturing young minds with vision, values, and endless possibilities, consistently recognized as the best.",
    year: "2023"
  },
  {
    id: 5,
    title: "Green School Award",
    img: "/images/awards/green-school-award.jpg",
    subTitle: "Acknowledged for our dedication to environmental stewardship, sustainability, and promoting ecological awareness within the school community.",
    year: "2023"
  },
  {
    id: 6,
    title: "The Startup Xpress Top Innovators Award by Start Up Odisha",
    img: "/images/awards/startup-xpress-top-innovators-award.jpg",
    subTitle: "Recognizing our initiative and support for fostering innovation, entrepreneurship, and a forward-thinking mindset among our students.",
    year: "2023"
  }
];

var __freeze$7 = Object.freeze;
var __defProp$7 = Object.defineProperty;
var __template$7 = (cooked, raw) => __freeze$7(__defProp$7(cooked, "raw", { value: __freeze$7(cooked.slice()) }));
var _a$7;
const $$Awards = createComponent(($$result, $$props, $$slots) => {
  const uid = "embla-awards";
  return renderTemplate(_a$7 || (_a$7 = __template$7(["", '<section class="ns-slider" id="awards" data-astro-cid-jyvjb7xa> <div class="container mx-auto flex flex-col gap-9 px-6 py-14 md:gap-16 md:px-0 md:py-20 lg:gap-20 lg:px-8 lg:py-28 2xl:px-0" data-astro-cid-jyvjb7xa> <!-- Section header --> ', " <!-- Slider root: keep viewport + controls inside this wrapper --> <div data-embla-root", ' class="space-y-7 md:space-y-9" data-astro-cid-jyvjb7xa> <!-- Viewport --> <div class="overflow-hidden" data-embla-viewport data-astro-cid-jyvjb7xa> <!-- Container --> <div class="flex items-stretch gap-4" data-embla-container style="gap: var(--gap)" data-astro-cid-jyvjb7xa> ', ' </div> </div> <!-- Controls + Dots --> <div class="relative flex items-center justify-center gap-8 md:gap-12 lg:gap-20" data-astro-cid-jyvjb7xa> <!-- <div class="absolute left-0 max-sm:top-[20px]">\n          <Button\n            text="View All Rewards"\n            rightArrow\n            variant="soft"\n            size="small"\n          />\n        </div> --> <!-- Dots --> <div class="flex items-center gap-1.5 md:gap-2" data-embla-dots data-astro-cid-jyvjb7xa></div> <!-- Prev / Next --> <div class="absolute right-0 flex gap-2 md:gap-6" data-astro-cid-jyvjb7xa> <button type="button" class="bg-n-50 border-n-200 hover:bg-n-200 hidden size-7 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-embla-prev aria-label="Previous" data-astro-cid-jyvjb7xa> <span class="inline-flex" data-astro-cid-jyvjb7xa> <!-- your left chevron svg --> <svg class="size-3.5 md:size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="none" data-astro-cid-jyvjb7xa> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7964 5.9684C11.1229 6.08513 11.3018 6.26134 11.4283 6.59064C11.508 6.79812 11.4864 7.12836 11.3787 7.34849C11.2662 7.57834 11.1138 7.71283 10.7461 7.90664C9.79415 8.40832 8.96949 8.96597 8.07436 9.71332C6.87991 10.7106 5.79432 11.8731 4.9112 13.1006L4.63927 13.4786L15.4848 13.4928C24.0302 13.5038 26.3516 13.5142 26.4303 13.5417C26.5724 13.5911 26.7876 13.7508 26.8948 13.8862C27.1716 14.236 27.1689 14.7713 26.8885 15.1269C26.7998 15.2395 26.5857 15.3923 26.4284 15.4554C26.3451 15.4888 24.7043 15.4967 15.4853 15.5086L4.64033 15.5226L4.87057 15.8446C5.88409 17.2621 7.18564 18.6147 8.58018 19.6997C9.2043 20.1853 9.95493 20.671 10.6752 21.0552C10.889 21.1693 11.1168 21.3136 11.1813 21.3758C11.353 21.5416 11.4541 21.7671 11.4704 22.0207C11.4868 22.2765 11.4462 22.432 11.3067 22.6477C11.1844 22.8371 11.0225 22.9577 10.7819 23.0388C10.4501 23.1506 10.2573 23.1093 9.68736 22.8041C8.20714 22.0117 6.90643 21.0347 5.53082 19.6819C4.05552 18.2311 2.97198 16.802 2.12251 15.1866C1.76731 14.5111 1.78623 14.3826 2.39896 13.3106C3.20897 11.8936 4.19992 10.6306 5.53115 9.31868C6.89671 7.97298 8.18353 7.00608 9.68436 6.19803C10.2552 5.8907 10.4606 5.84828 10.7964 5.9684Z" fill="#45556C" data-astro-cid-jyvjb7xa></path> </svg> </span> </button> <button type="button" class="bg-n-50 border-n-200 hover:bg-n-200 hidden size-7 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-embla-next aria-label="Next" data-astro-cid-jyvjb7xa> <span class="inline-flex rotate-180" data-astro-cid-jyvjb7xa> <!-- your right chevron svg (rotated) --> <svg class="size-3.5 md:size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="none" data-astro-cid-jyvjb7xa> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7964 5.9684C11.1229 6.08513 11.3018 6.26134 11.4283 6.59064C11.508 6.79812 11.4864 7.12836 11.3787 7.34849C11.2662 7.57834 11.1138 7.71283 10.7461 7.90664C9.79415 8.40832 8.96949 8.96597 8.07436 9.71332C6.87991 10.7106 5.79432 11.8731 4.9112 13.1006L4.63927 13.4786L15.4848 13.4928C24.0302 13.5038 26.3516 13.5142 26.4303 13.5417C26.5724 13.5911 26.7876 13.7508 26.8948 13.8862C27.1716 14.236 27.1689 14.7713 26.8885 15.1269C26.7998 15.2395 26.5857 15.3923 26.4284 15.4554C26.3451 15.4888 24.7043 15.4967 15.4853 15.5086L4.64033 15.5226L4.87057 15.8446C5.88409 17.2621 7.18564 18.6147 8.58018 19.6997C9.2043 20.1853 9.95493 20.671 10.6752 21.0552C10.889 21.1693 11.1168 21.3136 11.1813 21.3758C11.353 21.5416 11.4541 21.7671 11.4704 22.0207C11.4868 22.2765 11.4462 22.432 11.3067 22.6477C11.1844 22.8371 11.0225 22.9577 10.7819 23.0388C10.4501 23.1506 10.2573 23.1093 9.68736 22.8041C8.20714 22.0117 6.90643 21.0347 5.53082 19.6819C4.05552 18.2311 2.97198 16.802 2.12251 15.1866C1.76731 14.5111 1.78623 14.3826 2.39896 13.3106C3.20897 11.8936 4.19992 10.6306 5.53115 9.31868C6.89671 7.97298 8.18353 7.00608 9.68436 6.19803C10.2552 5.8907 10.4606 5.84828 10.7964 5.9684Z" fill="#45556C" data-astro-cid-jyvjb7xa></path> </svg> </span> </button> </div> </div> </div> </div> </section>  <!-- Component-level init: scoped to this slider only --> <script type="module">\n  import { initEmblaRoot } from "/js/embla.js";\n  window.addEventListener("DOMContentLoaded", () => {\n    const root = document.getElementById("embla-awards");\n    initEmblaRoot(root, {\n      align: "start",\n      slidesToScroll: "2",\n      loop: false,\n    });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { ...sectionHeaderContent$3, "data-astro-cid-jyvjb7xa": true }), addAttribute(uid, "id"), awardsCardContent.map((awardsCardContentItem) => renderTemplate`<div class="ns-slide" data-embla-slide data-astro-cid-jyvjb7xa> ${renderComponent($$result, "AwardsCard", $$AwardsCard, { "title": awardsCardContentItem.title, "img": awardsCardContentItem.img, "subTitle": awardsCardContentItem.subTitle, "year": awardsCardContentItem.year, "data-astro-cid-jyvjb7xa": true })} </div>`));
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/Awards.astro", void 0);

var __freeze$6 = Object.freeze;
var __defProp$6 = Object.defineProperty;
var __template$6 = (cooked, raw) => __freeze$6(__defProp$6(cooked, "raw", { value: __freeze$6(cooked.slice()) }));
var _a$6;
const $$BookATour = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$6 || (_a$6 = __template$6(["", '<section class="relative w-full xl:h-screen" data-name="book-a-tour-section" data-astro-cid-olalrtzg> <!-- YouTube Video Background --> <div class="bg-n-950 absolute inset-0 h-full w-full" data-astro-cid-olalrtzg> <img id="video-fallback" src="/images/book-a-tour-fallback.png" alt="Campus tour" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500" data-astro-cid-olalrtzg> <iframe id="tour-video"', ` class="pointer-events-none absolute inset-0 h-full w-full object-cover" allow="autoplay; encrypted-media" allowfullscreen frameborder="0" loading="lazy" title="School Tour Video" data-astro-cid-olalrtzg>
    </iframe> <!-- Dark overlay --> <div class="bg-n-950/30 absolute inset-0" data-astro-cid-olalrtzg></div> </div> <!-- Content --> <div class="relative z-10 container mx-auto flex h-full flex-col items-center justify-center gap-24 px-6 py-14 md:gap-80 md:py-24 lg:gap-90 lg:py-28 2xl:gap-96" data-astro-cid-olalrtzg> <!-- Title --> <p class="fade-in-down text-n-50 text-center text-3xl leading-[1.3] font-medium md:text-5xl lg:text-7xl" data-astro-cid-olalrtzg>
Experience Education <br data-astro-cid-olalrtzg> beyond the Classroom
</p> <!-- CTA Button --> <div class="relative w-full" data-astro-cid-olalrtzg> <a href="https://www.youtube.com/watch?v=uG206thPuaA" target="_blank" class="fade-in scale-in group text-n-950 font-secondary bg-n-50 hover:before:bg-n-900 hover:text-n-50 relative mx-auto flex w-fit items-center gap-3 overflow-hidden rounded-xl px-12 py-3.5 text-sm font-semibold transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:duration-300 before:ease-out before:content-[''] hover:before:scale-x-100 md:px-14 md:py-4 md:text-xl lg:px-32 lg:py-7 lg:text-2xl" data-astro-cid-olalrtzg> `, ` </a> </div> </div> </section> <script>
  let player;
  const toggleBtn = document.getElementById("toggle-video");
  const playIcon = document.getElementById("icon-play");
  const pauseIcon = document.getElementById("icon-pause");
  const fallback = document.getElementById("video-fallback");
  let isPlaying = true;

  function hideFallback() {
    if (!fallback) return;
    fallback.style.opacity = "0";
    // fully remove from hit-testing after fade
    fallback.style.display = "none";
  }

  // YouTube Iframe API callback
  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player("tour-video", {
      events: {
        onStateChange: (e) => {
          // ensure muted autoplay & hide fallback once ready
          if (e.data == 1) {
            try {
              e.target.mute();
              e.target.playVideo();
            } catch {}
          }
          hideFallback();
        },
        onError: hideFallback, // don't block UI if YT errors
      },
    });
  };

  // Load the Iframe API
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);

  // Play/Pause toggle
  // toggleBtn?.addEventListener("click", () => {
  //   if (!player) return;
  //   if (isPlaying) {
  //     player.pauseVideo();
  //     playIcon?.classList.remove("hidden");
  //     pauseIcon?.classList.add("hidden");
  //   } else {
  //     player.playVideo();
  //     playIcon?.classList.add("hidden");
  //     pauseIcon?.classList.remove("hidden");
  //   }
  //   isPlaying = !isPlaying;
  // });
<\/script> `])), maybeRenderHead(), addAttribute(`https://www.youtube.com/embed/26RLzXfQu4s?autoplay=1&loop=1&playlist=26RLzXfQu4s&mute=1&controls=0&disablekb=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&enablejsapi=1`, "src"), "Take a tour");
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/BookATour.astro", void 0);

const sectionHeaderContent$2 = {
  eyebrowText: "SAI News",
  subtitle: "Discover the latest updates, thought leadership, and inspiring stories from the SAI community.",
  title: "The SAI Chronicle"
};
const articleCardsContent = [
  {
    id: 1,
    title: "SAI Alumni Inspire Students with Insights on Redefining Modern Success",
    img: "/images/news/alumini-talk-thumbnail.jpg",
    thumbnailImg: "/images/news/alumini-talk-thumbnail.jpg",
    topText: "By SAI Admin",
    tags: ["Alumni", "Career Guidance", "Inspiration"],
    href: "#",
    date: "15 November, 2025"
  },
  {
    id: 2,
    title: "SAI International Girls Basketball Team Shines as Runners-Up at Sahodaya Interschool Tournament",
    img: "/images/news/girls-basketball.jpg",
    thumbnailImg: "/images/news/girls-basketball-thumbnail.jpg",
    topText: "By SAI Admin",
    tags: ["Sports", "Basketball", "Tournament"],
    href: "#",
    date: "13 November, 2025"
  },
  {
    id: 3,
    title: "Coffee Table Book on the Life and Legacy of Dr Bijaya Kumar Sahoo Unveiled at SAI International School",
    img: "/images/news/coffee-table-book.jpg",
    thumbnailImg: "/images/news/coffee-table-book-thumbnail.jpg",
    topText: "By SAI Admin",
    tags: ["Founder's Legacy", "Memorial", "Book Launch"],
    href: "#",
    date: "08 November, 2025"
  },
  {
    id: 4,
    title: "Colours of Purpose: SAIoneers Redefine Uniqueness at Advaya",
    img: "/images/news/colors-of-purpose.jpg",
    thumbnailImg: "/images/news/colors-of-purpose-thumbnail.jpg",
    topText: "By SAI Admin",
    tags: ["Art", "Creativity", "Memorial"],
    href: "#",
    date: "08 November, 2025"
  },
  {
    id: 5,
    title: "Celebrating the Spirit of Dialogue: Founder’s Cup Debate 2025 Winners Felicitated",
    img: "/images/news/founders-cup.jpg",
    thumbnailImg: "/images/news/founders-cup-thumbnail.jpg",
    topText: "By SAI Admin",
    tags: ["Debate", "Awards", "Founder's Legacy"],
    href: "#",
    date: "08 November, 2025"
  },
  {
    id: 6,
    title: "SAI International School Celebrates the 4th Founder’s Memorial Talk – “A Journey of Purpose”",
    img: "/images/news/memorial-talk.jpg",
    thumbnailImg: "/images/news/memorial-talk-thumbnail.jpg",
    topText: "By SAI Admin",
    tags: ["Memorial", "Founder's Talk", "Inspiration"],
    href: "#",
    date: "08 November, 2025"
  }
];

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(cooked.slice()) }));
var _a$5;
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const uid = "embla-news";
  return renderTemplate(_a$5 || (_a$5 = __template$5(["", '<section class="ns-slider bg-n-100" id="news" data-astro-cid-ptgb33is> <div class="container mx-auto flex flex-col gap-9 px-6 py-14 md:py-20 lg:gap-16 lg:px-8 lg:py-28 2xl:px-0" data-astro-cid-ptgb33is> <!-- Section header title --> ', " <!-- Slider root: keep viewport + controls inside this wrapper --> <div data-embla-root", ' class="space-y-7 md:space-y-9" data-astro-cid-ptgb33is> <!-- Viewport --> <div class="overflow-hidden" data-embla-viewport data-astro-cid-ptgb33is> <!-- Container --> <div class="flex gap-7" data-embla-container data-astro-cid-ptgb33is> ', ' </div> </div> <!-- Controls + Dots --> <div class="relative flex items-center justify-center gap-8 md:gap-12 lg:gap-20" data-astro-cid-ptgb33is> <!-- Dots --> <div class="flex items-center gap-1.5 md:gap-2" data-embla-dots data-astro-cid-ptgb33is></div> <div class="absolute right-0 flex gap-4 md:gap-6" data-astro-cid-ptgb33is> <!--  Prev button --> <button type="button" id="prevButton" class="bg-n-50 border-n-200 hover:bg-n-200 hidden size-9 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-embla-prev aria-label="Previous" data-astro-cid-ptgb33is> <span class="inline-flex" data-astro-cid-ptgb33is> <svg class="size-5 md:size-7" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" data-astro-cid-ptgb33is> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7964 5.9684C11.1229 6.08513 11.3018 6.26134 11.4283 6.59064C11.508 6.79812 11.4864 7.12836 11.3787 7.34849C11.2662 7.57834 11.1138 7.71283 10.7461 7.90664C9.79415 8.40832 8.96949 8.96597 8.07436 9.71332C6.87991 10.7106 5.79432 11.8731 4.9112 13.1006L4.63927 13.4786L15.4848 13.4928C24.0302 13.5038 26.3516 13.5142 26.4303 13.5417C26.5724 13.5911 26.7876 13.7508 26.8948 13.8862C27.1716 14.236 27.1689 14.7713 26.8885 15.1269C26.7998 15.2395 26.5857 15.3923 26.4284 15.4554C26.3451 15.4888 24.7043 15.4967 15.4853 15.5086L4.64033 15.5226L4.87057 15.8446C5.88409 17.2621 7.18564 18.6147 8.58018 19.6997C9.2043 20.1853 9.95493 20.671 10.6752 21.0552C10.889 21.1693 11.1168 21.3136 11.1813 21.3758C11.353 21.5416 11.4541 21.7671 11.4704 22.0207C11.4868 22.2765 11.4462 22.432 11.3067 22.6477C11.1844 22.8371 11.0225 22.9577 10.7819 23.0388C10.4501 23.1506 10.2573 23.1093 9.68736 22.8041C8.20714 22.0117 6.90643 21.0347 5.53082 19.6819C4.05552 18.2311 2.97198 16.802 2.12251 15.1866C1.76731 14.5111 1.78623 14.3826 2.39896 13.3106C3.20897 11.8936 4.19992 10.6306 5.53115 9.31868C6.89671 7.97298 8.18353 7.00608 9.68436 6.19803C10.2552 5.8907 10.4606 5.84828 10.7964 5.9684Z" fill="#45556C" data-astro-cid-ptgb33is></path> </svg> </span> </button> <!-- Next button --> <button type="button" class="bg-n-50 border-n-200 hover:bg-n-200 hidden size-9 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-embla-next aria-label="Next" data-astro-cid-ptgb33is> <span class="inline-flex rotate-180" data-astro-cid-ptgb33is> <svg class="size-5 md:size-7" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" data-astro-cid-ptgb33is> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7964 5.9684C11.1229 6.08513 11.3018 6.26134 11.4283 6.59064C11.508 6.79812 11.4864 7.12836 11.3787 7.34849C11.2662 7.57834 11.1138 7.71283 10.7461 7.90664C9.79415 8.40832 8.96949 8.96597 8.07436 9.71332C6.87991 10.7106 5.79432 11.8731 4.9112 13.1006L4.63927 13.4786L15.4848 13.4928C24.0302 13.5038 26.3516 13.5142 26.4303 13.5417C26.5724 13.5911 26.7876 13.7508 26.8948 13.8862C27.1716 14.236 27.1689 14.7713 26.8885 15.1269C26.7998 15.2395 26.5857 15.3923 26.4284 15.4554C26.3451 15.4888 24.7043 15.4967 15.4853 15.5086L4.64033 15.5226L4.87057 15.8446C5.88409 17.2621 7.18564 18.6147 8.58018 19.6997C9.2043 20.1853 9.95493 20.671 10.6752 21.0552C10.889 21.1693 11.1168 21.3136 11.1813 21.3758C11.353 21.5416 11.4541 21.7671 11.4704 22.0207C11.4868 22.2765 11.4462 22.432 11.3067 22.6477C11.1844 22.8371 11.0225 22.9577 10.7819 23.0388C10.4501 23.1506 10.2573 23.1093 9.68736 22.8041C8.20714 22.0117 6.90643 21.0347 5.53082 19.6819C4.05552 18.2311 2.97198 16.802 2.12251 15.1866C1.76731 14.5111 1.78623 14.3826 2.39896 13.3106C3.20897 11.8936 4.19992 10.6306 5.53115 9.31868C6.89671 7.97298 8.18353 7.00608 9.68436 6.19803C10.2552 5.8907 10.4606 5.84828 10.7964 5.9684Z" fill="#45556C" data-astro-cid-ptgb33is></path> </svg> </span> </button> </div> </div> </div> </div> <!-- News letter --> <div class="container mx-auto flex flex-col items-center gap-14 px-6 py-16 md:py-20 lg:flex-row lg:gap-20 lg:px-8 lg:py-28 2xl:px-0" data-astro-cid-ptgb33is> <div class="h-52 md:h-[430px] lg:h-auto lg:w-[40%] 2xl:w-[46%]" data-astro-cid-ptgb33is> <img src="/images/news-letter.png" alt="" class="h-full w-full object-cover" data-astro-cid-ptgb33is> </div> <div class="flex flex-1 flex-col gap-8 md:gap-11" data-astro-cid-ptgb33is> <div class="space-y-2 md:space-y-2.5" data-astro-cid-ptgb33is> <!-- Eyebrow text --> <p class="text-n-600 text-base font-light md:text-2xl" data-astro-cid-ptgb33is>\nNews & Updates\n</p> <div class="space-y-1 md:space-y-3" data-astro-cid-ptgb33is> <!-- Title text --> <p class="text-n-800 text-3xl leading-[120%] font-medium md:text-6xl" data-astro-cid-ptgb33is>\nDon\u2019t Miss a Moment at SAI International\n</p> <!-- Subtitle text --> <p class="text-n-500 font-secondary text-sm font-normal md:text-xl md:leading-[140%] lg:leading-[150%]" data-astro-cid-ptgb33is>\nReceive updates on events, achievements, and important announcements\n            directly in your inbox.\n</p> </div> </div> <div class="flex flex-col gap-7 md:gap-8" data-astro-cid-ptgb33is> <div class="max-w-[400px] space-y-1" data-astro-cid-ptgb33is> <p class="text-n-500 font-xs md:font-base" data-astro-cid-ptgb33is>Email:</p> <input type="text" name="emailId" placeholder="Enter your Email ID" class="border-n-500 bg-n-50 text-n-500 placeholder-n-500 h-[50px] w-full rounded-lg border px-3 text-base font-medium focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:outline-none" required data-astro-cid-ptgb33is> <p id="email-error" data-error class="hidden text-sm text-red-600" data-astro-cid-ptgb33is>\nEnter your email ID\n</p> </div> <!-- Cta button --> <a href="/" data-subscribe-newsletter-button data-astro-cid-ptgb33is> ', ` </a> </div> </div> </div> </section>  <!-- Component-level init: scoped to this slider only --> <script type="module">
  import { initEmblaRoot } from "/js/embla.js";
  import { subcribeNewsLetterRequest } from "/js/form.js";

  const subscribeNewsletterButton = document.querySelector(
    "[data-subscribe-newsletter-button]",
  );
  if (subscribeNewsletterButton) {
    subscribeNewsletterButton.addEventListener("click", async (e) => {
      e.preventDefault();
      // Hide all previous errors
      document
        .querySelectorAll("[data-error]")
        .forEach((p) => p.classList.add("hidden"));
      const email = document.querySelector('input[name="emailId"]').value;
      if (!email) {
        document.querySelector("#email-error").classList.remove("hidden");
        return;
      }
      const response = await subcribeNewsLetterRequest({ email });
      if (response.status) {
        document.querySelector("#email-error").classList.add("hidden");
      } else {
        document.querySelector("#email-error").classList.remove("hidden");
      }
    });
  }
  window.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("embla-news");
    initEmblaRoot(root, {
      align: "start",
      dragFree: false,
      slidesToScroll: "auto",
    });
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { ...sectionHeaderContent$2, "data-astro-cid-ptgb33is": true }), addAttribute(uid, "id"), articleCardsContent.map((articleCardsContentItem) => renderTemplate`<div class="ns-slide cursor-pointer" data-embla-slide data-astro-cid-ptgb33is> ${renderComponent($$result, "ArticleCard", $$ArticleCard, { "title": articleCardsContentItem.title, "img": articleCardsContentItem.img, "topText": articleCardsContentItem.topText, "date": articleCardsContentItem.date, "tags": articleCardsContentItem.tags, "data-astro-cid-ptgb33is": true })} </div>`), renderComponent($$result, "Button", $$Button, { "text": "Subscribe to Newsletter", "data-astro-cid-ptgb33is": true }));
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/News.astro", void 0);

const $$Astro$6 = createAstro();
const $$CommonHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CommonHeader;
  const { eyebrowText, title } = Astro2.props;
  const words = title ? title.trim().split(" ") : [];
  const lastWord = words.pop();
  const firstPart = words.join(" ");
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block"> ${eyebrowText && renderTemplate`<p class="text-n-600 mb-2.5 text-sm font-light md:mb-1 md:text-xl"> ${eyebrowText} </p>`} <p id="animatedText" class="animatedText text-n-800 flex flex-wrap gap-0 text-4xl/11 font-medium md:text-6xl/20 md:leading-[73px] 2xl:text-7xl/24"> ${firstPart.split(" ").map((word) => renderTemplate`<span class="inline-block opacity-0">${word}&nbsp;</span>`)} <span class="relative inline-block"> <span class="relative z-1 inline-block opacity-0">${lastWord}</span> <svg class="absolute -right-[20px] -bottom-[15px] z-0 h-[19px] w-[130px] md:right-0 md:h-[34px] md:w-[232px] lg:-bottom-[30px] xl:h-[47px] xl:w-[300px]" xmlns="http://www.w3.org/2000/svg" width="353" height="48" viewBox="0 0 353 48" fill="none"> <path d="M2.65555 37.4599C45.9937 21.9912 176.227 -18.7216 349.156 10.0028C351.335 10.3648 352.808 12.4252 352.447 14.6044C352.085 16.7836 350.024 18.2573 347.845 17.8954C176.774 -10.5203 48.0069 29.7668 5.345 44.994C3.26442 45.7367 0.975312 44.6518 0.232694 42.5712C-0.509571 40.4908 0.575204 38.2025 2.65555 37.4599Z" fill="#CC554D"></path> <path d="M78.626 39.4146C111.296 27.468 218.006 8.01027 330.683 27.5278C332.859 27.9049 334.318 29.9752 333.941 32.1519C333.564 34.3286 331.494 35.7876 329.317 35.4106C217.995 16.1276 112.705 35.4706 81.374 46.9272C79.2992 47.6859 77.0019 46.6192 76.2432 44.5444C75.4847 42.4699 76.5515 40.1733 78.626 39.4146Z" fill="#CC554D"></path> </svg> </span> </p> </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/CommonHeader.astro", void 0);

const sectionHeaderContent$1 = {
  eyebrowText: "What Our Families Say",
  title: "Stories of Trust and Transformation"
};
const testimonials = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/watch?v=CabF53vBb40&list=PLu5iW33-MlPMoNxx17ck6aqLd4NY9Ls-m&index=2",
    thumbnail: "images/testimonials/mr-sarkar.jpg",
    parentName: "Mr. Sarkar",
    designation: "Father of Vivaan Moa",
    message: "SAI International School is one of the best schools in the country."
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/watch?v=-yBDeC8lRW8&list=PLu5iW33-MlPMoNxx17ck6aqLd4NY9Ls-m&index=24",
    thumbnail: "images/testimonials/sambit-mohanty.jpg",
    parentName: "Dr. Sambit Mohanty",
    designation: "Director of Oncopatholgy, AMRI Hospital",
    message: "Our teachers are the superstars who are making the future journalists, doctors, engineers, academicians, and professionals in various fields."
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/watch?v=K3APuSmcKoM&list=PLu5iW33-MlPMoNxx17ck6aqLd4NY9Ls-m&index=53",
    thumbnail: "images/testimonials/madhumita-mohapatra.jpg",
    parentName: "Mrs. Madhumita Mohapatra",
    designation: "Mother of Mugdha Mohapatra",
    message: "I will definitely advise as a parent: think independently, do not listen to what others are saying, listen to your heart, work for it, focus on it, and you will definitely achieve it."
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/watch?v=NX95TP9VZzM&list=PLu5iW33-MlPMoNxx17ck6aqLd4NY9Ls-m&index=54",
    thumbnail: "images/testimonials/ranjana-chopra.jpg",
    parentName: "Ms. Ranjana Chopra",
    designation: "IAS, Secretary, Department of Cooperation",
    message: "I think it is a good idea to involve children in the management of such events right from the beginning. That builds up their self-confidence and gives them a perspective on how events are managed, helping them identify what they would like to do with their lives."
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/watch?v=oqqsGACymRQ&list=PLu5iW33-MlPMoNxx17ck6aqLd4NY9Ls-m&index=55",
    thumbnail: "images/testimonials/rajendra-sharma.jpg",
    parentName: "Dr. Rajendra Prasad Sharma",
    designation: "IPS, DG Police",
    message: "The students should achieve an all-round development of their personality."
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/watch?v=khljKv9Ec1Q&list=PLu5iW33-MlPMoNxx17ck6aqLd4NY9Ls-m&index=59",
    thumbnail: "images/testimonials/sidhartha-kanungo.jpg",
    parentName: "Shri Sidhartha Kanungo",
    designation: "Father of Parthabi Kanungo",
    message: "I am extremely satisfied with the performance of my daughter and the atmosphere of the school. Youngsters should work hard and, if any doubt arises, they should ask their parents as well as teachers. They should not hide anything; that is my suggestion."
  },
  {
    id: 7,
    videoUrl: "https://www.youtube.com/watch?v=ZBIAutp0uY0&list=PLu5iW33-MlPMoNxx17ck6aqLd4NY9Ls-m&index=1",
    thumbnail: "images/testimonials/mrs-gupta.jpg",
    parentName: "Mrs. Gupta",
    designation: "Mother of Aarav & Arnav Gupta ",
    message: "We can see many positive changes, like improved discipline and academics. The younger one is doing very well, and the elder one has significantly improved his focus and time management."
  },
  {
    id: 8,
    videoUrl: "https://www.youtube.com/watch?v=dVsZwBlhsfk&list=PLu5iW33-MlPMoNxx17ck6aqLd4NY9Ls-m&index=5",
    thumbnail: "images/testimonials/mr-agrawal.jpg",
    parentName: "Mr. Agrawal",
    designation: "Father of Shreya Agrawal",
    message: "The benefits of staying in boarding are that children learn how to manage themselves from all points of view. I've seen a lot of development and 360-degree development in her here."
  }
];

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", '<section data-astro-cid-3vd7ozqe> <div class="container mx-auto flex flex-col gap-12 px-6 py-16 md:gap-20 md:px-4 md:py-24 lg:px-8 lg:py-32 2xl:px-0" data-astro-cid-3vd7ozqe> <!-- Header with Lines --> ', ' <div class="flex flex-col gap-10 overflow-hidden" id="testimonial-slider" data-astro-cid-3vd7ozqe> <!-- Embla slider --> <div class="" id="data-embla-viewport" data-embla-viewport data-astro-cid-3vd7ozqe> <div class="flex" data-embla-container data-astro-cid-3vd7ozqe> ', ' </div> </div> <!-- Buttons wrapper --> <div class="flex items-center justify-center gap-8 md:gap-12 lg:gap-20" data-astro-cid-3vd7ozqe> <!--  Prev button --> <button type="button" id="prevButton" class="bg-n-100 border-n-200 hover:bg-n-200 hidden size-11 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-prev aria-label="Previous" data-embla-prev data-astro-cid-3vd7ozqe> <span class="inline-flex" data-astro-cid-3vd7ozqe> <svg class="size-5 md:size-7" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" data-astro-cid-3vd7ozqe> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7964 5.9684C11.1229 6.08513 11.3018 6.26134 11.4283 6.59064C11.508 6.79812 11.4864 7.12836 11.3787 7.34849C11.2662 7.57834 11.1138 7.71283 10.7461 7.90664C9.79415 8.40832 8.96949 8.96597 8.07436 9.71332C6.87991 10.7106 5.79432 11.8731 4.9112 13.1006L4.63927 13.4786L15.4848 13.4928C24.0302 13.5038 26.3516 13.5142 26.4303 13.5417C26.5724 13.5911 26.7876 13.7508 26.8948 13.8862C27.1716 14.236 27.1689 14.7713 26.8885 15.1269C26.7998 15.2395 26.5857 15.3923 26.4284 15.4554C26.3451 15.4888 24.7043 15.4967 15.4853 15.5086L4.64033 15.5226L4.87057 15.8446C5.88409 17.2621 7.18564 18.6147 8.58018 19.6997C9.2043 20.1853 9.95493 20.671 10.6752 21.0552C10.889 21.1693 11.1168 21.3136 11.1813 21.3758C11.353 21.5416 11.4541 21.7671 11.4704 22.0207C11.4868 22.2765 11.4462 22.432 11.3067 22.6477C11.1844 22.8371 11.0225 22.9577 10.7819 23.0388C10.4501 23.1506 10.2573 23.1093 9.68736 22.8041C8.20714 22.0117 6.90643 21.0347 5.53082 19.6819C4.05552 18.2311 2.97198 16.802 2.12251 15.1866C1.76731 14.5111 1.78623 14.3826 2.39896 13.3106C3.20897 11.8936 4.19992 10.6306 5.53115 9.31868C6.89671 7.97298 8.18353 7.00608 9.68436 6.19803C10.2552 5.8907 10.4606 5.84828 10.7964 5.9684Z" fill="#45556C" data-astro-cid-3vd7ozqe></path> </svg> </span> </button> <!-- Dots --> <div class="flex items-center gap-1.5 md:gap-2" data-embla-dots data-astro-cid-3vd7ozqe></div> <!-- Next button --> <button type="button" class="bg-n-100 border-n-200 hover:bg-n-200 hidden size-11 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" id="nextButton" data-embla-next data-astro-cid-3vd7ozqe> <span class="inline-flex rotate-180" data-astro-cid-3vd7ozqe> <svg class="size-5 md:size-7" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" data-astro-cid-3vd7ozqe> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7964 5.9684C11.1229 6.08513 11.3018 6.26134 11.4283 6.59064C11.508 6.79812 11.4864 7.12836 11.3787 7.34849C11.2662 7.57834 11.1138 7.71283 10.7461 7.90664C9.79415 8.40832 8.96949 8.96597 8.07436 9.71332C6.87991 10.7106 5.79432 11.8731 4.9112 13.1006L4.63927 13.4786L15.4848 13.4928C24.0302 13.5038 26.3516 13.5142 26.4303 13.5417C26.5724 13.5911 26.7876 13.7508 26.8948 13.8862C27.1716 14.236 27.1689 14.7713 26.8885 15.1269C26.7998 15.2395 26.5857 15.3923 26.4284 15.4554C26.3451 15.4888 24.7043 15.4967 15.4853 15.5086L4.64033 15.5226L4.87057 15.8446C5.88409 17.2621 7.18564 18.6147 8.58018 19.6997C9.2043 20.1853 9.95493 20.671 10.6752 21.0552C10.889 21.1693 11.1168 21.3136 11.1813 21.3758C11.353 21.5416 11.4541 21.7671 11.4704 22.0207C11.4868 22.2765 11.4462 22.432 11.3067 22.6477C11.1844 22.8371 11.0225 22.9577 10.7819 23.0388C10.4501 23.1506 10.2573 23.1093 9.68736 22.8041C8.20714 22.0117 6.90643 21.0347 5.53082 19.6819C4.05552 18.2311 2.97198 16.802 2.12251 15.1866C1.76731 14.5111 1.78623 14.3826 2.39896 13.3106C3.20897 11.8936 4.19992 10.6306 5.53115 9.31868C6.89671 7.97298 8.18353 7.00608 9.68436 6.19803C10.2552 5.8907 10.4606 5.84828 10.7964 5.9684Z" fill="#45556C" data-astro-cid-3vd7ozqe></path> </svg> </span> </button> </div> </div> <!-- Video Modal --> <div id="testimonial-modal" class="testimonial-modal" aria-hidden="true" role="dialog" aria-modal="true" data-astro-cid-3vd7ozqe> <div class="testimonial-modal__backdrop" data-modal-close data-astro-cid-3vd7ozqe></div> <div class="testimonial-modal__dialog" role="document" data-astro-cid-3vd7ozqe> <button type="button" class="testimonial-modal__close cursor-pointer" aria-label="Close video" data-modal-close data-astro-cid-3vd7ozqe>\n\u2715\n</button> <div class="testimonial-modal__frame" data-astro-cid-3vd7ozqe> <iframe id="testimonial-iframe" src="" title="Testimonial video" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-3vd7ozqe></iframe> </div> </div> </div> </div> </section> <!-- Component-level init: scoped to this slider only --> <script type="module">\n  import { initEmblaRoot } from "/js/embla.js";\n\n  window.addEventListener("DOMContentLoaded", () => {\n    const root = document.getElementById("testimonial-slider");\n\n    /** Init the slider */\n    initEmblaRoot(root);\n\n    const modal = document.getElementById("testimonial-modal");\n    const iframe = document.getElementById("testimonial-iframe");\n    const closeTargets = document.querySelectorAll("[data-modal-close]");\n    const triggers = document.querySelectorAll("[data-video-trigger]");\n\n    const html = document.documentElement;\n\n    /** Get the embed URL for the video */\n    const getEmbedUrl = (url) => {\n      try {\n        // Parse the URL\n        const parsed = new URL(url);\n\n        // youtube.com/watch?v=...\n        if (parsed.hostname.includes("youtube")) {\n          const videoId = parsed.searchParams.get("v");\n          const list = parsed.searchParams.get("list");\n          let finalUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;\n          if (list) finalUrl += `&list=${list}`;\n          return finalUrl;\n        }\n\n        return url;\n      } catch (err) {\n        return url;\n      }\n    };\n\n    /** Open the modal and set the video */\n    const openModal = (url) => {\n      if (!modal || !iframe) return;\n      iframe.src = getEmbedUrl(url);\n      modal.classList.add("open");\n      modal.setAttribute("aria-hidden", "false");\n      html.classList.add("overflow-hidden");\n      modal.setAttribute("tabindex", "-1");\n      modal.focus();\n    };\n\n    /** Close the modal and reset the video */\n    const closeModal = () => {\n      if (!modal || !iframe) return;\n      iframe.removeAttribute("src");\n      modal.classList.remove("open");\n      modal.setAttribute("aria-hidden", "true");\n      html.classList.remove("overflow-hidden");\n    };\n\n    /** Close the modal and reset the video */\n    triggers.forEach((trigger) => {\n      trigger.addEventListener("click", () => {\n        const url = trigger.getAttribute("data-video-url") || "";\n        openModal(url);\n      });\n    });\n\n    /** Close the modal when the close button is clicked */\n    closeTargets.forEach((closeTarget) => {\n      closeTarget.addEventListener("click", closeModal);\n    });\n\n    /** Close the modal when the escape key is pressed */\n    document.addEventListener("keydown", (event) => {\n      if (event.key === "Escape") {\n        closeModal();\n      }\n    });\n  });\n<\/script> '], ["", '<section data-astro-cid-3vd7ozqe> <div class="container mx-auto flex flex-col gap-12 px-6 py-16 md:gap-20 md:px-4 md:py-24 lg:px-8 lg:py-32 2xl:px-0" data-astro-cid-3vd7ozqe> <!-- Header with Lines --> ', ' <div class="flex flex-col gap-10 overflow-hidden" id="testimonial-slider" data-astro-cid-3vd7ozqe> <!-- Embla slider --> <div class="" id="data-embla-viewport" data-embla-viewport data-astro-cid-3vd7ozqe> <div class="flex" data-embla-container data-astro-cid-3vd7ozqe> ', ' </div> </div> <!-- Buttons wrapper --> <div class="flex items-center justify-center gap-8 md:gap-12 lg:gap-20" data-astro-cid-3vd7ozqe> <!--  Prev button --> <button type="button" id="prevButton" class="bg-n-100 border-n-200 hover:bg-n-200 hidden size-11 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-prev aria-label="Previous" data-embla-prev data-astro-cid-3vd7ozqe> <span class="inline-flex" data-astro-cid-3vd7ozqe> <svg class="size-5 md:size-7" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" data-astro-cid-3vd7ozqe> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7964 5.9684C11.1229 6.08513 11.3018 6.26134 11.4283 6.59064C11.508 6.79812 11.4864 7.12836 11.3787 7.34849C11.2662 7.57834 11.1138 7.71283 10.7461 7.90664C9.79415 8.40832 8.96949 8.96597 8.07436 9.71332C6.87991 10.7106 5.79432 11.8731 4.9112 13.1006L4.63927 13.4786L15.4848 13.4928C24.0302 13.5038 26.3516 13.5142 26.4303 13.5417C26.5724 13.5911 26.7876 13.7508 26.8948 13.8862C27.1716 14.236 27.1689 14.7713 26.8885 15.1269C26.7998 15.2395 26.5857 15.3923 26.4284 15.4554C26.3451 15.4888 24.7043 15.4967 15.4853 15.5086L4.64033 15.5226L4.87057 15.8446C5.88409 17.2621 7.18564 18.6147 8.58018 19.6997C9.2043 20.1853 9.95493 20.671 10.6752 21.0552C10.889 21.1693 11.1168 21.3136 11.1813 21.3758C11.353 21.5416 11.4541 21.7671 11.4704 22.0207C11.4868 22.2765 11.4462 22.432 11.3067 22.6477C11.1844 22.8371 11.0225 22.9577 10.7819 23.0388C10.4501 23.1506 10.2573 23.1093 9.68736 22.8041C8.20714 22.0117 6.90643 21.0347 5.53082 19.6819C4.05552 18.2311 2.97198 16.802 2.12251 15.1866C1.76731 14.5111 1.78623 14.3826 2.39896 13.3106C3.20897 11.8936 4.19992 10.6306 5.53115 9.31868C6.89671 7.97298 8.18353 7.00608 9.68436 6.19803C10.2552 5.8907 10.4606 5.84828 10.7964 5.9684Z" fill="#45556C" data-astro-cid-3vd7ozqe></path> </svg> </span> </button> <!-- Dots --> <div class="flex items-center gap-1.5 md:gap-2" data-embla-dots data-astro-cid-3vd7ozqe></div> <!-- Next button --> <button type="button" class="bg-n-100 border-n-200 hover:bg-n-200 hidden size-11 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" id="nextButton" data-embla-next data-astro-cid-3vd7ozqe> <span class="inline-flex rotate-180" data-astro-cid-3vd7ozqe> <svg class="size-5 md:size-7" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" data-astro-cid-3vd7ozqe> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7964 5.9684C11.1229 6.08513 11.3018 6.26134 11.4283 6.59064C11.508 6.79812 11.4864 7.12836 11.3787 7.34849C11.2662 7.57834 11.1138 7.71283 10.7461 7.90664C9.79415 8.40832 8.96949 8.96597 8.07436 9.71332C6.87991 10.7106 5.79432 11.8731 4.9112 13.1006L4.63927 13.4786L15.4848 13.4928C24.0302 13.5038 26.3516 13.5142 26.4303 13.5417C26.5724 13.5911 26.7876 13.7508 26.8948 13.8862C27.1716 14.236 27.1689 14.7713 26.8885 15.1269C26.7998 15.2395 26.5857 15.3923 26.4284 15.4554C26.3451 15.4888 24.7043 15.4967 15.4853 15.5086L4.64033 15.5226L4.87057 15.8446C5.88409 17.2621 7.18564 18.6147 8.58018 19.6997C9.2043 20.1853 9.95493 20.671 10.6752 21.0552C10.889 21.1693 11.1168 21.3136 11.1813 21.3758C11.353 21.5416 11.4541 21.7671 11.4704 22.0207C11.4868 22.2765 11.4462 22.432 11.3067 22.6477C11.1844 22.8371 11.0225 22.9577 10.7819 23.0388C10.4501 23.1506 10.2573 23.1093 9.68736 22.8041C8.20714 22.0117 6.90643 21.0347 5.53082 19.6819C4.05552 18.2311 2.97198 16.802 2.12251 15.1866C1.76731 14.5111 1.78623 14.3826 2.39896 13.3106C3.20897 11.8936 4.19992 10.6306 5.53115 9.31868C6.89671 7.97298 8.18353 7.00608 9.68436 6.19803C10.2552 5.8907 10.4606 5.84828 10.7964 5.9684Z" fill="#45556C" data-astro-cid-3vd7ozqe></path> </svg> </span> </button> </div> </div> <!-- Video Modal --> <div id="testimonial-modal" class="testimonial-modal" aria-hidden="true" role="dialog" aria-modal="true" data-astro-cid-3vd7ozqe> <div class="testimonial-modal__backdrop" data-modal-close data-astro-cid-3vd7ozqe></div> <div class="testimonial-modal__dialog" role="document" data-astro-cid-3vd7ozqe> <button type="button" class="testimonial-modal__close cursor-pointer" aria-label="Close video" data-modal-close data-astro-cid-3vd7ozqe>\n\u2715\n</button> <div class="testimonial-modal__frame" data-astro-cid-3vd7ozqe> <iframe id="testimonial-iframe" src="" title="Testimonial video" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-3vd7ozqe></iframe> </div> </div> </div> </div> </section> <!-- Component-level init: scoped to this slider only --> <script type="module">\n  import { initEmblaRoot } from "/js/embla.js";\n\n  window.addEventListener("DOMContentLoaded", () => {\n    const root = document.getElementById("testimonial-slider");\n\n    /** Init the slider */\n    initEmblaRoot(root);\n\n    const modal = document.getElementById("testimonial-modal");\n    const iframe = document.getElementById("testimonial-iframe");\n    const closeTargets = document.querySelectorAll("[data-modal-close]");\n    const triggers = document.querySelectorAll("[data-video-trigger]");\n\n    const html = document.documentElement;\n\n    /** Get the embed URL for the video */\n    const getEmbedUrl = (url) => {\n      try {\n        // Parse the URL\n        const parsed = new URL(url);\n\n        // youtube.com/watch?v=...\n        if (parsed.hostname.includes("youtube")) {\n          const videoId = parsed.searchParams.get("v");\n          const list = parsed.searchParams.get("list");\n          let finalUrl = \\`https://www.youtube.com/embed/\\${videoId}?autoplay=1\\`;\n          if (list) finalUrl += \\`&list=\\${list}\\`;\n          return finalUrl;\n        }\n\n        return url;\n      } catch (err) {\n        return url;\n      }\n    };\n\n    /** Open the modal and set the video */\n    const openModal = (url) => {\n      if (!modal || !iframe) return;\n      iframe.src = getEmbedUrl(url);\n      modal.classList.add("open");\n      modal.setAttribute("aria-hidden", "false");\n      html.classList.add("overflow-hidden");\n      modal.setAttribute("tabindex", "-1");\n      modal.focus();\n    };\n\n    /** Close the modal and reset the video */\n    const closeModal = () => {\n      if (!modal || !iframe) return;\n      iframe.removeAttribute("src");\n      modal.classList.remove("open");\n      modal.setAttribute("aria-hidden", "true");\n      html.classList.remove("overflow-hidden");\n    };\n\n    /** Close the modal and reset the video */\n    triggers.forEach((trigger) => {\n      trigger.addEventListener("click", () => {\n        const url = trigger.getAttribute("data-video-url") || "";\n        openModal(url);\n      });\n    });\n\n    /** Close the modal when the close button is clicked */\n    closeTargets.forEach((closeTarget) => {\n      closeTarget.addEventListener("click", closeModal);\n    });\n\n    /** Close the modal when the escape key is pressed */\n    document.addEventListener("keydown", (event) => {\n      if (event.key === "Escape") {\n        closeModal();\n      }\n    });\n  });\n<\/script> '])), maybeRenderHead(), renderComponent($$result, "CommonHeader", $$CommonHeader, { ...sectionHeaderContent$1, "data-astro-cid-3vd7ozqe": true }), testimonials.map((testimonialsItem) => renderTemplate`<div class="w-full shrink-0" data-embla-slide data-astro-cid-3vd7ozqe> <div class="border-n-200 flex w-full flex-col items-center justify-between overflow-hidden rounded-xl border-2 xl:flex-row" data-astro-cid-3vd7ozqe>  <div class="relative w-full xl:w-[40%]" data-astro-cid-3vd7ozqe> <img${addAttribute(testimonialsItem.thumbnail, "src")}${addAttribute(testimonialsItem.parentName, "alt")} class="h-[350px] w-full object-cover md:h-[370px] xl:h-[450px]" data-astro-cid-3vd7ozqe>  <button type="button" class="text-n-50 absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/40 backdrop-blur transition hover:scale-105 md:size-16" data-video-trigger${addAttribute(testimonialsItem.videoUrl, "data-video-url")}${addAttribute(`Play testimonial from ${testimonialsItem.parentName}`, "aria-label")} data-astro-cid-3vd7ozqe> <svg class="mx-auto size-11 md:size-9/12" xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none" data-astro-cid-3vd7ozqe> <path fill-rule="evenodd" clip-rule="evenodd" d="M35.1118 3.05433C28.3624 3.45228 22.6224 5.01798 17.9999 7.72195C13.6265 10.2802 10.28 13.6267 7.72177 18.0001C3.95864 24.4332 2.35679 33.2522 3.20354 42.8745C3.69607 48.4706 5.31164 53.8788 7.72177 57.999C10.2764 62.3663 13.6312 65.7217 17.9958 68.2747C24.4321 72.0396 33.3361 73.6544 42.9118 72.7932C48.5361 72.2874 53.8769 70.6883 58.0029 68.2747C63.8309 64.8656 67.9983 59.8805 70.459 53.3745C72.874 46.9894 73.6336 38.7355 72.5288 30.8853C71.044 20.3347 66.109 12.466 58.0029 7.72435C52.6484 4.5922 45.5866 2.93815 37.7743 2.98638C36.8462 2.99215 35.6481 3.02268 35.1118 3.05433ZM35.3743 8.41855C35.1887 8.4337 34.5643 8.48343 33.9868 8.52903C28.2797 8.9797 23.0551 10.6729 19.1743 13.3295C13.963 16.897 10.5694 22.4067 9.13019 29.637C8.58044 32.3991 8.41184 34.3613 8.41184 37.9995C8.41184 39.8649 8.44799 41.337 8.50949 41.9745C8.98297 46.882 9.96269 50.5644 11.7332 54.0911C14.5257 59.6533 19.1098 63.5725 25.3175 65.7051C27.9829 66.6207 30.6175 67.1607 34.0243 67.4894C35.3848 67.6206 40.6138 67.6206 41.9743 67.4894C48.9218 66.8191 54.0689 64.9529 58.2796 61.5777C63.1378 57.6833 66.2303 51.6554 67.2401 44.112C67.5421 41.8563 67.585 41.0964 67.585 37.9995C67.585 36.0652 67.5497 34.6079 67.4878 33.987C66.9955 29.0439 66.0288 25.4204 64.2655 21.908C61.473 16.3458 56.8889 12.4266 50.6812 10.2939C48.099 9.40683 45.6629 8.89353 42.4243 8.55408C41.4062 8.44743 36.2384 8.34805 35.3743 8.41855ZM33.0493 22.942C31.755 23.0631 30.4301 23.5831 29.3368 24.3991C27.9088 25.4651 26.8881 27.0889 26.516 28.887C26.3845 29.5221 26.3763 30.0612 26.3763 37.9995C26.3763 45.9379 26.3845 46.4769 26.516 47.112C26.787 48.4215 27.4572 49.7355 28.3687 50.7446C29.1054 51.5601 30.3397 52.3459 31.4907 52.7323C32.8768 53.1976 34.567 53.2092 35.9743 52.7629C37.1011 52.4056 41.5063 49.9447 44.7118 47.8819C49.7676 44.6283 52.375 42.0841 53.2369 39.5634C53.4521 38.934 53.4767 38.7735 53.4767 37.9995C53.4767 37.2256 53.4521 37.065 53.2369 36.4357C52.4833 34.2317 50.4383 32.0612 46.5575 29.3464C43.4965 27.2052 37.5908 23.7876 36.0361 23.2578C35.1712 22.9631 34.0692 22.8466 33.0493 22.942ZM33.1767 28.3578C32.5153 28.5937 31.9215 29.2205 31.7944 29.8166C31.7628 29.9653 31.7368 33.6983 31.7368 38.112C31.7368 46.1336 31.7369 46.1372 31.8961 46.4812C32.3118 47.3802 33.312 47.9044 34.1751 47.6758C34.7875 47.5137 38.6586 45.3498 41.1841 43.758C42.6768 42.8171 44.3502 41.6505 45.4243 40.8017C46.2381 40.1587 47.7442 38.6472 47.9361 38.2808C48.0826 38.0011 48.0826 37.998 47.9351 37.7229C47.7379 37.3548 46.7439 36.311 45.9511 35.6394C43.8928 33.8957 40.7591 31.8555 36.5503 29.5191C34.2353 28.234 33.8732 28.1094 33.1767 28.3578Z" fill="currentColor" data-astro-cid-3vd7ozqe></path> </svg> </button> </div> <div class="font-secondary relative flex flex-col gap-5 px-8 py-8 md:gap-8 md:px-16 md:py-12 xl:w-[58%] xl:p-10 2xl:pr-24" data-astro-cid-3vd7ozqe>  <div class="absolute -top-[16%] -right-[4%] -z-1 cursor-pointer text-orange-100 md:-top-[6%] lg:-top-[18%] lg:-right-[12%]" data-astro-cid-3vd7ozqe> <svg class="w-40 md:w-[268px] lg:w-[370px]" xmlns="http://www.w3.org/2000/svg" width="370" height="276" viewBox="0 0 370 276" fill="none" data-astro-cid-3vd7ozqe> <path d="M195.253 168.98C195.253 139.69 199.763 114.531 208.782 93.502C217.801 71.7225 229.451 54.0735 243.732 40.5551C258.012 26.2857 274.171 16.147 292.21 10.1388C311 3.37959 329.414 0 347.452 0V39.4286C327.911 39.4286 309.496 46.1878 292.21 59.7062C275.674 72.4735 265.904 90.1225 262.897 112.653C265.152 111.902 267.783 111.151 270.789 110.4C273.044 109.649 275.674 108.898 278.681 108.147C282.439 107.396 286.573 107.02 291.082 107.02C313.63 107.02 332.42 115.657 347.452 132.931C362.484 149.453 370 168.98 370 191.51C370 214.041 362.108 233.943 346.325 251.216C331.293 267.739 311 276 285.445 276C256.884 276 234.712 265.486 218.929 244.457C203.145 222.678 195.253 197.518 195.253 168.98ZM0 168.98C0 139.69 4.50959 114.531 13.5288 93.502C22.5479 71.7225 34.1977 54.0735 48.4781 40.5551C62.7585 26.2857 78.9178 16.147 96.9562 10.1388C115.746 3.37959 134.16 0 152.199 0V39.4286C132.657 39.4286 114.243 46.1878 96.9562 59.7062C80.421 72.4735 70.6502 90.1225 67.6439 112.653C69.8986 111.902 72.5292 111.151 75.5356 110.4C77.7904 109.649 80.421 108.898 83.4274 108.147C87.1854 107.396 91.3192 107.02 95.8288 107.02C118.377 107.02 137.167 115.657 152.199 132.931C167.231 149.453 174.747 168.98 174.747 191.51C174.747 214.041 166.855 233.943 151.071 251.216C136.039 267.739 115.746 276 90.1918 276C61.6311 276 39.4589 265.486 23.6753 244.457C7.89178 222.678 0 197.518 0 168.98Z" fill="currentColor" data-astro-cid-3vd7ozqe></path> </svg> </div> <p class="text-n-600 text-sm leading-normal font-normal md:text-xl lg:text-2xl" data-astro-cid-3vd7ozqe>
“${testimonialsItem.message}”
</p>  <div data-astro-cid-3vd7ozqe> <p class="text-2xl leading-normal font-semibold text-orange-500 md:text-3xl lg:text-4xl" data-astro-cid-3vd7ozqe> ${testimonialsItem.parentName} </p> <p class="text-n-500 text-sm leading-normal font-normal md:text-lg lg:text-xl" data-astro-cid-3vd7ozqe> ${testimonialsItem.designation} </p> </div> </div> </div> </div>`));
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/Testimonial.astro", void 0);

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  const partnersImages = [
    "/images/partners/ausa.png",
    "/images/partners/leader.png",
    "/images/partners/sat.png",
    "/images/partners/Univariety.png",
    "/images/partners/icai.png",
    "/images/partners/IDS.png",
    "/images/partners/microsoft.png",
    "/images/partners/roundsq.png",
    "/images/partners/showcase-sis.png",
    "/images/partners/google-1.png",
    "/images/partners/cambrdige.png",
    "/images/partners/cbse-sis.png",
    "/images/partners/adobe.png",
    "/images/partners/bridgeu-sis.png",
    "/images/partners/kindness.png"
  ];
  return renderTemplate`${maybeRenderHead()}<section> <div class="container mx-auto flex flex-col gap-12 px-8 py-16 md:gap-20 md:px-4 md:py-32 lg:px-8 lg:py-40 2xl:px-0"> <!-- Header with lines --> ${renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { "eyebrowText": "Our Accreditations and Learning Partners", "title": "Trusted by the World\u2019s Leading Institutions" })} <!-- Partners card wrapper --> <div class="flex flex-wrap justify-center gap-7 md:gap-5 lg:gap-x-5 lg:gap-y-7"> ${partnersImages.map((partner) => (
    // Partner image
    renderTemplate`<div class="w-28 md:w-32 lg:w-[170px]"> <img${addAttribute(partner, "src")} alt="" class="w-full object-contain"> </div>`
  ))} </div> </div> </section>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/Partners.astro", void 0);

const $$Astro$5 = createAstro();
const $$CampusCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CampusCard;
  const {
    img,
    title = "",
    subTitle = "",
    gradeRange = "",
    href = "#"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-n-50 h-full w-full overflow-hidden rounded-2xl"> <!-- Campus image --> <img${addAttribute(img, "src")} alt="" class="h-[230px] w-full object-cover md:h-[260px] lg:h-[366px]"> <div class="flex flex-col gap-2.5 px-5 py-4 md:gap-5 md:px-9 md:py-6 lg:gap-6 lg:px-10 lg:py-7"> <!-- Campus title --> <p class="text-2xl leading-none font-semibold text-orange-500 md:text-4xl lg:text-5xl"> ${title} </p> <div class="flex flex-col gap-4 md:gap-5 2xl:flex-row 2xl:items-end 2xl:justify-between"> <div class="font-secondary space-y-0.5"> <!-- Campus description --> <p class="text-n-600 text-sm font-semibold md:text-xl lg:text-2xl"> ${subTitle} </p> <!-- Additional info --> <div class="text-n-500 flex items-center gap-1.5"> <span> <svg class="size-[15px] md:size-4 lg:size-5" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57974 1.18363C3.94028 1.32847 2.87092 2.36421 2.68088 3.99135C2.6538 4.22315 2.6538 4.83955 2.68088 5.07135C2.7663 5.80285 3.02614 6.41679 3.45176 6.89275L3.57818 7.03413L3.48396 7.07977C3.14312 7.24489 2.72186 7.55595 2.38728 7.88961C1.9108 8.36477 1.66438 8.75323 1.36488 9.50135C1.05488 10.2757 0.745479 11.3584 0.675199 11.9148C0.635959 12.2255 0.693659 12.6016 0.825019 12.8914C1.1078 13.5151 1.68172 13.954 2.36404 14.0682L2.50974 14.0926L2.55444 14.452C2.73276 15.8854 2.98894 17.389 3.12514 17.8014C3.26714 18.2313 3.50536 18.61 3.84852 18.9515C4.4134 19.5136 5.14784 19.825 5.91974 19.8297C6.1753 19.8313 6.19616 19.8284 6.30974 19.7754C6.46716 19.7019 6.60292 19.5664 6.67212 19.4136C6.74972 19.2422 6.75166 19.0031 6.67676 18.8404C6.61446 18.7051 6.52782 18.6037 6.40492 18.5223C6.28552 18.4432 6.21604 18.4255 5.93552 18.4027C5.65034 18.3794 5.49584 18.3409 5.28818 18.2411C4.87068 18.0406 4.57794 17.6937 4.4614 17.2614C4.33494 16.7922 4.07216 15.1113 3.9299 13.8614C3.84402 13.1067 3.82794 13.0485 3.65816 12.8782C3.48096 12.7004 3.34262 12.6614 2.8895 12.6614C2.62436 12.6614 2.56538 12.6554 2.46788 12.6189C2.25446 12.5391 2.09974 12.3364 2.09974 12.1366C2.09974 12.0182 2.20692 11.5324 2.3194 11.1409C2.46578 10.6315 2.69948 9.99147 2.87134 9.62933C3.19034 8.95711 3.87854 8.38761 4.70552 8.11155C5.0889 7.98355 5.4085 7.92795 5.89146 7.90521C6.19958 7.89071 6.21878 7.88731 6.34566 7.82485C6.59626 7.70149 6.7433 7.46747 6.74388 7.19109C6.74426 7.01441 6.71534 6.91765 6.62134 6.78109C6.4744 6.56763 6.24312 6.46189 5.92054 6.46073C5.3077 6.45851 4.78346 6.25291 4.48754 5.89873C4.21656 5.57437 4.0925 5.14497 4.0925 4.53135C4.0925 3.86419 4.2441 3.40247 4.56862 3.08125C4.7152 2.93615 4.80078 2.87675 4.98742 2.79051C5.56456 2.52387 6.56714 2.53787 7.11522 2.82027C7.27836 2.90431 7.334 2.94509 7.47084 3.08091C7.77226 3.38005 7.91852 3.78829 7.95564 4.43395C7.97066 4.69521 7.97676 4.72645 8.03654 4.84789C8.10838 4.99379 8.2198 5.10427 8.37194 5.18041C8.44624 5.21759 8.5106 5.23125 8.63974 5.23727C8.87658 5.24831 9.00596 5.19863 9.1715 5.03311C9.34642 4.85817 9.38306 4.75099 9.38106 4.42023C9.37342 3.15533 8.83006 2.14033 7.86974 1.59699C7.26702 1.25599 6.44346 1.10733 5.57974 1.18363ZM13.5397 1.18363C12.6892 1.25877 12.011 1.55959 11.4873 2.09403C10.9267 2.66619 10.6241 3.47625 10.6184 4.42023C10.6164 4.75099 10.6531 4.85817 10.828 5.03311C10.9935 5.19863 11.1229 5.24831 11.3597 5.23727C11.5656 5.22769 11.6841 5.17653 11.826 5.03607C11.9818 4.88179 12.0246 4.76293 12.0438 4.43135C12.0528 4.27735 12.0741 4.07485 12.0913 3.98135C12.2618 3.05249 12.8779 2.60135 13.9759 2.60135C14.6928 2.60135 15.185 2.78323 15.5168 3.17083C15.6306 3.30377 15.7867 3.62971 15.8379 3.84135C15.9248 4.20085 15.9369 4.67969 15.8688 5.07225C15.7754 5.61147 15.507 6.01637 15.1024 6.22837C14.8244 6.37407 14.5661 6.43479 14.116 6.46035C13.8445 6.47577 13.7846 6.48535 13.6905 6.52843C13.1302 6.78493 13.1207 7.56361 13.6746 7.83459C13.7703 7.88143 13.8183 7.88963 14.0804 7.90395C14.8491 7.94589 15.3914 8.16727 15.8867 8.64135C16.3782 9.11183 16.8039 9.78277 17.0122 10.4156C17.1673 10.8867 17.3913 11.8519 17.6078 12.9814C17.7447 13.6958 17.8997 14.6283 17.8997 14.7372C17.8997 14.9484 17.7758 15.1478 17.5909 15.2339C17.4942 15.2789 17.47 15.281 17.0397 15.2813C16.4144 15.2817 16.292 15.3075 16.0958 15.4802C15.9731 15.5882 15.9243 15.6984 15.7299 16.3066C15.3943 17.3568 15.2041 17.7564 14.8932 18.0642C14.6852 18.2702 14.3627 18.4014 14.0643 18.4014C13.808 18.4014 13.5994 18.4821 13.4572 18.6365C13.0859 19.0393 13.2745 19.6778 13.8052 19.8145C14.0319 19.8729 14.5624 19.8153 14.9278 19.6926C15.6246 19.4587 16.1953 18.9093 16.5897 18.0927C16.7441 17.7728 16.8281 17.5595 16.9855 17.0864L17.107 16.7214L17.3084 16.7213C17.9033 16.7211 18.3897 16.5182 18.7817 16.1068C19.0571 15.8178 19.2027 15.5423 19.3025 15.1214C19.3534 14.907 19.3348 14.4993 19.2524 14.0214C18.8139 11.4771 18.4656 10.0322 18.1246 9.34301C17.6787 8.44211 17.0569 7.66667 16.4245 7.22309L16.3074 7.14097L16.4738 6.96885C16.9453 6.48123 17.2282 5.84583 17.3186 5.07135C17.3455 4.84115 17.3459 4.22079 17.3192 4.00083C17.2225 3.20167 16.942 2.57105 16.4702 2.09237C16.0239 1.63945 15.4994 1.36773 14.8297 1.24251C14.4207 1.16601 13.9713 1.14551 13.5397 1.18363ZM9.64974 6.23319C8.93618 6.33473 8.52822 6.51535 8.1233 6.90899C7.60338 7.41441 7.36344 8.15093 7.42212 9.06135C7.4571 9.60409 7.60492 10.0507 7.87508 10.4299L7.97376 10.5684L7.81508 10.686C7.20446 11.1388 6.74922 11.8086 6.57172 12.5154C6.4912 12.836 6.47392 13.0117 6.48496 13.3974C6.49368 13.7016 6.50678 13.8132 6.57826 14.1914C6.7874 15.2981 7.00796 16.1743 7.45112 17.6591C7.6447 18.3076 7.75838 18.5724 7.95498 18.8324C8.28632 19.2706 8.80776 19.6195 9.32908 19.7517C9.79544 19.87 10.204 19.87 10.6704 19.7517C11.3219 19.5864 11.9534 19.091 12.2406 18.5197C12.3541 18.2938 12.3815 18.2156 12.5792 17.5514C13.0077 16.112 13.2132 15.292 13.4212 14.1914C13.6053 13.2172 13.5383 12.5758 13.1773 11.8562C12.958 11.419 12.5934 10.9892 12.1844 10.686L12.0257 10.5684L12.1244 10.4299C12.3946 10.0507 12.542 9.60505 12.5773 9.06135C12.6362 8.15131 12.3963 7.41457 11.8762 6.90899C11.5323 6.57471 11.1616 6.38477 10.6486 6.28003C10.4566 6.24083 9.80936 6.21049 9.64974 6.23319ZM9.60236 7.69217C9.30992 7.75563 9.08506 7.91345 8.98008 8.12889C8.8774 8.33961 8.85132 8.47779 8.85124 8.81135C8.85114 9.14201 8.88954 9.33371 8.99448 9.52651C9.10098 9.72219 9.32834 9.87139 9.6115 9.93137C9.7912 9.96943 10.2083 9.96943 10.388 9.93137C10.6711 9.87139 10.8985 9.72219 11.005 9.52651C11.1099 9.33379 11.1483 9.14201 11.1483 8.81135C11.1483 8.48069 11.1099 8.28891 11.005 8.09619C10.8985 7.90051 10.6711 7.75131 10.388 7.69133C10.2135 7.65437 9.77438 7.65485 9.60236 7.69217ZM9.65974 11.431C9.02224 11.5257 8.46676 11.8863 8.15132 12.4101C7.91394 12.8043 7.85764 13.2344 7.96708 13.8171C8.1768 14.9339 8.3904 15.7864 8.83246 17.2714C8.98946 17.7988 9.04562 17.921 9.20472 18.0816C9.40494 18.2837 9.69756 18.4014 9.99974 18.4014C10.1921 18.4014 10.3234 18.3703 10.5123 18.2802C10.713 18.1844 10.8869 18.0176 10.9753 17.836C11.1252 17.5283 11.714 15.3963 11.8996 14.4894C12.0631 13.6906 12.0861 13.5434 12.0864 13.2914C12.0872 12.6705 11.7817 12.1384 11.1997 11.7472C10.7946 11.4749 10.1941 11.3516 9.65974 11.431Z" fill="#62748E"></path> </svg> </span> <span class="text-sm font-medium md:text-base lg:text-lg">${gradeRange}</span> </div> </div> <!-- Know more button --> ${renderComponent($$result, "Button", $$Button, { "text": "Know More", "size": "small", "variant": "soft", "rightArrow": true, "onClick": href })} </div> </div> </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/CampusCard.astro", void 0);

const $$OurCampuses = createComponent(($$result, $$props, $$slots) => {
  const campusDetails = {
    campus: [
      {
        title: "SAI Angan",
        img: "/images/sai-campus.png",
        subTitle: "Preschool & Early Childhood",
        gradeRange: "Playgroup \u2013 Grade 2 "
      },
      {
        title: "SAI Residential",
        img: "/images/sai-resident.png",
        subTitle: "Boarding & Senior Years",
        gradeRange: "Grades 5 \u2013 12 "
      }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section class="bg-n-100" id="other-campus"> <div class="container mx-auto flex flex-col gap-11 px-6 py-24 md:gap-12 lg:gap-16 lg:px-8 lg:py-28 2xl:px-0"> <!-- Section Header --> ${renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { "eyebrowText": "Our Campuses", "title": "Learning Beyond One Campus" })} <!-- Campus card wrapper --> <div class="flex flex-col justify-center gap-8 md:flex-row md:gap-5 lg:gap-12"> ${campusDetails.campus.map((card) => renderTemplate`<div class="w-full lg:w-[46%] lg:max-w-[600px]"> ${renderComponent($$result, "CampusCard", $$CampusCard, { "title": card.title, "img": card.img, "subTitle": card.subTitle, "gradeRange": card.gradeRange })} </div>`)} </div> </div> </section>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/OurCampuses.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProgressBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProgressBar;
  const { value = 80 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-n-100 h-1 w-full overflow-hidden rounded-xs"> <div class="h-full rounded-xs" data-progress-bar${addAttribute(`width: ${value}%; background: linear-gradient(90deg, #FBBEB8 0%, #F05B40 100%);`, "style")}></div> </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/ProgressBar.astro", void 0);

const $$Astro$3 = createAstro();
const $$LearningContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LearningContent;
  const {
    items,
    title = "",
    id
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="box-border flex w-full flex-col items-start gap-2.5 rounded-3xl bg-white px-3.5 py-4 md:gap-12 md:p-6 lg:flex-row-reverse lg:gap-14 lg:p-12"> <!-- Image Section --> <div class="h-[169px] w-full shrink-0 md:h-[360px] lg:h-[430px] lg:w-[480px] xl:w-[530px] 2xl:w-[670px]"> <img id="learning-active-image" data-active-image${addAttribute(items[0].imageUrl, "src")} alt="" class="pointer-events-none inset-0 h-full w-full rounded-xl object-cover"> </div> <!-- Accordion --> <div class="flex w-full flex-col items-start gap-7 py-4 md:gap-8 md:py-0 lg:flex-1" data-accordion data-accordion-autoplay="true"> ${items.map((item, idx) => renderTemplate`<div class="w-full" data-accordion-item${addAttribute(idx === 0 ? "true" : "false", "data-open")}${addAttribute(item.imageUrl, "data-img")}> <div class="flex flex-col"> <div class="flex w-full cursor-pointer items-center" data-accordion-toggle aria-label="Toggle"${addAttribute(idx === 0 ? "true" : "false", "aria-expanded")}> <p class="w-full text-base leading-none" data-accordion-title${addAttribute(idx, "data-index")}> ${item.title} </p> <div class="flex h-6 w-6 flex-col items-center justify-center">  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" data-icon-plus> <path d="M6 0.799805C6.38661 0.799805 6.7002 1.11341 6.7002 1.5V5.2998H10.5C10.8866 5.2998 11.2002 5.61339 11.2002 6C11.2002 6.38661 10.8866 6.7002 10.5 6.7002H6.7002V10.5C6.7002 10.8866 6.38661 11.2002 6 11.2002C5.61339 11.2002 5.2998 10.8866 5.2998 10.5V6.7002H1.5C1.11341 6.7002 0.799805 6.38661 0.799805 6C0.799805 5.61339 1.11341 5.2998 1.5 5.2998H5.2998V1.5C5.2998 1.11341 5.61339 0.799805 6 0.799805Z" fill="#45556C" stroke="#45556C" stroke-width="0.4"></path> </svg> <div class="bg-n-600 border-n-600 hidden h-0.5 w-2 rounded-xs border-[0.4px] border-solid" data-icon-minus></div> </div> </div>  <div class="accordion-panel overflow-hidden"${addAttribute(item.isOpen ? "max-height: auto;" : "max-height: 0px;", "style")} data-accordion-panel${addAttribute(idx, "data-index")}> <div class="flex flex-col items-start gap-5 pt-2.5 md:gap-7"> <p class="text-n-500 font-secondary w-[95%] text-sm leading-[120%] md:text-base md:leading-[140%]"> ${item.description} </p> <div class="w-full"> ${renderComponent($$result, "ProgressBar", $$ProgressBar, { "value": item.progress })} </div> </div> </div> </div> </div>`)} <!-- Button --> ${renderComponent($$result, "Button", $$Button, { "text": title, "variant": "soft", "size": "small", "rightArrow": true, "onClick": `window.location.href = "${URLS.ABOUT.LEARNING_360.ITEM(id.toString(), title.replaceAll(" ", "-"))}"` })} </div> </div> `;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/LearningContent.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Learning360 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<section id="learning-360"> <div class="container mx-auto flex flex-col gap-10 px-3 py-14 md:gap-11 md:py-20 lg:gap-12 lg:pt-24"> <!-- Header --> ', ' <!-- Tabs --> <div class="flex w-full flex-col items-start gap-3.5 lg:gap-6"> <div id="learning-tabs" class="scrollbar-hide flex w-full items-center justify-start gap-3 overflow-x-auto md:gap-5 lg:gap-6"> ', ' </div> <!-- Pre-rendered content sections --> <div id="learning-sections" class="w-full"> ', ` </div> </div> </div> </section> <!-- Modular accordion + tabs with autoplay/progress --> <script type="module">
  import { initAccordion } from "/js/accordion.js";

  const tabsContainer = document.getElementById("learning-tabs");
  const sectionEls = Array.from(document.querySelectorAll(".learning-section"));

  /* ---------- IMAGE SYNC ---------- */

  // Updates the main image inside a section based on the active accordion item
  function updateSectionImage(sectionEl) {
    const activeImg = sectionEl.querySelector("[data-active-image]");
    if (!activeImg) return;

    const openItem =
      sectionEl.querySelector('[data-accordion-item][data-open="true"]') ||
      sectionEl.querySelector("[data-accordion-item]");

    const newImgUrl = openItem?.dataset?.img;
    if (!newImgUrl) return;

    // Skip update if already showing this image
    const currentSrc = activeImg.getAttribute("src");
    if (currentSrc === newImgUrl) return;

    // Fade transition
    activeImg.style.transition = "opacity 220ms ease";
    activeImg.style.opacity = 0;

    setTimeout(() => {
      activeImg.setAttribute("src", newImgUrl);
      activeImg.style.opacity = 1;
    }, 220);
  }

  // Attach listeners to keep image and accordion in sync
  function enableImageSync(sectionEl) {
    const accordionRoot = sectionEl.querySelector("[data-accordion]");
    if (!accordionRoot) return;

    updateSectionImage(sectionEl);

    // When clicking toggle headers, recheck image
    accordionRoot.addEventListener("click", (e) => {
      if (e.target.closest("[data-accordion-toggle]")) {
        setTimeout(() => updateSectionImage(sectionEl), 50);
      }
    });

    // Watch for attribute changes (accordion open/close)
    const accordionItems = sectionEl.querySelectorAll("[data-accordion-item]");
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === "data-open") {
          updateSectionImage(sectionEl);
          break;
        }
      }
    });

    accordionItems.forEach((item) =>
      observer.observe(item, {
        attributes: true,
        attributeFilter: ["data-open"],
      }),
    );

    accordionRoot.__imgObserver = observer;
  }

  function disableImageSync(sectionEl) {
    const accordionRoot = sectionEl.querySelector("[data-accordion]");
    if (accordionRoot?.__imgObserver) {
      accordionRoot.__imgObserver.disconnect();
      accordionRoot.__imgObserver = null;
    }
  }

  /* ---------- ACCORDION CONTROL ---------- */

  function getAccordionAPI(sectionEl) {
    const root = sectionEl.querySelector("[data-accordion]");
    return root ? root.__acc : null;
  }

  function destroyOtherSectionAccordions(activeIndex) {
    sectionEls.forEach((sectionEl, i) => {
      if (i === activeIndex) return;

      const accordionRoot = sectionEl.querySelector("[data-accordion]");
      if (accordionRoot?.__acc) {
        accordionRoot.__acc.destroy();
        accordionRoot.__acc = null;
      }

      disableImageSync(sectionEl);
    });
  }

  function setupSectionAccordion(sectionEl) {
    const accordionRoot = sectionEl.querySelector("[data-accordion]");
    if (!accordionRoot) return;

    if (accordionRoot.__acc) {
      accordionRoot.__acc.destroy();
      accordionRoot.__acc = null;
    }

    accordionRoot.__acc = initAccordion(accordionRoot, {
      autoplay: true,
      cycleMs: 6000,
      progressDurationMs: 6000,
    });

    enableImageSync(sectionEl);
    updateSectionImage(sectionEl);
  }

  /* ---------- TAB SWITCHING ---------- */

  function activateTab(tabIndex) {
    const tabButtons = Array.from(tabsContainer.querySelectorAll(".tab-item"));

    // Reset tab styles
    tabButtons.forEach((btn) => {
      btn.classList.remove("bg-orange-500");
      btn.classList.add("bg-white");
      btn.querySelector("p")?.classList.replace("text-n-50", "text-n-600");
    });

    // Highlight active tab
    const activeBtn = tabButtons[tabIndex];
    activeBtn.classList.replace("bg-white", "bg-orange-500");
    activeBtn.querySelector("p").classList.replace("text-n-600", "text-n-50");

    // Show only this section
    sectionEls.forEach((sectionEl, i) => {
      sectionEl.classList.toggle("hidden", i !== tabIndex);
      sectionEl.classList.toggle("block", i === tabIndex);
    });

    destroyOtherSectionAccordions(tabIndex);
    setupSectionAccordion(sectionEls[tabIndex]);

    const accordionAPI = getAccordionAPI(sectionEls[tabIndex]);
    accordionAPI && accordionAPI.restartAutoplay?.();
  }

  // Tab click events
  tabsContainer.addEventListener("click", (e) => {
    const tabButton = e.target.closest(".tab-item");
    if (!tabButton) return;
    const index = Number(tabButton.dataset.index || 0);
    activateTab(index);
  });

  // Initialize first tab
  activateTab(0);
<\/script>`])), maybeRenderHead(), renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { "eyebrowText": "Learning @ 360", "title": "Education That Shapes Every Side of a Child", "subtitle": "Shaping confident, compassionate, and future-ready learners." }), learning360Content.map(
    (learning360ContentItem, learning360ContentIndex) => renderTemplate`<div${addAttribute(`tab-item flex cursor-pointer flex-col items-center rounded-xl border-2 border-transparent p-3 transition-colors hover:border-orange-500 md:px-3.5 md:py-4 ${learning360ContentIndex === 0 ? "bg-orange-500" : "bg-white"}`, "class")}${addAttribute(learning360ContentIndex, "data-index")}> <p${addAttribute(`font-secondary text-xs leading-[1.3] whitespace-nowrap md:text-sm lg:text-base ${learning360ContentIndex === 0 ? "text-n-50" : "text-n-600"}`, "class")}> ${learning360ContentItem.title} </p> </div>`
  ), learning360Content.map(
    (learning360ContentItem, learning360ContentIndex) => renderTemplate`<div${addAttribute(`learning-section ${learning360ContentIndex === 0 ? "block" : "hidden"}`, "class")}${addAttribute(learning360ContentIndex, "data-index")}> ${renderComponent($$result, "LearningContent", $$LearningContent, { "items": learning360ContentItem.items, "title": learning360ContentItem.title, "id": learning360ContentItem.id })} </div>`
  ));
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/Learning360.astro", void 0);

const $$Astro$2 = createAstro();
const $$StatsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StatsCard;
  const { statsCount = "", title = "", subTitle = "", img = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-n-200 bg-n-50 relative flex h-[140px] w-full items-center justify-between gap-6 overflow-hidden rounded-3xl border-2 p-1.5 md:h-[380px] md:flex-col md:p-3 lg:h-[230px] lg:flex-row"> <!-- Stat image --> <div class="relative h-full w-[115px] rounded-xl md:h-[190px] md:w-full lg:h-full lg:w-[180px]" data-name="stats-image"> <img alt="" class="pointer-events-none h-full w-full rounded-xl object-cover"${addAttribute(img, "src")}> </div> <!-- Stat content --> <div class="flex w-full flex-1 flex-col items-start gap-1 md:items-center md:gap-4 lg:items-start lg:gap-5 lg:pr-5" data-name="stats-content"> <!-- Stat Number --> <p class="text-n-700 w-min text-4xl font-bold md:text-6xl 2xl:text-7xl"> ${statsCount} </p> <!-- Stat card title --> <div class="font-secondary flex flex-col gap-3 md:w-[85%] md:text-center lg:w-[92%] lg:text-left"> <p class="text-n-600 text-sm font-medium md:text-lg lg:text-base"> ${title} </p> <!-- Stat card subtitle --> <p class="text-n-500 hidden text-xs font-medium md:block">${subTitle}</p> </div> </div> <!-- Backdrop illustration logo --> <div class="absolute top-[-46px] right-[-40px] text-orange-500/80 md:top-auto md:right-[-47px] md:bottom-[-22.3px] lg:top-[-28.6px] lg:right-[-13.33px]"> <!-- Illustration --> <svg class="size-[127px] md:size-[157px]" width="157" height="157" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0H52.6646C65.8355 0 76.5127 10.6772 76.5127 23.8481V76.5127H23.8481C10.6772 76.5127 0 65.8355 0 52.6646V0Z" fill="#CC554D" fill-opacity="0.08"></path> <path d="M157 0H104.335C91.1645 0 80.4873 10.6772 80.4873 23.8481V76.5127H133.152C146.323 76.5127 157 65.8355 157 52.6646V0Z" fill="#CC554D" fill-opacity="0.08"></path> <path d="M0 157H52.6646C65.8355 157 76.5127 146.323 76.5127 133.152V80.4873H23.8481C10.6772 80.4873 0 91.1645 0 104.335V157Z" fill="#CC554D" fill-opacity="0.08"></path> <path d="M157 157H104.335C91.1645 157 80.4873 146.323 80.4873 133.152V80.4873H133.152C146.323 80.4873 157 91.1645 157 104.335V157Z" fill="#CC554D" fill-opacity="0.08"></path> </svg> </div> </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/StatsCard.astro", void 0);

const sectionHeaderDetails = {
  eyebrowText: "Why Choose SAI",
  title: "Where Excellence Meets Belonging"
};
const statsCard = [
  {
    id: 1,
    title: "of Class X students scored above 90%",
    statsCount: "50.6%",
    img: "/images/stats-image-1.png"
  },
  {
    id: 2,
    title: "Competitive Exam Qualifiers",
    statsCount: "200+",
    subTitle: "(JEE/NEET/CLAT/SAT)",
    img: "/images/stats-image-2.png"
  },
  {
    id: 3,
    title: "Rank No.1 School for 5 Consecutive Years",
    statsCount: "#1",
    img: "/images/stats-image-3.png"
  },
  {
    id: 4,
    title: "sq.ft. of world-class art and sports facilities",
    statsCount: "335K+",
    img: "/images/stats-image-4.png"
  },
  {
    id: 5,
    title: "Clubs & Activities — From tech to arts & sports",
    statsCount: "20+",
    img: "/images/stats-image-1.png"
  },
  {
    id: 6,
    title: "Global/Ivy University Admits",
    statsCount: "40+",
    img: "/images/stats-image-1.png"
  }
];

const $$Stats = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Stats Card Component -->${maybeRenderHead()}<section class="bg-n-50 relative z-1 overflow-hidden" data-astro-cid-qppkvrfv> <!-- Background Vector --> <div class="text-n-100 absolute top-1/2 z-2 w-full origin-center -translate-y-1/2 scale-480 -rotate-50 sm:scale-280 sm:-rotate-45 md:scale-250 lg:scale-none lg:rotate-none" data-astro-cid-qppkvrfv> <svg class="path h-full w-full" xmlns="http://www.w3.org/2000/svg" width="1920" height="970" viewBox="0 0 1920 970" fill="none" data-astro-cid-qppkvrfv> <path d="M2037.99 182.884C1962.08 170.483 1789.52 139.764 1739.71 265.434C1689.89 391.103 1578.74 559.769 1365.75 524.971C1152.76 490.174 1019.63 397.312 824.477 513.542C629.321 629.772 599.863 853.439 264.939 787.358C-3.00131 734.494 -6.5198 521.681 -64.3179 516.025" stroke="currentColor" stroke-width="340" stroke-linecap="round" data-astro-cid-qppkvrfv></path> </svg> </div> <!-- Container wrapper --> <div class="relative z-4 container mx-auto flex w-full flex-col items-center gap-12 px-6 py-16 md:gap-20 md:py-28 lg:px-8" data-astro-cid-qppkvrfv> <!-- Header with Lines --> <div class="self-start" data-astro-cid-qppkvrfv> ${renderComponent($$result, "CommonHeader", $$CommonHeader, { ...sectionHeaderDetails, "data-astro-cid-qppkvrfv": true })} </div> <!-- Stats Cards Grid --> <div class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-8 md:gap-x-6 lg:gap-10 xl:grid-cols-3 2xl:gap-x-14 2xl:gap-y-8" data-astro-cid-qppkvrfv> ${statsCard.map((statsCardItem, statsCardIndex) => renderTemplate`<div class="card-anim card-bottom"${addAttribute(`--delay: ${statsCardIndex * 0.1}s`, "style")} data-astro-cid-qppkvrfv> ${renderComponent($$result, "StatsCard", $$StatsCard, { "img": statsCardItem.img, "title": statsCardItem.title, "statsCount": statsCardItem.statsCount, "subTitle": statsCardItem.subTitle, "data-astro-cid-qppkvrfv": true })} </div>`)} </div> </div> </section> `;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/Stats.astro", void 0);

const imageBasedSlider = [
  "/images/result-image.png",
  "/images/result-image.png",
  "/images/result-image.png",
  "/images/result-image.png",
  "/images/result-image.png"
];
const sectionHeaderContent = {
  eyebrowText: "National Achievers",
  title: "Honouring the Achievers of SAI",
  subtitle: "Inspiring journeys of dedication, discipline, and distinction."
};

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Results = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section> <div class="container mx-auto flex flex-col gap-9 px-6 py-14 md:gap-12 md:py-20 lg:gap-14 lg:px-6 lg:py-24"> <!-- Section Header with Lines --> ', ' <!-- Slider wrapper --> <div class="flex flex-col items-center gap-6 md:gap-10" id="results-slider"> <!-- Viewport --> <div class="overflow-hidden rounded-xl" id="data-embla-viewport" data-embla-viewport> <!-- Container --> <div class="flex" data-embla-container> ', ' </div> </div> <!-- Buttons wrapper --> <div class="flex items-center justify-center gap-8 md:gap-12 lg:gap-20"> <!--  Prev button --> <button type="button" id="prevButton" class="bg-n-100 border-n-200 hover:bg-n-200 hidden size-6 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-embla-prev aria-label="Previous"> <span class="inline-flex"> <svg class="size-3 md:size-7" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7964 5.9684C11.1229 6.08513 11.3018 6.26134 11.4283 6.59064C11.508 6.79812 11.4864 7.12836 11.3787 7.34849C11.2662 7.57834 11.1138 7.71283 10.7461 7.90664C9.79415 8.40832 8.96949 8.96597 8.07436 9.71332C6.87991 10.7106 5.79432 11.8731 4.9112 13.1006L4.63927 13.4786L15.4848 13.4928C24.0302 13.5038 26.3516 13.5142 26.4303 13.5417C26.5724 13.5911 26.7876 13.7508 26.8948 13.8862C27.1716 14.236 27.1689 14.7713 26.8885 15.1269C26.7998 15.2395 26.5857 15.3923 26.4284 15.4554C26.3451 15.4888 24.7043 15.4967 15.4853 15.5086L4.64033 15.5226L4.87057 15.8446C5.88409 17.2621 7.18564 18.6147 8.58018 19.6997C9.2043 20.1853 9.95493 20.671 10.6752 21.0552C10.889 21.1693 11.1168 21.3136 11.1813 21.3758C11.353 21.5416 11.4541 21.7671 11.4704 22.0207C11.4868 22.2765 11.4462 22.432 11.3067 22.6477C11.1844 22.8371 11.0225 22.9577 10.7819 23.0388C10.4501 23.1506 10.2573 23.1093 9.68736 22.8041C8.20714 22.0117 6.90643 21.0347 5.53082 19.6819C4.05552 18.2311 2.97198 16.802 2.12251 15.1866C1.76731 14.5111 1.78623 14.3826 2.39896 13.3106C3.20897 11.8936 4.19992 10.6306 5.53115 9.31868C6.89671 7.97298 8.18353 7.00608 9.68436 6.19803C10.2552 5.8907 10.4606 5.84828 10.7964 5.9684Z" fill="#45556C"></path> </svg> </span> </button> <!-- Dots --> <div id="emblaDots" data-embla-dots class="flex items-center gap-1 md:gap-2"></div> <!-- Next button --> <button type="button" class="bg-n-100 border-n-200 hover:bg-n-200 hidden size-6 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" id="nextButton" data-embla-next> <span class="inline-flex rotate-180"> <svg class="size-3 md:size-7" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7964 5.9684C11.1229 6.08513 11.3018 6.26134 11.4283 6.59064C11.508 6.79812 11.4864 7.12836 11.3787 7.34849C11.2662 7.57834 11.1138 7.71283 10.7461 7.90664C9.79415 8.40832 8.96949 8.96597 8.07436 9.71332C6.87991 10.7106 5.79432 11.8731 4.9112 13.1006L4.63927 13.4786L15.4848 13.4928C24.0302 13.5038 26.3516 13.5142 26.4303 13.5417C26.5724 13.5911 26.7876 13.7508 26.8948 13.8862C27.1716 14.236 27.1689 14.7713 26.8885 15.1269C26.7998 15.2395 26.5857 15.3923 26.4284 15.4554C26.3451 15.4888 24.7043 15.4967 15.4853 15.5086L4.64033 15.5226L4.87057 15.8446C5.88409 17.2621 7.18564 18.6147 8.58018 19.6997C9.2043 20.1853 9.95493 20.671 10.6752 21.0552C10.889 21.1693 11.1168 21.3136 11.1813 21.3758C11.353 21.5416 11.4541 21.7671 11.4704 22.0207C11.4868 22.2765 11.4462 22.432 11.3067 22.6477C11.1844 22.8371 11.0225 22.9577 10.7819 23.0388C10.4501 23.1506 10.2573 23.1093 9.68736 22.8041C8.20714 22.0117 6.90643 21.0347 5.53082 19.6819C4.05552 18.2311 2.97198 16.802 2.12251 15.1866C1.76731 14.5111 1.78623 14.3826 2.39896 13.3106C3.20897 11.8936 4.19992 10.6306 5.53115 9.31868C6.89671 7.97298 8.18353 7.00608 9.68436 6.19803C10.2552 5.8907 10.4606 5.84828 10.7964 5.9684Z" fill="#45556C"></path> </svg> </span> </button> </div> </div> </div> </section> <!-- Component-level init: scoped to this slider only --> <script type="module">\n  import { initEmblaRoot } from "/js/embla.js";\n  window.addEventListener("DOMContentLoaded", () => {\n    const root = document.getElementById("results-slider");\n    initEmblaRoot(root);\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "SectionHeader", $$SectionHeaderMain, { ...sectionHeaderContent }), imageBasedSlider.map((src, i) => renderTemplate`<div class="max-h-[454px] w-full min-w-0 shrink-0 lg:h-[70vh] lg:max-h-[69vh]" data-embla-slide> <img${addAttribute(src, "src")}${addAttribute(`Slide ${i + 1}`, "alt")} class="pointer-events-none block h-full w-full select-none object-contain" draggable="false"> </div>`));
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/Results.astro", void 0);

const $$Astro$1 = createAstro();
const $$PlacementsBand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlacementsBand;
  const {
    title,
    kicker,
    logos = [],
    direction = "ltr",
    speedSec = 2,
    delay = 0
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-n-50 overflow-hidden rounded-2xl border-b-8 border-orange-500 p-5 md:border-b-0 md:p-7 md:px-11 md:py-8 lg:px-9 lg:py-10 ${direction == "ltr" ? "md:border-l-[10px] lg:border-l-[12px]" : "md:border-r-[10px] lg:border-r-[12px]"}`, "class")} data-astro-cid-fqlsnd54> <div${addAttribute(`flex flex-col gap-3 md:flex-row md:gap-14  md:items-center md:justify-between ${direction == "rtl" ? "md:flex-row-reverse" : ""}`, "class")} data-astro-cid-fqlsnd54> <!-- Heading --> <div${addAttribute(`${direction == "rtl" ? "md:text-right" : ""}`, "class")} data-astro-cid-fqlsnd54> ${kicker && renderTemplate`<p class="font-secondary text-sm font-medium text-slate-600 lg:text-xl" data-astro-cid-fqlsnd54> ${kicker} </p>`} <p class="font-secondary text-3xl font-bold text-orange-500 md:text-4xl lg:text-6xl" data-astro-cid-fqlsnd54> ${title} </p> </div> <!-- Marquee (duplicate list for seamless loop) --> <div class="group w-full overflow-hidden" data-astro-cid-fqlsnd54> <div class="flex items-center gap-6 whitespace-nowrap will-change-transform md:gap-14"${addAttribute(`transform:translateX(0); animation: pb-marquee ${speedSec}s linear infinite; animation-direction:alternate; animation-delay:${delay}s`, "style")} data-astro-cid-fqlsnd54> <!-- GROUP 1 --> <ul class="flex min-w-max items-center gap-6 whitespace-nowrap md:gap-14" data-astro-cid-fqlsnd54> ${logos.map((logo) => renderTemplate`<li data-astro-cid-fqlsnd54> <img class="h-20 w-full object-contain lg:h-[100px] lg:w-full"${addAttribute(logo.src, "src")}${addAttribute(logo.alt ?? "", "alt")} loading="lazy" decoding="async" data-astro-cid-fqlsnd54> </li>`)} </ul> <ul class="flex min-w-max items-center gap-6 whitespace-nowrap md:gap-14" data-astro-cid-fqlsnd54> ${logos.map((logo) => renderTemplate`<li data-astro-cid-fqlsnd54> <img class="h-20 w-full object-contain lg:h-[100px] lg:w-full"${addAttribute(logo.src, "src")}${addAttribute(logo.alt ?? "", "alt")} loading="lazy" decoding="async" data-astro-cid-fqlsnd54> </li>`)} </ul> <ul class="flex min-w-max items-center gap-6 whitespace-nowrap md:gap-14" data-astro-cid-fqlsnd54> ${logos.map((logo) => renderTemplate`<li data-astro-cid-fqlsnd54> <img class="h-20 w-full object-contain lg:h-[100px] lg:w-full"${addAttribute(logo.src, "src")}${addAttribute(logo.alt ?? "", "alt")} loading="lazy" decoding="async" data-astro-cid-fqlsnd54> </li>`)} </ul> </div> </div> </div>  </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/PlacementsBand.astro", void 0);

const $$Placements = createComponent(($$result, $$props, $$slots) => {
  const placementsDetails = {
    band1: [
      { src: "/images/placements/iit-bombay.png", alt: "" },
      { src: "/images/placements/aiims.png", alt: "" },
      { src: "/images/placements/jipm.png", alt: "" },
      { src: "/images/placements/nalsar.png", alt: "" },
      { src: "/images/placements/india-1.png", alt: "" },
      { src: "/images/placements/india-2.png", alt: "" },
      { src: "/images/placements/mit.png", alt: "" }
    ],
    band2: [
      { src: "/images/placements/british.png", alt: "" },
      { src: "/images/placements/gerodia.png", alt: "" },
      { src: "/images/placements/harvad.png", alt: "" },
      { src: "/images/placements/global.png", alt: "" },
      { src: "/images/placements/nus.png", alt: "" },
      { src: "/images/placements/new-york.png", alt: "" }
    ],
    band3: [
      { src: "/images/placements/moribus.png", alt: "" },
      { src: "/images/placements/harvad-2.png", alt: "" },
      { src: "/images/placements/houston.png", alt: "" },
      { src: "/images/placements/pennsyl.png", alt: "" },
      { src: "/images/placements/umass.png", alt: "" },
      { src: "/images/placements/nyu.png", alt: "" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section class="bg-n-100"> <div class="container mx-auto flex flex-col gap-11 px-6 py-24 md:gap-16 md:px-0 md:py-32 lg:gap-14 lg:px-6 2xl:px-0"> <!-- Section Header with lines --> ${renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { "eyebrowText": "Placements & Pathways", "title": "From SAI to the World\u2019s Best Institutions", "subtitle": "Our graduates continue their journeys at top universities and leading global companies across India and the world. here to help" })} <!-- Placements band wrapper --> <div class="flex flex-col gap-7"> ${renderComponent($$result, "PlacementsBand", $$PlacementsBand, { "kicker": "Prestigious institutions in", "title": "India", "logos": placementsDetails.band1, "speedSec": 12 })} ${renderComponent($$result, "PlacementsBand", $$PlacementsBand, { "kicker": "Ivy League & Renowned Institutes", "title": "Globally", "logos": placementsDetails.band2, "direction": "rtl", "delay": 12, "speedSec": 12 })} ${renderComponent($$result, "PlacementsBand", $$PlacementsBand, { "kicker": "Working with Industry", "title": "Leaders", "logos": placementsDetails.band3, "speedSec": 12 })} </div> </div> </section>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/Placements.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$CustomSelect = createComponent(($$result, $$props, $$slots) => {
  const grades = ["Nursery", "LKG", "UKG", "1st Grade", "2nd Grade", "3rd Grade"];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Custom Dropdown -->", '<div class="relative space-y-1" id="modal"> <button id="dropdownButton" type="button" class="border-n-500 text-n-800 flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-base font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none"> <span id="dropdownLabel">Select Grade</span> <svg class="text-n-600 h-5 w-5 transition-transform duration-200" id="dropdownArrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.87229 5.32223C1.75397 5.34999 1.59153 5.45117 1.50195 5.55293C1.38471 5.68611 1.33247 5.83375 1.33169 6.03403L1.33105 6.19819L1.53561 6.60403C2.07689 7.67783 2.75491 8.79387 3.36319 9.61219C4.64095 11.3312 6.08645 12.5919 8.18047 13.8137C8.71375 14.1249 8.97249 14.2342 9.38751 14.3237C9.66271 14.3831 10.2961 14.3881 10.5698 14.3331C10.9845 14.2496 11.2951 14.1211 11.8105 13.8199C13.9213 12.586 15.3373 11.3523 16.6318 9.61905C17.2434 8.80015 17.9647 7.61007 18.4954 6.54421L18.6675 6.19855L18.6681 6.03421C18.6692 5.73951 18.5325 5.51219 18.277 5.38387C18.0591 5.27441 17.8344 5.27847 17.6147 5.39589C17.4647 5.47603 17.3816 5.58487 17.1915 5.95021C16.5827 7.11975 16.0383 8.01771 15.5001 8.73987C14.3294 10.3107 13.0319 11.4454 11.1505 12.5436C10.567 12.8842 10.431 12.9299 10.0005 12.9299C9.56995 12.9299 9.43399 12.8842 8.85047 12.5436C7.61657 11.8233 6.72601 11.1561 5.84337 10.2906C4.73297 9.20181 3.82187 7.90159 2.83119 5.99197C2.72335 5.78413 2.60333 5.57889 2.56447 5.53587C2.39593 5.34931 2.11995 5.26413 1.87229 5.32223Z" fill="#62748E"></path> </svg> </button> <!-- Dropdown Menu --> <ul id="dropdownMenu" class="border-n-300 absolute z-10 mt-1 hidden max-h-[200px] w-full overflow-y-auto rounded-lg border bg-white shadow-lg transition-all duration-200"> ', ' </ul> <input type="hidden" id="dropdownValue" name="grade" required> </div> <script>\n  const btn = document.getElementById("dropdownButton");\n  const menu = document.getElementById("dropdownMenu");\n  const label = document.getElementById("dropdownLabel");\n  const hiddenInput = document.getElementById("dropdownValue");\n  const arrow = document.getElementById("dropdownArrow");\n\n  btn.addEventListener("click", () => {\n    const open = !menu.classList.contains("hidden");\n    menu.classList.toggle("hidden");\n    arrow.style.transform = open ? "rotate(0deg)" : "rotate(180deg)";\n  });\n\n  menu.querySelectorAll("li").forEach((item) => {\n    item.addEventListener("click", () => {\n      label.textContent = item.textContent;\n      hiddenInput.value = item.dataset.value;\n      menu.classList.add("hidden");\n      arrow.style.transform = "rotate(0deg)";\n    });\n  });\n\n  // Close on outside click\n  document.addEventListener("click", (e) => {\n    if (!btn.contains(e.target) && !menu.contains(e.target)) {\n      menu.classList.add("hidden");\n      arrow.style.transform = "rotate(0deg)";\n    }\n  });\n<\/script>'])), maybeRenderHead(), grades.map((grade) => renderTemplate`<li class="text-n-700 font-secondary cursor-pointer px-4 py-2 hover:bg-orange-100 hover:text-orange-700"${addAttribute(grade, "data-value")}> ${grade} </li>`));
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/CustomSelect.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = "Shaping Learners who Inspire the world!",
    formTitle = "Get the SAI Experience in Your Hands",
    buttonText = "Get Brochure",
    brochureText = "Get the brochure instantly on WhatsApp and discover why parents choose SAI.",
    childrenImage = "/images/children-image.png"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", `<section class="bg-n-50 relative w-full overflow-hidden bg-[url('/images/school-background.png')] bg-cover bg-center pt-24 md:pt-36" data-name="hero-section" data-astro-cid-36xqwagk> <!-- Main Content --> <div class="relative z-10 container mx-auto mb-15 px-4 pt-10 md:mb-30 md:px-6 lg:pb-[91px] xl:mb-0 2xl:px-0 2xl:pt-32" data-astro-cid-36xqwagk> <div class="flex flex-col lg:flex-row lg:items-center lg:gap-0" data-astro-cid-36xqwagk> <!-- Left Content --> <div class="flex flex-col gap-11 md:gap-16 lg:gap-24" data-astro-cid-36xqwagk> <!-- Hero Text --> <div class="w-full md:w-[90%] xl:w-[60%]" data-astro-cid-36xqwagk> `, ' </div> <!-- Form Card --> <div class="border-n-100 rounded-lg border bg-white p-3.5 md:px-6 md:py-5 lg:w-[55%]" data-astro-cid-36xqwagk> <div class="space-y-3.5" data-astro-cid-36xqwagk> <h2 class="animatedText text-n-800 text-xl md:text-3xl" data-astro-cid-36xqwagk> ', ` </h2> <form class="flex flex-col gap-3.5 md:flex-row md:flex-wrap md:justify-between" data-hero-form novalidate data-astro-cid-36xqwagk> <!-- Student Name Input --> <div class="space-y-1 md:w-[58%]" data-astro-cid-36xqwagk> <input type="text" name="studentName" placeholder="Student's Name" class="border-n-500 text-n-500 placeholder-n-500 h-[50px] w-full rounded-lg border px-3 text-base font-medium focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:outline-none" required data-astro-cid-36xqwagk> <p id="studentName-error" data-error class="hidden text-sm text-red-600" data-astro-cid-36xqwagk>
Please enter the student's name.
</p> </div> <!-- Grade Select --> <div class="md:w-[39%]" data-astro-cid-36xqwagk> `, ' <p id="grade-error" data-error class="hidden text-sm text-red-600" data-astro-cid-36xqwagk>\nPlease select a grade.\n</p> </div> <!-- Phone Number Input --> <div class="space-y-1 md:w-[58%]" data-astro-cid-36xqwagk> <input type="tel" name="phone" placeholder="Phone Number" class="border-n-500 text-n-500 placeholder-n-500 h-[50px] w-full rounded-lg border px-3 text-base font-medium focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:outline-none" required data-astro-cid-36xqwagk> <p id="phone-error" data-error class="hidden text-sm text-red-600" data-astro-cid-36xqwagk>\nPlease enter a valid 10-digit phone number.\n</p> </div> <!-- Submit Button --> <button type="submit" class="fade-in font-secondary h-[50px] w-full cursor-pointer rounded-lg border border-transparent bg-orange-500 text-lg text-orange-50 transition-all duration-300 hover:border-orange-500 hover:bg-transparent hover:text-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none md:w-[39%]" data-astro-cid-36xqwagk> ', ' </button> </form> <!-- Brochure Text --> <p class="animatedText text-n-700 font-secondary text-sm md:text-base" data-astro-cid-36xqwagk> ', ' </p> </div> </div> </div> <!-- Right Content - Children Image --> </div> </div> <div class="relative flex items-center justify-center lg:absolute lg:right-0 lg:bottom-0 lg:w-[55%] lg:justify-end" data-astro-cid-36xqwagk> <div class="relative" data-astro-cid-36xqwagk> <!-- Main children image --> <div class="relative w-screen lg:w-full" data-astro-cid-36xqwagk> <img', ` alt="Children learning" class="h-full origin-top-left scale-105 object-cover lg:scale-100" loading="lazy" data-astro-cid-36xqwagk> </div> <!-- Decorative child vectors --> <div class="absolute -top-[31px] left-[47%] h-[100px] w-[75%] -translate-x-1/2 md:h-[220px]" data-astro-cid-36xqwagk> <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 size-9 sm:size-14 md:size-20" width="83" height="72" viewBox="0 0 83 72" fill="none" data-astro-cid-36xqwagk> <path d="M23.6702 14.1136L46.8444 44.9498M48.3894 2.43994L81.4953 33.7167C76.3455 34.9648 63.6181 39.091 53.0242 49.1347L50.5964 48.3638M48.3894 2.43994C48.3894 2.43994 34.7056 2.43994 23.4495 14.3339C8.97119 16.096 4.1745 27.1089 3.58595 32.3951L25.2152 63.2313C25.2152 63.2313 26.9808 48.474 46.6237 44.7296C46.6237 44.7296 58.7626 30.1925 74.8741 30.1925L48.3894 2.43994ZM4.68949 34.3774C3.27696 35.0823 2.62956 36.58 2.48242 37.2408L26.5394 70.2796L48.1686 52.2184V49.9057M6.23443 31.9546L12.1935 40.5447M14.4006 42.7473L16.6076 46.2714M48.1686 47.5929V49.9057M48.1686 47.5929C34.3966 49.7074 28.5258 59.7806 27.4222 64.7731M48.1686 47.5929C51.9207 43.1143 61.8524 33.5404 75.0948 31.9546M48.1686 47.5929L50.5964 48.3638M48.1686 49.9057C39.3404 50.5224 32.3514 59.6337 30.0707 64.3326M50.5964 48.3638C53.4656 45.1701 61.1462 37.9016 72.4463 34.3774M32.7192 11.4705C33.6756 10.149 36.8685 7.28563 41.9889 6.40459M44.4166 5.52356C44.858 5.15646 46.0057 4.46632 47.0651 4.64253" stroke="#CC554D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-36xqwagk></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="59" height="82" viewBox="0 0 59 82" fill="none" class="absolute -top-[10%] left-[60%] size-9 -translate-x-1/2 sm:size-14 md:size-20" data-astro-cid-36xqwagk> <path d="M3.75458 68.2457C3.16744 67.7631 2.57663 67.2255 1.98633 66.6276C2.18575 66.2698 2.40154 65.8447 2.62514 65.3593M3.75458 68.2457C8.04135 71.7699 12.1322 72.3717 14.3997 72.2473M3.75458 68.2457C3.24153 69.0617 3.11511 70.6067 4.22603 71.9982M14.3997 72.2473C14.8289 72.2238 15.1927 72.1742 15.4802 72.1135C15.6813 71.5813 15.8954 71.055 16.1212 70.5347M14.3997 72.2473C13.901 73.2575 13.2053 73.9968 12.239 74.3787M12.239 74.3787C11.0134 74.863 9.35257 74.7722 7.1062 73.9294C5.72654 73.4118 4.80706 72.726 4.22603 71.9982M12.239 74.3787C11.8879 75.4609 10.9172 77.1038 9.32247 77.4248M4.22603 71.9982C3.89337 73.5519 3.5777 74.3098 4.23493 75.1216M9.32247 77.4248C8.64688 77.5608 7.8593 77.4595 6.95939 76.978C5.48081 76.1868 4.65713 75.643 4.23493 75.1216M9.32247 77.4248C8.92659 78.6992 7.563 80.9892 5.27564 79.9537C2.98827 78.9182 3.62876 76.3008 4.23493 75.1216M2.62514 65.3593C4.42243 61.4575 5.38341 53.0979 3.73081 45.036C1.40807 33.705 8.08057 15.7958 26.7228 21.7564C47.8051 28.4972 39.0525 45.4052 35.0973 49.2216C31.3261 52.8604 20.7473 59.8739 16.1212 70.5347M2.62514 65.3593C3.62119 65.308 5.61121 65.5446 8.22489 66.453M16.1212 70.5347C14.6844 69.5459 13.2706 68.741 11.9696 68.0788M11.9696 68.0788C13.6076 61.7014 18.1327 50.8361 22.955 44.9317M11.9696 68.0788C10.6115 67.3875 9.37351 66.8522 8.22489 66.453M22.955 44.9317C24.6096 42.9059 26.2991 41.4641 27.9189 40.9879C35.5234 38.7525 28.4242 49.0509 22.955 44.9317ZM22.955 44.9317C22.7234 44.7572 22.4948 44.5569 22.2702 44.3288C21.3903 43.4344 20.7788 42.4646 20.3839 41.4637M20.3839 41.4637C18.2986 36.1787 22.251 30.0253 24.5979 29.5164C27.3036 28.9297 30.1104 34.535 20.3839 41.4637ZM20.3839 41.4637C20.0761 41.683 19.7557 41.9036 19.4224 42.1254C18.6521 42.5343 17.3963 42.8187 16.0975 42.7137M16.0975 42.7137C13.6586 42.5165 11.0683 40.9461 11.2581 36.2487C11.3127 34.8974 12.8254 32.1612 15.1851 35.2231C16.3215 36.6976 16.5341 39.3596 16.0975 42.7137ZM16.0975 42.7137C15.2499 49.2266 11.955 58.349 8.22489 66.453M32.8364 28.8851C34.2849 30.0601 36.958 33.3054 36.0631 36.8874M35.2601 39.9969L33.8362 43.0903M11.6251 13.6182L8.19635 7.10068M28.1973 10.7845L28.7688 2M51.0552 30.0538L57.0559 28.9202M43.0552 16.4519L49.0555 10.5011" stroke="#CC554D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-36xqwagk></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="65" height="54" viewBox="0 0 65 54" fill="none" class="absolute right-0 bottom-0 size-9 sm:size-14 md:size-20" data-astro-cid-36xqwagk> <path d="M12.0778 13.547L26.741 35.4953L48.8605 34.4404M12.0778 13.547L4.58685 2.33425L40.5217 6.49499L62.5684 33.7866L48.8605 34.4404M12.0778 13.547C10.355 14.1965 6.632 16.6191 3.47968 21.5289M48.8605 34.4404C49.647 38.1453 47.7339 43.2353 45.8205 46.951M3.47968 21.5289C2.81477 22.5645 2.17524 23.7107 1.58524 24.9743C6.1616 32.305 21.021 47.6429 43.8478 50.3495C44.4165 49.4925 45.1185 48.3142 45.8205 46.951M3.47968 21.5289C8.72059 29.4542 24.526 45.6342 45.8205 46.951M37.1302 16.6798C45.2142 21.0244 60.274 32.1645 55.8404 41.9681M55.8404 41.9681L52.935 43.2789M55.8404 41.9681L49.9214 48.8022M55.8404 41.9681L50.6222 51.6672M55.8404 41.9681L52.7186 51.7038M11.5296 5.89172L19.5982 7.06991M22.2743 7.14904L25.2604 7.71984M37.3191 14.349C37.7006 14.418 38.4066 15.2359 38.1144 16.0486C37.6626 17.3051 36.4681 16.8934 35.9708 16.5948C35.081 16.0605 35.1351 13.9543 37.3191 14.349Z" stroke="#CC554D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-36xqwagk></path> </svg> </div> </div> </div> </section>  <script>
  const form = document.querySelector("[data-hero-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Hide all previous errors
      form
        .querySelectorAll("[data-error]")
        .forEach((p) => p.classList.add("hidden"));

      const studentName = form
        .querySelector('input[name="studentName"]')
        .value.trim();
      const grade = form.querySelector('input[name="grade"]').value.trim(); // \u2705 hidden input from custom dropdown
      const phone = form.querySelector('input[name="phone"]').value.trim();

      let hasError = false;

      // Student Name Validation
      if (!studentName) {
        form.querySelector("#studentName-error").classList.remove("hidden");
        hasError = true;
      }

      // Grade Validation (from custom dropdown hidden input)
      if (!grade) {
        form.querySelector("#grade-error").classList.remove("hidden");
        hasError = true;
      }

      // Phone Validation (10-digit)
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone)) {
        form.querySelector("#phone-error").classList.remove("hidden");
        hasError = true;
      }

      if (!hasError) {
        // \u2705 All good \u2014 you can call your API here
        console.log("\u2705 Valid form data:", { studentName, grade, phone });

        // Example placeholder for API call:
        // await admissionEnquiryRequest({ studentName, grade, phone });
      }
    });
  }
<\/script>`])), maybeRenderHead(), renderComponent($$result, "CommonHeader", $$CommonHeader, { "title": title, "data-astro-cid-36xqwagk": true }), formTitle, renderComponent($$result, "CustomSelect", $$CustomSelect, { "data-astro-cid-36xqwagk": true }), buttonText, brochureText, addAttribute(childrenImage, "src"));
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/home/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Stats", $$Stats, {})} ${renderComponent($$result2, "Learning360", $$Learning360, {})} ${renderComponent($$result2, "BookATour", $$BookATour, {})} ${renderComponent($$result2, "Results", $$Results, {})} ${renderComponent($$result2, "Placements", $$Placements, {})} ${renderComponent($$result2, "Awards", $$Awards, {})} ${renderComponent($$result2, "OurCampuses", $$OurCampuses, {})} ${renderComponent($$result2, "Ethos", $$Ethos, {})} ${renderComponent($$result2, "Founder", $$Founder, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "News", $$News, {})} ${renderComponent($$result2, "Partners", $$Partners, {})} ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
