// MODULES //
import axios from "axios";

// Get default API URL from environment variables
const API_URL = import.meta.env.PUBLIC_API_URL;

export type SioneerItem = {
  id?: number | string;
  admissionNumber?: string;
  universityName?: string;
  className?: string;
  profilePicture?: string;
  countryName?: string;
};

/** Fetch Sioneers list from API */
export const fetchSioneersRequest = async (
  year: string,
): Promise<SioneerItem[]> => {
  const config = {
    endpoint: `${API_URL}sioneers/get-sioneers?year=${year}`,
    method: "GET" as const,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 8000,
  };

  try {
    const response = await axios({
      url: config.endpoint,
      method: config.method,
      headers: config.headers,
      timeout: config.timeout,
    });

    const data = response.data;

    // Response shape (as provided): { status, statusCode, data: [ ... ] }
    const sioneers: SioneerItem[] = Array.isArray(data?.data)
      ? data.data
      : Array.isArray(data)
        ? data
        : [];

    return sioneers;
  } catch (error) {
    console.error("Failed to fetch sioneers:", error);
    return [];
  }
};
