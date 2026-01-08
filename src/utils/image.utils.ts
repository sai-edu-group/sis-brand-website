const IMAGE_BASE_URL = "https://saicloudschool.in/myerp/";

export const generateImagePath = (
  path: string,
  imageName: string,
): string => {
  if (!path || !imageName) return "";
  return `${IMAGE_BASE_URL}/${path}/${imageName}`;
};
