const IMAGE_BASE_URL = "https://saicloudschool.in/myerp";

/**
 * Generates a full URL for an image based on its path, filename, and type.
 *
 * @param {string} path - The relative folder path of the image (e.g., "2025/12/22/2").
 * @param {string} imageName - The image filename (e.g., "UNWIND 2025 (5).jpg").
 * @param {string} [imageType] - Optional type of image to determine the base folder.
 *                               If not provided, the path is used as-is.
 * @returns {string} The full URL to the image.
 *
 * @example
 * generateImagePath("2025/12/22/2", "UNWIND 2025 (5).jpg", "gallery");
 * // "https://saicloudschool.in/myerp/uploads/gallery/2025/12/22/2/UNWIND%202025%20(5).jpg"
 */

export const generateImagePath = (
  path?: string,
  imageName?: string,
  imageType?: string, // optional: "gallery", "result", "student", etc.
): string => {
  if (!imageName) return "";

  const safePath = path && path.endsWith("/") ? path : `${path}/`;
  let finalPath = `${safePath}${imageName}`;

  // Handling different image types dynamically
  if (imageType) {
    switch (imageType.toLowerCase()) {
      case "result":
        finalPath = `uploads/results/${safePath}${imageName}`;
        break;
      case "student":
        finalPath = `uploads/students/${safePath}${imageName}`;
        break;
      case "sis_studentcouncil":
        finalPath = `uploads/sis_studentcouncil/${safePath}${imageName}`;
        break;
      // Add more cases as needed
      default:
        break;
    }
  }

  // Returning full URL
  return `${IMAGE_BASE_URL}/${finalPath}`;
};
