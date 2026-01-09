import axios from "axios";

// Hardcoded Live URL
const API_URL = "https://sis-api.neevohub.com/";

export type StudentResultItem = {
  studentName: string;
  studentProfilePic: string;
  percentage: string;
  className: string;
};

type ApiResponse = {
  status: boolean;
  statusCode: number;
  data: StudentResultItem[];
};

export const fetchResultsRequest = async (
  year: number | string,
  classId: string
): Promise<StudentResultItem[]> => {
  const endpoint = `${API_URL}results/get-results?year=${year}&classId=${classId}`;

  try {
    const response = await axios.get<ApiResponse>(endpoint, {
      headers: { "Content-Type": "application/json" },
      timeout: 8000,
    });

    const resData = response.data;

    if (resData.status && Array.isArray(resData.data)) {
      return resData.data;
    }
    return [];
  } catch (error) {
    console.error(`Failed to fetch results: ${endpoint}`, error);
    return [];
  }
};