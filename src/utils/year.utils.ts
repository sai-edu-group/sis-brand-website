/** Represents one year option consumed by filter components. */
export type YearOptionData = {
  /** Query/API year value. */
  value: string | number;
  /** UI text shown in the filter. */
  label: string;
};

// En dash character used for academic ranges like 2025–2026.
const ACADEMIC_YEAR_SEPARATOR = "\u2013";
// Lower bound for accepted year values.
const MIN_ALLOWED_YEAR = 1900;
// Upper bound for accepted year values.
const MAX_ALLOWED_YEAR = 2100;

/** Returns true only for finite integer numbers. */
const isFiniteInteger = (value: number): boolean => {
  return Number.isFinite(value) && Number.isInteger(value);
};

/** Returns true for years that are integer and inside allowed range. */
const isValidYearNumber = (value: number): boolean => {
  return (
    // Reject NaN, Infinity, and decimal years.
    isFiniteInteger(value) &&
    // Reject years below business minimum.
    value >= MIN_ALLOWED_YEAR &&
    // Reject years above business maximum.
    value <= MAX_ALLOWED_YEAR
  );
};

/** Keeps only valid years from a configured year list. */
const sanitizeYearNumbers = (years: number[]): number[] => {
  return years.filter(isValidYearNumber);
};

/**
 * Formats an academic year range from start year to next year.
 * Example: 2025 -> "2025–2026"
 */
export const formatAcademicYearLabel = (year: number): string => {
  // Build range label: start year + en dash + end year.
  return `${year}${ACADEMIC_YEAR_SEPARATOR}${year + 1}`;
};

/**
 * Normalizes mixed year inputs into UI-safe string value/label objects.
 */
export const normalizeYearOptions = (
  years: Array<number | YearOptionData>,
): Array<{ value: string; label: string }> => {
  return years.map((yearOption) => {
    // Number input becomes plain year value and plain year label.
    if (typeof yearOption === "number") {
      return {
        // Convert to string for URL params and data attributes.
        value: yearOption.toString(),
        // Keep plain-year label for generic pages.
        label: yearOption.toString(),
      };
    }

    // Object input keeps custom label, normalizes value to string.
    return {
      value: yearOption.value.toString(),
      label: yearOption.label,
    };
  });
};

/**
 * Builds final filter options for generic pages.
 * Optionally prepends current year as plain-year label.
 */
export const buildFinalYearOptions = ({
  years,
  shouldIncludeCurrentYear,
  currentYear,
}: {
  years: Array<number | YearOptionData>;
  shouldIncludeCurrentYear: boolean;
  currentYear: number;
}): Array<{ value: string; label: string }> => {
  // First normalize all incoming values to one consistent shape.
  const baseYearOptions = normalizeYearOptions(years);

  // If auto-current-year is disabled, return only provided options.
  if (!shouldIncludeCurrentYear) {
    return baseYearOptions;
  }

  // Auto-generated current-year option for pages like media/results.
  const currentYearOption = {
    value: currentYear.toString(),
    label: currentYear.toString(),
  };

  // Put current year first and prevent duplicate entries.
  return [
    currentYearOption,
    ...baseYearOptions.filter(
      (yearOption) => yearOption.value !== currentYearOption.value,
    ),
  ];
};

/**
 * Builds guarded Awards filter options in academic-year format.
 * Keeps latest academic year stable and keeps current selected year visible.
 */
export const buildAwardAcademicYearOptions = ({
  configuredYears,
  selectedYear,
}: {
  configuredYears: number[];
  selectedYear: number;
}): Array<{ value: number; label: string }> => {
  // Drop invalid configured years before any calculations.
  const safeConfiguredYears = sanitizeYearNumbers(configuredYears);
  // Fallback when configured list is empty or invalid.
  const fallbackBaseYear = new Date().getFullYear();
  // Use latest configured year, else use fallback year.
  const latestConfiguredYear =
    safeConfiguredYears.length > 0
      ? Math.max(...safeConfiguredYears)
      : fallbackBaseYear;

  // Accept selected year only when valid; otherwise fallback.
  const safeSelectedYear = isValidYearNumber(selectedYear)
    ? selectedYear
    : latestConfiguredYear;
  // Include stable top academic-year chip (e.g., 2025–2026 -> value 2026).
  const latestAcademicFilterYear = latestConfiguredYear + 1;
  // Merge years, dedupe them, and sort newest first.
  const awardYears = Array.from(
    new Set([
      latestAcademicFilterYear,
      safeSelectedYear,
      ...safeConfiguredYears,
    ]),
  ).sort((firstYear, secondYear) => secondYear - firstYear);

  // Convert raw year values to academic range labels for UI.
  return awardYears.map((yearItem) => ({
    // Value stays numeric for URL/API.
    value: yearItem,
    // Label is previous-year to current-year range.
    label: formatAcademicYearLabel(yearItem - 1),
  }));
};
