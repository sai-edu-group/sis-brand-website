// MODULES //
import axios from "axios";

// Get default API URL from environment variables
const API_URL = import.meta.env.PUBLIC_API_URL;

export type StudentCouncilData = {
  id: string;
  admissionNumber: string;
  studentName: string;
  designation: string;
  className: string;
  studentProfilePic: string;
};

/**
 * Fetches student council members for a given year.
 *
 * This function calls the Student Council API and returns an array of student council data.
 * It safely handles different API response shapes
 *
 * @param {number} year - The academic year for which student council data is requested.
 *                        Example: 2024
 *
 * @returns {Promise<StudentCouncilData[]>}
 * A promise that resolves to an array of student council members.
 * If the API call fails or no data is found, an empty array is returned.
 */

export const fetchStudentsByYearRequest = async (
  year: number,
): Promise<StudentCouncilData[]> => {
  // Set up the API request configuration
  const config = {
    endpoint: `${API_URL}student-council/by-year?year=${year}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 8000, // 8 seconds timeout
  };

  // Make the API call
  try {
    const response = await axios({
      url: config.endpoint,
      method: config.method,
      headers: config.headers,
      timeout: config.timeout,
    });

    const data = response.data;

    // Ensure data is an array, handling possible variations
    let studentDetails: StudentCouncilData[] = [];
    if (Array.isArray(data?.data)) {
      studentDetails = data.data;
    } else if (Array.isArray(data)) {
      studentDetails = data;
    }

    return studentDetails;
  } catch (error) {
    console.error("Failed to fetch students by year: ", error);
    return [];
  }
};
