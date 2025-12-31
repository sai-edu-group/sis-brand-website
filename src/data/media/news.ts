// TYPES //
import type { BreadcrumbData, SectionHeaderMainData } from "@/types/common";
import type { NewsData } from "@/types/media/news";

// CONSTANTS //
import { URLS } from "@/infrastructure/constants/urls";

export const newsDetails: NewsData = {
  id: 7,
  years: [2025, 2024, 2023],
  news: {
    2025: [
      {
        id: 1,
        title:
          "SAI Alumni Inspire Students with Insights on Redefining Modern Success",
        img: "/images/news/alumini-talk-thumbnail.jpg",
        thumbnailImg: "/images/news/alumini-talk-thumbnail.jpg",
        topText: "By SAI Admin",
        tags: ["Alumni", "Career Guidance", "Inspiration"],
        author: "Sai Admin",
        date: "08 November, 2025",
        readTimeMins: 8,
        content: `<p class="fade-in">As part of the 4th Founder’s Memorial Talk – “A Journey of Purpose”, SAI International School witnessed a moment of deep reverence and pride with the unveiling of the Coffee Table Book that beautifully chronicles the extraordinary life, vision, and legacy of its Founder, Dr. Bijaya Kumar Sahoo.
</p><p class="fade-in">As part of the 4th Founder’s Memorial Talk – “A Journey of Purpose”, SAI International School witnessed a moment of deep reverence and pride with the unveiling of the Coffee Table Book that beautifully chronicles the extraordinary life, vision, and legacy of its Founder, Dr. Bijaya Kumar Sahoo.
</p><p class="fade-in">As part of the 4th Founder’s Memorial Talk – “A Journey of Purpose”, SAI International School witnessed a moment of deep reverence and pride with the unveiling of the Coffee Table Book that beautifully chronicles the extraordinary life, vision, and legacy of its Founder, Dr. Bijaya Kumar Sahoo.
</p>
        `,
        landscapeImg: "/images/news/alumini-talk-thumbnail.jpg",
      },
      {
        id: 2,
        title:
          "SAI Alumni Inspire Students with Insights on Redefining Modern Success",
        img: "/images/news/alumini-talk-thumbnail.jpg",
        thumbnailImg: "/images/news/alumini-talk-thumbnail.jpg",
        topText: "By SAI Admin",
        tags: ["Alumni", "Career Guidance", "Inspiration"],
        author: "Sai Admin",
        date: "08 November, 2025",
        readTimeMins: 8,
        content: `<p class="fade-in">As part of the 4th Founder’s Memorial Talk – “A Journey of Purpose”, SAI International School witnessed a moment of deep reverence and pride with the unveiling of the Coffee Table Book that beautifully chronicles the extraordinary life, vision, and legacy of its Founder, Dr. Bijaya Kumar Sahoo.
</p><p class="fade-in">As part of the 4th Founder’s Memorial Talk – “A Journey of Purpose”, SAI International School witnessed a moment of deep reverence and pride with the unveiling of the Coffee Table Book that beautifully chronicles the extraordinary life, vision, and legacy of its Founder, Dr. Bijaya Kumar Sahoo.
</p><p class="fade-in">As part of the 4th Founder’s Memorial Talk – “A Journey of Purpose”, SAI International School witnessed a moment of deep reverence and pride with the unveiling of the Coffee Table Book that beautifully chronicles the extraordinary life, vision, and legacy of its Founder, Dr. Bijaya Kumar Sahoo.
</p>
        `,
        landscapeImg: "/images/news/alumini-talk-thumbnail.jpg",
      },
    ],
    2024: [
      {
        id: 1,
        title:
          "SAI Alumni Inspire Students with Insights on Redefining Modern Success",
        img: "/images/news/alumini-talk-thumbnail.jpg",
        thumbnailImg: "/images/news/alumini-talk-thumbnail.jpg",
        topText: "By SAI Admin",
        tags: ["Alumni", "Career Guidance", "Inspiration"],
        author: "Sai Admin",
        date: "08 November, 2025",
        readTimeMins: 8,
        content: `<p class="fade-in">As part of the 4th Founder’s Memorial Talk – “A Journey of Purpose”, SAI International School witnessed a moment of deep reverence and pride with the unveiling of the Coffee Table Book that beautifully chronicles the extraordinary life, vision, and legacy of its Founder, Dr. Bijaya Kumar Sahoo.
</p><p class="fade-in">As part of the 4th Founder’s Memorial Talk – “A Journey of Purpose”, SAI International School witnessed a moment of deep reverence and pride with the unveiling of the Coffee Table Book that beautifully chronicles the extraordinary life, vision, and legacy of its Founder, Dr. Bijaya Kumar Sahoo.
</p><p class="fade-in">As part of the 4th Founder’s Memorial Talk – “A Journey of Purpose”, SAI International School witnessed a moment of deep reverence and pride with the unveiling of the Coffee Table Book that beautifully chronicles the extraordinary life, vision, and legacy of its Founder, Dr. Bijaya Kumar Sahoo.
</p>
        `,
        landscapeImg: "/images/news/alumini-talk-thumbnail.jpg",
      },
    ],
  },
};

export const newsBreadcrumbItems: BreadcrumbData[] = [
  { label: "Media", href: URLS.MEDIA.ROOT },
  { label: "News", href: URLS.MEDIA.NEWS.ROOT },
];

export const newsSectionHeader: SectionHeaderMainData = {
  title: "The SAI Chronicle",
  eyebrowText: "Sai News",
  subtitle:
    "Discover the latest updates, thought leadership, and inspiring stories from the SAI community.",
};
