// MODULES
// REACT //
import { image } from "motion/react-client";

// MODULES //
import axios from "axios";

// Get default API URL from environment variables
const API_URL = import.meta.env.PUBLIC_API_URL;

// CONSTANTS
const GALLERY_IMAGE_PREFIX = "https://saicloudschool.in/myerp/uploads/gallery/";

// TYPES
export type AlbumItem = {
  id: number | string;
  name: string;
  image: string;
};

export type AlbumPhotosItem = {
  images: string[];
};

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

    const albums = Array.isArray(data?.data)
      ? data.data
      : Array.isArray(data)
        ? data
        : [];

    return albums.map((album: any) => ({
      id: album.id,
      name: album.title,
      image: album.cover_image
        ? `${GALLERY_IMAGE_PREFIX}/${album.cover_image}`
        : "",
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

    const photos: string[] = Array.isArray(data?.data) ? data.data : [];

    return {
      images: photos.map((img: string) => `${GALLERY_IMAGE_PREFIX}/${img}`),
    };
  } catch (error) {
    console.error("Failed to fetch album photos: ", error);
    return null;
  }
};
