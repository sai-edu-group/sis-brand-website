// TYPES //
import type { BreadcrumbData } from "@/types/common";
import type { GlobalSioneersData } from "@/types/student-leaders/global-sioneers";

// CONSTANTS //
import { URLS } from "@/infrastructure/constants/urls";

// Breadcrumbs
export const globalSioneersBreadcrumbItems: BreadcrumbData[] = [
  {
    label: "Student Leaders",
    href: URLS.STUDENT_LEADERS.ROOT,
  },
  {
    label: "Global Sioneers",
    href: URLS.STUDENT_LEADERS.GLOBAL_SIONEERS,
  },
];

// Section Header
export const globalSioneersSectionHeader = {
  title: "Global Sioneers",
  subtitle:
    "Celebrating students who secured admissions to leading universities across the world.",
};

// Global Sioneers - Items (Every Year)
export const globalSioneers: GlobalSioneersData = {
  years: [2025, 2024, 2023, 2022, 2021, 2020],
  globalSioneers: {
    2025: [
      {
        id: 1,
        name: "John Doe",
        image: "/images/student-leaders/global-sioneers/2025/1.png",
        year: 2025,
        instituteName: "John Doe",
      },
      {
        id: 2,
        name: "John Doe",
        image: "/images/student-leaders/global-sioneers/2025/2.png",
        year: 2025,
        instituteName: "John Doe",
      },
    ],
    2024: [
      {
        id: 1,
        name: "John Doe",
        image: "/images/student-leaders/global-sioneers/2024/1.png",
        year: 2024,
        instituteName: "John Doe",
      },
      {
        id: 2,
        name: "John Doe",
        image: "/images/student-leaders/global-sioneers/2024/2.png",
        year: 2024,
        instituteName: "John Doe",
      },
    ],
  },
};
