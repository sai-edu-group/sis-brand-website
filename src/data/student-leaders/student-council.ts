// TYPES //
import type { BreadcrumbData } from "@/types/common";
import type { StudentCouncilData } from "@/types/student-leaders/student-council";

// CONSTANTS //
import { URLS } from "@/infrastructure/constants/urls";

// Breadcrumbs
export const studentCouncilBreadcrumbItems: BreadcrumbData[] = [
  {
    label: "Student Council",
    href: URLS.STUDENT_LEADERS.STUDENT_COUNCIL,
  },
];

// Section Header
export const studentCouncilSectionHeader = {
  title: "Student Council",
  subtitle:
    "Empowering student leaders to represent, inspire, and drive positive change within the school community.",
};

// Student Council - Items (Every Year)
export const studentCouncil: StudentCouncilData = {
  years: [2025, 2024, 2023, 2022, 2021, 2020],
  studentCouncil: {
    2025: [
      {
        id: 1,
        name: "John Doe",
        image: "/images/student-leaders/student-council/2025/1.png",
        year: 2025,
        designation: "President",
      },
      {
        id: 2,
        name: "John Doe",
        image: "/images/student-leaders/student-council/2025/2.png",
        year: 2025,
        designation: "Vice President",
      },
    ],
    2024: [
      {
        id: 1,
        name: "John Doe",
        image: "/images/student-leaders/student-council/2024/1.png",
        year: 2024,
        designation: "President",
      },
      {
        id: 2,
        name: "John Doe",
        image: "/images/student-leaders/student-council/2024/2.png",
        year: 2024,
        designation: "Vice President",
      },
    ],
  },
};
