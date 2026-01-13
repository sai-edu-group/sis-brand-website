// MODULES //
import axios from "axios";

// Get default API URL from environment variables
const API_URL = import.meta.env.PUBLIC_API_URL;

export type NewsItemData = {
  id: number | string;
  title: string;
  details: string;
  thumbnail: string;
  banner: string;
  photo_path: string;
  photo: string;
  created_on: string;
  category_name: string;
};

export type NewsItem = {
  id: number | string;
  title: string;
  details: string;
  thumbnail: string;
  banner: string;
  photo_path: string;
  photo: string;
  created_on: string;
  category_name: string;
};

/** Fetch Blogs by Year with Pagination */
export const fetchBlogsByYearRequest = async (
  year: number,
  pageNumber: number = 1,
  limit: number = 10,
): Promise<NewsItemData[]> => {
  // Set up the API request configuration
  const config = {
    endpoint: `${API_URL}blogs/by-year?year=${year}&page=${pageNumber}&limit=${limit}`,
    method: "GET" as const,
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

    // Puck the Data from the response
    const data = response.data;
    // Ensure data is an array, handling possible variations
    let blogs: NewsItemData[] = [];
    if (Array.isArray(data?.data?.blogs)) {
      blogs = data.data.blogs;
    } else if (Array.isArray(data)) {
      blogs = data;
    }

    // Return Blogs
    return blogs;
  } catch (error) {
    console.error("Failed to fetch news items by year: ", error);
    return [];
  }
};

/** Fetch Blogs by id */
export const fetchBlocksByIdRequest = async (
  id: number | string,
): Promise<NewsItem | null> => {
  // Set up the API request configuration
  const config = {
    endpoint: `${API_URL}by-id?id=${id}`,
    method: "GET" as const,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 8000, // 8 seconds timeout
  };

  //   Make the API call
  try {
    const response = await axios({
      url: config.endpoint,
      method: config.method,
      headers: config.headers,
      timeout: config.timeout,
    });

    const blogItem = response.data?.data;

    if (!blogItem) return null;

    return {
      ...blogItem,
      photo: blogItem.photo
        ? blogItem.photo.split(",").map((img: string) => img.trim())
        : [],
    };
  } catch (error) {
    console.error("Failed to fetch news by id: ", error);
    return null;
  }
};
