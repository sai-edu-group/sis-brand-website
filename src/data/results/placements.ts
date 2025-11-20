// DATA //
import { URLS } from "@/infrastructure/constants/urls";

// TYPES //
import type { BreadcrumbData, SectionHeaderMainData } from "@/types/common";
import type { PlacementData } from "@/types/results/results";

export const placements: PlacementData[] = [
  {
    id: 1,
    name: "2025 Batch",
    image: "/images/results/placements/2025-batch.jpg",
  },
  {
    id: 2,
    name: "2024 Batch",
    image: "/images/results/placements/2024-batch.jpg",
  },
  {
    id: 3,
    name: "2023 Batch",
    image: "/images/results/placements/2023-batch.jpg",
  },
  {
    id: 4,
    name: "2022 Batch",
    image: "/images/results/placements/2022-batch.jpg",
  },
  {
    id: 5,
    name: "2021 Batch",
    image: "/images/results/placements/2021-batch.jpg",
  },
  {
    id: 6,
    name: "2020 Batch",
    image: "/images/results/placements/2020-batch.jpg",
  },
];

export const placementsSectionHeader: SectionHeaderMainData = {
  title: "Guiding Futures Beyond School",
  subtitle:
    "Our students excel at top national and global institutions, reflecting SAI’s focus on holistic growth and future readiness.",
};

export const placementsBreadcrumbItems: BreadcrumbData[] = [
  {
    label: "Placements",
    href: URLS.RESULTS.PLACEMENTS,
  },
];
