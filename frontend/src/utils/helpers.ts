// Convert file to base64
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

// Get file size in MB
export const getFileSizeMB = (file: File): number => {
  return file.size / (1024 * 1024);
};

// Validate image file
export const validateImageFile = (
  file: File,
  maxSizeMB: number = 5,
): { valid: boolean; error?: string } => {
  const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

  if (!validTypes.includes(file.type)) {
    return {
      valid: false,
      error: "Invalid file type. Please upload JPG, PNG, WebP, or GIF.",
    };
  }

  if (getFileSizeMB(file) > maxSizeMB) {
    return {
      valid: false,
      error: `File size must be less than ${maxSizeMB}MB.`,
    };
  }

  return { valid: true };
};

// Validate PDF file
export const validatePDFFile = (
  file: File,
  maxSizeMB: number = 10,
): { valid: boolean; error?: string } => {
  if (file.type !== "application/pdf") {
    return { valid: false, error: "Please upload a valid PDF file." };
  }

  if (getFileSizeMB(file) > maxSizeMB) {
    return {
      valid: false,
      error: `File size must be less than ${maxSizeMB}MB.`,
    };
  }

  return { valid: true };
};

// Format date
export const formatDate = (date: string | Date): string => {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

// Truncate text
export const truncateText = (text: string, length: number = 100): string => {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};

// Check if URL is valid
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
