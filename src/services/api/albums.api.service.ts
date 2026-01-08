// MODULES //
import axios from "axios";

// Get default API URL from environment variables
const API_URL = import.meta.env.PUBLIC_API_URL;

// TYPES //
export type AlbumItem = {
  id: number | string;
  title: string;
  thumbnail: string;
};

export type AlbumPhotosItem = {
  id: number | string;
  title: string;
  photoPath: string;
  images: string[];
};

// API Requests

/** Fetch Albums by Year */
export const fetchAlbumsByYearRequest = async (
  year: number,
): Promise<AlbumItem[]> => {
  const config = {
    endpoint: `${API_URL}albums/get-albums?year=${year}`,
    method: "GET" as const,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 8000, // 8 seconds timeout
  };

  try {
    const response = await axios({
      url: config.endpoint,
      method: config.method,
      headers: config.headers,
      timeout: config.timeout,
    });

    const data = response.data;
    // Ensure data is an array, handling possible variations
    const albums = Array.isArray(data?.data)
      ? data.data
      : Array.isArray(data)
        ? data
        : [];

    // Mapping API response to AlbumItem
    return albums.map((album: any) => ({
      id: album.id,
      title: album.title,
      thumbnail: album.thumbnail,
    }));
  } catch (error) {
    console.error("Failed to fetch albums: ", error);
    return [];
  }
};

/** Fetch Album Photos */
export const fetchAlbumPhotosRequest = async (
  albumId: string | number,
): Promise<AlbumPhotosItem | null> => {
  const config = {
    endpoint: `${API_URL}albums/album-photos?album_id=${albumId}`,
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

    const album = data?.data;

    // Split gallery_photo string into array
    const images =
      typeof album?.gallery_photo === "string"
        ? album.gallery_photo.split(",")
        : [];

    // Returning AlbumPhotosItem object
    return {
      id: albumId,
      title: data?.data?.title ?? "Album",
      photoPath: album.photo_path,
      images,
    };
  } catch (error) {
    console.error("Failed to fetch album photos: ", error);
    return null;
  }
};
