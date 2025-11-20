const URLS = {
  HOME: "/",
  ABOUT: {
    ROOT: "/about",
    LEARNING_360: {
      ITEM: (learning360id, name) => `/about/learning-360/${learning360id}/${name}`
    },
    LEARNING_AND_BEYOND: {
      ROOT: "/about/learning-and-beyond",
      AMENITY: (amenityId) => `/about/learning-and-beyond/amenities/${amenityId}`,
      CURRICULUM: (curriculumId) => `/about/learning-and-beyond/curriculum/${curriculumId}`,
      SAI_SEVA: (sevaId) => `/about/learning-and-beyond/sai-seva/${sevaId}`,
      FLAGSHIP_EVENT: (eventId) => `/about/learning-and-beyond/flagship-events/${eventId}`
    },
    AFFILIATIONS: {
      ROOT: "/about/affliations",
      ITEM: (name) => `/about/affiliations/${name}`
    }},
  AWARDS: "/awards",
  CASE_STUDIES: {
    IIM: "/case/studies/iim"
  },
  RESULTS: {
    CBSE_12: {
      ROOT: "/results/cbse-12th",
      STREAM: (streamId) => `/results/cbse-12th/${streamId}`
    },
    CBSE_10: "/results/cbse-10th",
    CAREER_RESULTS: {
      ROOT: "/results/career-results",
      EXAM: (exam) => `/results/career-results/${exam}`
    },
    PLACEMENTS: "/results/placements"
  },
  GLOBAL_CONNECT: {
    ROOT: "/global-connect",
    GLOBAL_VISION: "/global-connect/global-vision",
    PROGRAMS: {
      ROOT: "/global-connect/global-programs",
      ITEM: (programId) => `/global-connect/global-programs/${programId}`
    },
    PARTNERS: {
      ROOT: "/global-connect/global-partners",
      ITEM: (partnerId) => `/global-connect/global-partners/${partnerId}`
    },
    ADVANCED_PLACEMENTS: "/global-connect/advanced-placements"
  },
  STUDENT_LEADERS: {
    STUDENT_COUNCIL: "/student-leaders/student-council",
    GLOBAL_SIONEERS: "/student-leaders/global-sioneers",
    ICONS_ACHIEVERS: "/student-leaders/icons-and-achievers"
  },
  MEDIA: {
    ROOT: "/media",
    NEWS: {
      ROOT: "/media/news"},
    PRESS_RELEASE: "/media/press-release",
    NEWS_BULLETIN: {
      ROOT: "/media/news-bulletin"},
    ALBUMS: {
      ROOT: "/media/albums"},
    RADIO_ORANGE: "/media/radio-orange",
    SAI_TV: "/media/sai-tv"
  },
  ADMISSIONS: {
    ROOT: "/admissions"}
};

export { URLS as U };
