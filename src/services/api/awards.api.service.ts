// MODULES //
import axios from "axios";

const DEFAULT_AWARDS_API_URL = "http://localhost:4321/jsons/awards.json";

export type AwardData = {
  id?: number | string;
  awardName?: string;
  awardDesc?: string;
  thumbnailImg?: string;
  year?: string | number;
};

/** Fetch Awards from API */
export const fetchAwardsRequest = async (): Promise<AwardData[]> => {
  const config = {
    endpoint: DEFAULT_AWARDS_API_URL,
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

    const awards: AwardData[] = Array.isArray(data?.data)
      ? data.data
      : Array.isArray(data)
        ? data
        : [];

    return awards;
  } catch (error) {
    console.error("Failed to fetch awards data:", error);
    return [];
  }
};
