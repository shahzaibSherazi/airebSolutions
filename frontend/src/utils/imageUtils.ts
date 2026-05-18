// API base URL for images
export const API_BASE_URL =
  import.meta.env.VITE_APP_URL || "http://localhost:5050/api";
export const FILE_BASE_URL =
  import.meta.env.VITE_FILE_URL || "http://localhost:5050";
// Helper function to get full image URL
export const getImageUrl = (imagePath: string | null | undefined): string => {
  if (!imagePath) return "/placeholder.svg";

  // If it's already a full URL, return as is
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // If it starts with /uploads, prepend the API base URL (without /api)

  if (imagePath.startsWith("/uploads")) {
    return `${FILE_BASE_URL}${imagePath}`;
  }

  // For other relative paths, return as is (they might be from public folder)
  return imagePath;
};
