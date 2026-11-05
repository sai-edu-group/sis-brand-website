/**
 * SEO titles and descriptions for routes that have no static file in
 * src/data/meta because they are generated from getStaticPaths or an API:
 * people pages, learning-and-beyond details, affiliation details, global
 * programme/partner details, articles and albums.
 *
 * Keys are lowercase, with no trailing slash. Id-keyed routes are stored at
 * their id prefix ("/media/albums/129") so the article slug after it, which
 * comes from the CMS and contains punctuation, does not have to match.
 */
export interface PageSeo {
  title: string;
  description: string;
}

const byPath: Record<string, PageSeo> = {
  // ---- People: team, founder, advisory ----
  "/about/team/dr.-silpi-sahoo": {
    title: "Dr. Silpi Sahoo, Chairperson | SAI International",
    description:
      "Read about Dr. Silpi Sahoo, Chairperson of SAI International Education Group, and her commitment to creative, inclusive and joyful learning.",
  },
  "/about/team/shri-nilakantha-panigrahi": {
    title: "Nilakantha Panigrahi | SAI International School",
    description:
      "Meet Shri Nilakantha Panigrahi, Director Academics and Senior Principal at SAI International School, and read about his educational journey.",
  },
  "/about/team/shri-prakash-sahoo": {
    title: "Prakash Sahoo | SAI International School",
    description:
      "Shri Prakash Sahoo, Associate Director and Principal Secondary at SAI International School, and his approach to education.",
  },
  "/about/team/smt-rashmi-pandey": {
    title: "Rashmi Pandey | SAI International School",
    description:
      "Smt. Rashmi Pandey, Associate Director and Principal Primary, and learn about her work in early learning and child development.",
  },
  "/about/founder/late-dr.-bijaya-kumar-sahoo": {
    title: "Dr. Bijaya Kumar Sahoo: Founder | SAI International",
    description:
      "Read about Late Dr. Bijaya Kumar Sahoo, founder of SAI International Education Group, and his vision for happy, holistic learning.",
  },
  "/about/advisory/dr.-c.b.-satpathy": {
    title: "Dr. C.B. Satpathy | SAI International Advisory Board",
    description:
      "Dr. C.B. Satpathy, spiritual thinker, writer and philanthropist, on SAI International School's advisory board.",
  },
  "/about/advisory/dr.-prasant-mohapatra": {
    title: "Dr. Prasant Mohapatra | SAI International Advisory Board",
    description:
      "Dr. Prasant Mohapatra's academic background, research and professional journey on SAI International School's advisory board.",
  },
  "/about/advisory/ca-p.r.-ramesh": {
    title: "CA P.R. Ramesh | SAI International Advisory Board",
    description:
      "CA P.R. Ramesh, former Chairman of Deloitte India and a member of SAI International School's advisory board.",
  },
  "/about/advisory/dr.-damodar-acharya": {
    title: "Dr. Damodar Acharya | SAI International Advisory Board",
    description:
      "Dr. Damodar Acharya, former IIT Kharagpur Director and AICTE Chairman, on SAI International School's advisory board.",
  },
  "/about/advisory/dr.-p.c.-jain": {
    title: "Dr. P.C. Jain | SAI International Advisory Board",
    description:
      "Dr. P.C. Jain, former Principal of SRCC, and his experience in education on SAI International School's advisory board.",
  },
  "/about/advisory/shri-amitabh-jhingan": {
    title: "Amitabh Jhingan | SAI International Advisory Board",
    description:
      "Shri Amitabh Jhingan's experience in education, strategy and management on SAI International School's advisory board.",
  },
  "/about/advisory/shri-rakesh-sethi": {
    title: "Rakesh Sethi | SAI International Advisory Board",
    description:
      "Shri Rakesh Sethi, former Chairman and Managing Director of Allahabad Bank, on SAI International School's advisory board.",
  },
  "/about/advisory/ms.-ameeta-mulla-wattal": {
    title: "Ameeta Mulla Wattal | SAI International Advisory Board",
    description:
      "Know Ms. Ameeta Mulla Wattal's contributions to education and school leadership as part of SAI International School's advisory board.",
  },
  "/about/advisory/shri-ronesh-puri": {
    title: "Ronesh Puri | SAI International Advisory Board",
    description:
      "Read about Shri Ronesh Puri, Managing Director of Executive Access, and his leadership experience on SAI International's advisory board.",
  },

  // ---- Learning & Beyond: curriculum ----
  "/about/learning-and-beyond/curriculum/laboratories": {
    title: "School Laboratories | SAI International School",
    description:
      "See how SAI International School's laboratories connect classroom concepts with experiments, practical learning and scientific enquiry.",
  },
  "/about/learning-and-beyond/curriculum/learning-resource-centers": {
    title: "Libraries & Learning Resources | SAI International",
    description:
      "Explore SAI International School's Learning Resource Centers, with books and reading materials for junior and senior students.",
  },
  "/about/learning-and-beyond/curriculum/sports": {
    title: "School Sports Facilities | SAI International School",
    description:
      "Experience sports at SAI International School, with swimming, football, chess, athletics, and indoor and outdoor facilities.",
  },
  "/about/learning-and-beyond/curriculum/performing-arts": {
    title: "Performing Arts: Music & Dance | SAI International",
    description:
      "Learn about music and dance at SAI International School, where dedicated labs help students develop creativity, expression and confidence.",
  },
  "/about/learning-and-beyond/curriculum/fine-arts": {
    title: "Fine Arts & Art Lab | SAI International School",
    description:
      "Explore fine arts at SAI International School, where the art lab develops drawing, painting and visual expression.",
  },
  "/about/learning-and-beyond/curriculum/steam": {
    title: "STEAM Education | SAI International School",
    description:
      "See how SAI International School combines science, technology, engineering, art and mathematics through practical, interdisciplinary learning.",
  },

  // ---- Learning & Beyond: amenities ----
  "/about/learning-and-beyond/amenities/hostel": {
    title: "School Hostel in Bhubaneswar | SAI International",
    description:
      "SAI International School, Bhubaneswar offers separate air-conditioned hostel accommodation for boys and girls in a supportive setting.",
  },
  "/about/learning-and-beyond/amenities/cafeteria": {
    title: "School Cafeteria & Dining | SAI International School",
    description:
      "SAI International School's cafeteria, offering a comfortable dining space and nutritious meals to support student well-being.",
  },
  "/about/learning-and-beyond/amenities/auditoriums": {
    title: "School Auditoriums | SAI International School",
    description:
      "See SAI International School's auditoriums, designed for assemblies, seminars, cultural performances and student celebrations.",
  },
  "/about/learning-and-beyond/amenities/infirmary": {
    title: "School Infirmary & Medical Care | SAI International",
    description:
      "SAI International School's infirmary, with an on-site doctor and nursing staff available during school hours.",
  },
  "/about/learning-and-beyond/amenities/sustainable-development": {
    title: "Sustainability on Campus | SAI International School",
    description:
      "See how SAI International School teaches environmental responsibility through campus practices, rainwater harvesting and hands-on learning.",
  },
  "/about/learning-and-beyond/amenities/steam": {
    title: "STEAM Learning Facilities | SAI International School",
    description:
      "Explore spaces for science, technology, engineering, art and mathematics at SAI International School, supporting hands-on learning.",
  },

  // ---- Learning & Beyond: SAI Seva ----
  "/about/learning-and-beyond/sai-seva/dr.-b-k-sahoo-100-libraries": {
    title: "Dr. B.K. Sahoo 100 Libraries Project | SAI International",
    description:
      "Dr. B.K. Sahoo 100 Libraries Project, helping children in resource-constrained schools access books and develop a love of reading.",
  },
  "/about/learning-and-beyond/sai-seva/initiatives": {
    title: "SAI SEVA Community Initiatives | SAI International",
    description:
      "SAI SEVA initiatives involve students in community service, environmental care and activities that build empathy and social responsibility.",
  },
  "/about/learning-and-beyond/sai-seva/projects": {
    title: "SAI SEVA Community Projects | SAI International School",
    description:
      "SAI SEVA's collaborative projects, including teacher training for special schools, sensory learning walls and inclusive education.",
  },
  "/about/learning-and-beyond/sai-seva/recognitions": {
    title: "SAI SEVA Awards & Recognition | SAI International",
    description:
      "View recognition for SAI International School's community service work, including QCI, Dadasaheb Phalke Film Festival and Disney I CAN awards.",
  },

  // ---- Learning & Beyond: flagship events ----
  "/about/learning-and-beyond/flagship-events/founder’s-memorial-series": {
    title: "Founder's Memorial Series | SAI International School",
    description:
      "SAI International's Founder's Memorial Series, honouring Dr. Bijaya Kumar Sahoo through activities that reflect his values and vision.",
  },
  "/about/learning-and-beyond/flagship-events/saimun": {
    title: "SAIMUN: Model United Nations | SAI International School",
    description:
      "Experience SAIMUN at SAI International School, where students debate global issues and develop diplomacy, negotiation, and leadership skills.",
  },
  "/about/learning-and-beyond/flagship-events/sai-unwind": {
    title: "SAI UNWIND: Student-Led Festival | SAI International",
    description:
      "SAI UNWIND is a student-led festival with food, games and performances that develops leadership and supports community projects.",
  },
  "/about/learning-and-beyond/flagship-events/saited": {
    title: "SAITED: Science & Technology Conclave | SAI International",
    description:
      "SAITED brings together student-led talks, science projects, competitions, and hands-on workshops at SAI International School.",
  },
  "/about/learning-and-beyond/flagship-events/sai-confluence": {
    title: "SAI Confluence: Cultural Event | SAI International",
    description:
      "SAI Confluence, the cultural event at SAI International School that gives every student an opportunity to perform on stage.",
  },
  "/about/learning-and-beyond/flagship-events/sai-olympics": {
    title: "SAI Olympics: Annual Sports Meet | SAI International",
    description:
      "SAI Olympics, SAI International School's annual sports meet, celebrating athletic talent, teamwork and sportsmanship.",
  },

  // ---- Affiliation details ----
  "/about/affiliations/cbse": {
    title: "CBSE Affiliated School in Bhubaneswar | SAI International",
    description:
      "Choose a CBSE affiliated school in Bhubaneswar offering holistic education, modern facilities, and a supportive learning environment.",
  },
  "/about/affiliations/igcse": {
    title: "Cambridge IGCSE School in Bhubaneswar | SAI International",
    description:
      "Cambridge education at SAI International School includes IGCSE and AS & A Level pathways for students in Bhubaneswar.",
  },

  // ---- Global connect details ----
  "/global-connect/global-programs/1": {
    title: "Global Immersion Programme | SAI International School",
    description:
      "The Global Immersion Programme at SAI International School offers students opportunities to connect with overseas schools and cultures.",
  },
  "/global-connect/global-programs/2": {
    title: "Global School Partnerships | SAI International School",
    description:
      "See how SAI International School connects students and teachers with partner schools through visits, shared projects and virtual classes.",
  },
  "/global-connect/global-programs/3": {
    title: "SAIoneer EXIM: Student-Led Trade | SAI International",
    description:
      "SAI International School's SAIoneer EXIM gives students experience in global trade by exchanging goods with student companies abroad.",
  },
  "/global-connect/global-partners/1": {
    title: "UNESCO ASPnet Membership | SAI International School",
    description:
      "UNESCO ASPnet membership at SAI International School supports peace, intercultural understanding, and sustainable development.",
  },
  "/global-connect/global-partners/2": {
    title: "Cambridge English Assessments | SAI International School",
    description:
      "Cambridge English assessments at SAI International School build students' listening, reading, writing, and speaking skills.",
  },
  "/global-connect/global-partners/3": {
    title: "British Council Partnership | SAI International School",
    description:
      "The British Council partnership at SAI International School promotes international learning, teacher development, and student activities.",
  },
  "/global-connect/global-partners/4": {
    title: "Round Square School | SAI International School",
    description:
      "See how SAI International School's Round Square membership connects students with conferences, exchanges, service and leadership opportunities.",
  },
  "/global-connect/global-partners/5": {
    title: "AFS Student Exchange | SAI International School",
    description:
      "SAI International School's AFS membership supports student exchange, cultural understanding, global connections, and international learning.",
  },
  "/global-connect/global-partners/6": {
    title: "SAT Test Centre in Bhubaneswar | SAI International",
    description:
      "Find information about SAI International School's SAT test centre in Bhubaneswar. Contact the school for current testing arrangements.",
  },
  "/global-connect/global-partners/7": {
    title: "Cambridge Admissions Assessments | SAI International",
    description:
      "Cambridge admissions at SAI International School include assessment information and guidance on current test availability.",
  },

  // ---- Albums (id-keyed) ----
  "/media/albums/129": {
    title: "Repertoire 2026 Photo Gallery | SAI International School",
    description:
      "View photos from Repertoire 2026 at SAI International School and revisit moments from the event.",
  },
  "/media/albums/128": {
    title: "Republic Day 2026 Photos | SAI International School",
    description:
      "Browse photos from SAI International School's Republic Day 2026 celebrations in the school event gallery.",
  },

  // ---- News articles (id-keyed) ----
  "/media/news-and-blogs/728": {
    title: "Punyajit Mishra Wins GQMC 2026 Gold | SAI International",
    description:
      "Punyajit Mishra earns Gold Honour in the Global Quantum Mechanics Challenge 2026, ranking among the top 1% of participants.",
  },
  "/media/news-and-blogs/729": {
    title: "Science Model Competition 2026 | SAI International",
    description:
      "Science Model Competition 2026 features 46 student projects addressing scientific ideas and real-world challenges.",
  },
  "/media/news-and-blogs/726": {
    title: "Youth Day: Beyond the Screen | SAI International School",
    description:
      "SAI's Going Global Club marks International Youth Day with a public presentation on mobile addiction and the value of real connections.",
  },
  "/media/news-and-blogs/727": {
    title: "U-11 Girls Chess Runners-Up | SAI International School",
    description:
      "SAI International School's U-11 girls finished second at the CBSE Far East Zone Team Chess Championship 2026–27.",
  },
  "/media/news-and-blogs/725": {
    title: "QS I-GAUGE Diamond Rating | SAI International School",
    description:
      "SAI International School receives the QS I-GAUGE Diamond Rating at the National Summit on AI in Indian Education in Gandhinagar.",
  },
  "/media/news-and-blogs/723": {
    title: "Best Non-NCC School Award 2026 | SAI International",
    description:
      "SAI International School is named Best Non-NCC School for boys and girls at Odisha's State-Level Parade 2026.",
  },
  "/media/news-and-blogs/724": {
    title: "SAI Gifted Programme 2026: Theatre & Diplomacy",
    description:
      "Read how the SAI Gifted Programme 2026 builds confidence and global thinking through theatre, diplomacy and strategic negotiation.",
  },
  "/media/news-and-blogs/722": {
    title: "SAIoneers at HMUN India 2026 | SAI International School",
    description:
      "Follow SAIoneers at HMUN India 2026 in Bengaluru as they engage with global issues through debate, negotiation and collaboration.",
  },
  "/media/news-and-blogs/719": {
    title: "Cyber Safety Workshop | SAI International School",
    description:
      "SAI International School hosts a cyber safety workshop for Classes VII–IX with Bhubaneswar-Cuttack Police on responsible online behaviour.",
  },
  "/media/news-and-blogs/720": {
    title: "CBSE Zonal Skating Medals 2026–27 | SAI International",
    description:
      "SAIoneers Titiksha Lenka and Rudranshi Mohanty won medals at the CBSE Far East Zone Skating Competition 2026–27.",
  },
  "/media/news-and-blogs/721": {
    title: "Round Square Conference 2026 | SAIoneers in Trivandrum",
    description:
      "SAIoneers travel to Trivandrum for the Round Square Conference 2026, building friendships and sharing new learning experiences.",
  },
  "/media/news-and-blogs/730": {
    title: "Gap Year: Right or Privilege? | SAI International School",
    description:
      "Read about a Round Square dialogue on gap years, exploring choice, opportunity and access with the SAI International School community.",
  },
};

function normalize(pathname: string): string {
  let path = pathname;
  try {
    path = decodeURIComponent(path);
  } catch {
    // leave the raw pathname if it contains a malformed escape
  }
  return path.replace(/\/+$/, "").toLowerCase();
}

/**
 * Returns the brief's SEO copy for a route, or undefined so the caller falls
 * back to its own data or the site defaults.
 */
export function findPageSeo(pathname: string): PageSeo | undefined {
  const key = normalize(pathname);
  if (byPath[key]) return byPath[key];

  const prefixMatch = Object.keys(byPath)
    .filter((candidate) => key.startsWith(`${candidate}/`))
    .sort((a, b) => b.length - a.length)[0];

  return prefixMatch ? byPath[prefixMatch] : undefined;
}
