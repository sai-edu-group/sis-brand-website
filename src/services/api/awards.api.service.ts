// MODULES //
import axios from "axios";

//  Get default API URL from environment variables  //
const API_URL = import.meta.env.PUBLIC_API_URL;

export type AwardData = {
  id?: number | string;
  awardName: string;
  awardDesc: string;
  thumbnailImg: string;
  year?: string | number;
};

/** Fetch Latest Awards from API */
export const fetchLatestAwardsRequest = async (): Promise<AwardData[]> => {
  const config = {
    endpoint: `${API_URL}awards/get-latest`,
    method: "GET" as const,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios({
      url: config.endpoint,
      method: config.method,
      headers: config.headers,
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

/** Fetch All Awards from API by year */
export const fetchAwardsRequest = async (
  year?: string | number,
): Promise<AwardData[]> => {
  const config = {
    endpoint: `${API_URL}awards/get-awards?year=${year}`,
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
