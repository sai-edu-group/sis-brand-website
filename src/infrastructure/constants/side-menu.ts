// CONSTANTS //
import { URLS } from "@/infrastructure/constants/urls";

// TYPES //
export interface SubMenuItemData {
  title: string;
  href: string;
  active?: boolean;
}
export interface MenuItemData {
  title: string;
  active?: boolean;
  submenu?: SubMenuItemData[];
  icon?: string;
}

export const menu: MenuItemData[] = [
  {
    title: "HOME",
    submenu: [
      { title: "Ethos of SAI", href: `${URLS.HOME}#ethos` },
      { title: "Guru Shishya Parampara", href: `${URLS.HOME}#ethos` },
      { title: "Our Founder", href: `${URLS.HOME}#our-founder` },
      { title: "Learning @360", href: `${URLS.HOME}#learning-360` },
      { title: "Awards", href: `${URLS.HOME}#awards` },
      // { title: "Our Affiliations", href: "#", active: true },
    ],
    icon: "home",
    active: true,
  },
  {
    title: "ABOUT US",
    submenu: [
      { title: "The Perfect Master", href: `${URLS.ABOUT.ROOT}#ethos` },
      // { title: "Vision, Mission & Values", href: "#" },
      { title: "Founder – Chairman", href: `${URLS.ABOUT.ROOT}#our-founder` },
      { title: "Key Personnel", href: `${URLS.ABOUT.ROOT}#key-personnel` },
      { title: "Advisory Board", href: `${URLS.ABOUT.ROOT}#advisory-board` },
      { title: "Learning & Beyond", href: URLS.ABOUT.LEARNING_AND_BEYOND.ROOT },
      { title: "Our Affiliations", href: "/about/affiliations", active: true },
    ],
    icon: "about",
  },
  {
    title: "RESULTS",
    submenu: [
      { title: "Academic Achievements", href: URLS.RESULTS.CBSE_12.ROOT },
      { title: "Sports Performance", href: "#" },
      { title: "University Rankers", href: "#" },
      { title: "International Awards", href: "#" },
    ],
    icon: "results",
  },
  {
    title: "GLOBAL CONNECT",
    submenu: [
      { title: "Global Vision", href: URLS.GLOBAL_CONNECT.GLOBAL_VISION },
      { title: "Global Programs", href: URLS.GLOBAL_CONNECT.PROGRAMS.ROOT },
      { title: "Global Partners", href: URLS.GLOBAL_CONNECT.PARTNERS.ROOT },
      {
        title: "Advanced Placements",
        href: URLS.GLOBAL_CONNECT.ADVANCED_PLACEMENTS,
      },
    ],
    icon: "globe",
  },
  // {
  //   title: "STUDENT LEADERS",
  //   submenu: [
  //     { title: "Leadership Council", href: "#" },
  //     { title: "Class Representatives", href: "#" },
  //     { title: "Ambassador Programs", href: "#" },
  //   ],
  //   icon: "leaders",
  // },
  {
    title: "MEDIA",
    submenu: [
      { title: "News", href: URLS.MEDIA.NEWS.ROOT },
      { title: "Press Releases", href: URLS.MEDIA.PRESS_RELEASE },
      { title: "News Bulletin", href: URLS.MEDIA.NEWS_BULLETIN.ROOT },
      { title: "Albums", href: URLS.MEDIA.ALBUMS.ROOT },
      { title: "Radio Orange", href: URLS.MEDIA.RADIO_ORANGE },
      { title: "SAI TV", href: URLS.MEDIA.SAI_TV },
    ],
    icon: "media",
  },
  // {
  //   title: "ALUMNI",
  //   submenu: [
  //     { title: "Success Stories", href: "#" },
  //     { title: "Reunions", href: "#" },
  //     { title: "Alumni Association", href: "#" },
  //   ],
  //   icon: "alumni",
  // },
  {
    title: "ADMISSIONS",
    submenu: [
      { title: "How to Apply", href: `${URLS.ADMISSIONS.ROOT}#how-to-apply` },
      {
        title: "Transfer Certificates",
        href: URLS.ADMISSIONS.TRANSFER_CERTIFICATES,
      },
      // { title: "Courses Offered", href: "#" },
      // { title: "Fee Structure", href: "#" },
      // { title: "Scholarships", href: "#" },
    ],
    icon: "admissions",
  },
];
