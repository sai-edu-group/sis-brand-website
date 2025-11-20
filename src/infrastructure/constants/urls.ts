export const URLS = {
  HOME: "/",

  ABOUT: {
    ROOT: "/about",

    LEARNING_360: {
      ITEM: (learning360id: string, name: string) =>
        `/about/learning-360/${learning360id}/${name}`,
    },

    LEARNING_AND_BEYOND: {
      ROOT: "/about/learning-and-beyond",
      AMENITY: (amenityId: string) =>
        `/about/learning-and-beyond/amenities/${amenityId}`,
      CURRICULUM: (curriculumId: string) =>
        `/about/learning-and-beyond/curriculum/${curriculumId}`,
      SAI_SEVA: (sevaId: string) =>
        `/about/learning-and-beyond/sai-seva/${sevaId}`,
      FLAGSHIP_EVENT: (eventId: string) =>
        `/about/learning-and-beyond/flagship-events/${eventId}`,
    },

    AFFILIATIONS: {
      ROOT: "/about/affliations",
      ITEM: (name: string) => `/about/affiliations/${name}`,
    },

    TEAM_MEMBER: (id: string, name: string) => `/about/team/${id}/${name}/`,

    ADVISOR: {
      ITEM: (id: string, name: string) => `/about/founder/${id}/${name}`,
    },
  },

  VISION_MISSION_VALUES: "/vision-mission-values",

  AWARDS: "/awards",

  CONTACT: "/contact",

  NEWS: {
    ROOT: "/news",
    ITEM: (id: string, title: string) => `/news/${id}/${title}`,
  },

  CASE_STUDIES: {
    ROOT: "/case-studies",
    IIM: "/case/studies/iim",
  },

  RESULTS: {
    CBSE_12: {
      ROOT: "/results/cbse-12th",
      SCIENCE: "/results/cbse-12th/science",
      COMMERCE: "/results/cbse-12th/commerce",
      HUMANITIES: "/results/cbse-12th/humanities",
    },

    CBSE_10: "/results/cbse-10th",

    CAREER_RESULTS: {
      ROOT: "/results/career-results",
      JEE: "/results/career-results/jee",
      NEET: "/results/career-results/neet",
    },

    PLACEMENTS: "/results/placements",
  },

  GLOBAL_CONNECT: {
    ROOT: "/global-connect",

    GLOBAL_VISION: "/global-connect/global-vision",

    PROGRAMS: {
      ROOT: "/global-connect/global-programs",
      ITEM: (programId: string) =>
        `/global-connect/global-programs/${programId}`,
    },

    PARTNERS: {
      ROOT: "/global-connect/global-partners",
      ITEM: (partnerId: string) =>
        `/global-connect/global-partners/${partnerId}`,
    },

    ADVANCED_PLACEMENTS: "/global-connect/advanced-placements",
  },

  STUDENT_LEADERS: {
    ROOT: "/student-leaders",
    STUDENT_COUNCIL: "/student-leaders/student-council",
    GLOBAL_SIONEERS: "/student-leaders/global-sioneers",
    ICONS_ACHIEVERS: "/student-leaders/icons-and-achievers",
  },

  MEDIA: {
    ROOT: "/media",

    NEWS: {
      ROOT: "/media/news",
      ITEM: (id: string, title: string) => `/media/news/${id}/${title}`,
    },

    ANNOUNCEMENTS: "/blogs/announcement",

    BLOGS: {
      ROOT: "/media/blogs",
      ITEM: (blogId: string, title: string) =>
        `/media/blogs/${blogId}/${title}`,
    },

    PRESS_RELEASE: "/media/press-release",

    NEWS_BULLETIN: {
      ROOT: "/media/news-bulletin",
      ITEM: (bulletinId: string) => `/media/news-bulletin/${bulletinId}`,
    },

    ALBUMS: {
      ROOT: "/media/albums",
      ITEM: (albumId: string) => `/media/albums/${albumId}`,
    },

    RADIO_ORANGE: "/media/radio-orange",
    SAI_TV: "/media/sai-tv",
  },

  ADMISSIONS: {
    ROOT: "/admissions",
    GUIDELINE: "/admissions/guideline",
    EWS: "/admissions/ews-admission",
    TRANSFER_CERTIFICATES: "/admissions/transfer-certificates",
  },
} as const;
