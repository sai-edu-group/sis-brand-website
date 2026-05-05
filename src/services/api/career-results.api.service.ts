// MODULES //
import axios from "axios";

/**
 * Represents one career result row returned by API.
 */
export type CareerResultItemData = {
  studentName: string;
  studentProfilePic: string;
  percentage: string;
  className: string;
};

type CareerResultApiResponse = {
  status: boolean;
  statusCode: number;
  data: CareerResultItemData[];
};

const API_URL = import.meta.env.PUBLIC_API_URL;

// Temporary exam-to-classId mapping used with the shared results endpoint.
const EXAM_CLASS_ID_MAP: Record<string, string> = {
  jee: "11",
  neet: "12",
};

/**
 * Builds a valid API endpoint URL from base URL and route path.
 */
const buildApiEndpoint = (path: string): string => {
  if (!API_URL || typeof API_URL !== "string") {
    throw new Error("Missing PUBLIC_API_URL environment variable.");
  }

  const normalizedBaseUrl = API_URL.endsWith("/") ? API_URL : `${API_URL}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBaseUrl}${normalizedPath}`;
};

/**
 * Returns backend classId from exam slug.
 */
const getCareerClassIdByExam = (exam: string): string | null => {
  const normalizedExam = exam.trim().toLowerCase();
  return EXAM_CLASS_ID_MAP[normalizedExam] ?? null;
};

/**
 * Fetches career results for a given year and exam slug.
 *
 * @param year - Academic year selected in the UI
 * @param exam - Exam slug from route params (for example: "jee", "neet")
 * @returns Promise resolving to an array of career result items
 */
export const fetchCareerResultsRequest = async (
  year: number,
  exam: string,
): Promise<CareerResultItemData[]> => {
  // Resolve exam slug to backend classId used by current temporary endpoint.
  const classId = getCareerClassIdByExam(exam);
  if (!classId) {
    return [];
  }

  // TODO: Replace this temporary endpoint mapping with the dedicated career-results endpoint from backend.
  // Current implementation reuses the generic results API with classId mapping.
  const endpoint = buildApiEndpoint(
    `results/get-results?year=${year}&classId=${classId}`,
  );

  try {
    // Perform API request with explicit timeout and JSON headers.
    const response = await axios.get<CareerResultApiResponse>(endpoint, {
      headers: { "Content-Type": "application/json" },
      timeout: 8000,
    });

    const responseData = response.data;

    // Return only valid successful payloads; otherwise fallback to empty list.
    if (responseData.status && Array.isArray(responseData.data)) {
      return responseData.data;
    }

    return [];
  } catch {
    // Safe fallback for network/runtime failures.
    return [];
  }
};
