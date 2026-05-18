/**
 * Enterprise-grade file path sanitizer for multi-environment support
 * Handles localhost, staging, production, and custom domains
 * Always stores relative paths in database for portability
 */

/**
 * Extract relative path from a full URL or return as-is if already relative
 * Removes all domain/protocol information for database storage
 *
 * @param {string} input - Full URL or relative path
 * @returns {string|null} - Relative path or null if invalid
 *
 * @example
 * extractRelativePath('http://localhost:5050/pdfs/file.pdf') // => '/pdfs/file.pdf'
 * extractRelativePath('https://airebsolution.com/pdfs/file.pdf') // => '/pdfs/file.pdf'
 * extractRelativePath('/pdfs/file.pdf') // => '/pdfs/file.pdf'
 * extractRelativePath('data:application/pdf;base64,...') // => 'data:application/pdf;base64,...'
 */
export const extractRelativePath = (input) => {
  if (!input || typeof input !== "string") {
    return null;
  }

  // Already a relative path - return as-is
  if (input.startsWith("/")) {
    return input;
  }

  // Data URL - return as-is
  if (input.startsWith("data:")) {
    return input;
  }

  // Full URL with protocol - extract pathname
  if (input.startsWith("http://") || input.startsWith("https://")) {
    try {
      const url = new URL(input);
      return url.pathname; // Returns /pdfs/file.pdf
    } catch (error) {
      console.error(`[FilePathSanitizer] Invalid URL: ${input}`, error);
      return null;
    }
  }

  // Fallback - treat as relative path
  return input.startsWith("/") ? input : `/${input}`;
};

/**
 * Sanitize PDF/image URL for database storage
 * Converts full URLs to relative paths, preserves already-relative paths
 * Used in POST/PUT controllers before saving to MongoDB
 *
 * @param {string} url - Input URL (full or relative)
 * @returns {string|null} - Sanitized relative path
 */
export const sanitizeDatabaseUrl = (url) => {
  if (!url) return null;

  const relativePath = extractRelativePath(url);

  // Validate that extracted path looks reasonable
  if (
    relativePath &&
    (relativePath.startsWith("/pdfs/") ||
      relativePath.startsWith("/uploads/") ||
      relativePath.startsWith("data:"))
  ) {
    return relativePath;
  }

  // If doesn't match expected patterns, reject it
  return null;
};

/**
 * Construct full URL from relative path for API responses
 * Uses request context (protocol + host) to work across environments
 *
 * @param {string} relativePath - Relative path from database (e.g., '/pdfs/file.pdf')
 * @param {Object} req - Express request object (for protocol and host)
 * @returns {string} - Full URL for frontend consumption
 *
 * @example
 * // On localhost
 * constructFullUrl('/pdfs/file.pdf', req)
 * // => 'http://localhost:5050/pdfs/file.pdf'
 *
 * // On production
 * constructFullUrl('/pdfs/file.pdf', req)
 * // => 'https://airebsolution.com/pdfs/file.pdf'
 */
export const constructFullUrl = (relativePath, req) => {
  if (!relativePath || !req) {
    return relativePath;
  }

  // Data URLs don't need protocol/host
  if (relativePath.startsWith("data:")) {
    return relativePath;
  }

  // Already a full URL - return as-is
  if (
    relativePath.startsWith("http://") ||
    relativePath.startsWith("https://")
  ) {
    return relativePath;
  }

  // Construct from relative path + request context
  let protocol = req.protocol || "http";
  let host = req.get("host") || "localhost";

  const forwardedProto = req.headers["x-forwarded-proto"]
    ?.toString()
    ?.split(",")[0]
    ?.trim();
  const forwardedHost = req.headers["x-forwarded-host"]
    ?.toString()
    ?.split(",")[0]
    ?.trim();

  if (forwardedProto) {
    protocol = forwardedProto;
  }

  if (forwardedHost) {
    host = forwardedHost;
  }

  // Prefer explicit backend URL if configured
  if (process.env.BACKEND_URL) {
    return `${process.env.BACKEND_URL.replace(/\/$/, "")}${relativePath}`;
  }

  // If the backend is running on a port but the external host is a real domain,
  // strip that internal port from generated URLs so users see the public URL.
  if (
    host.includes(":") &&
    !host.startsWith("localhost") &&
    !host.startsWith("127.0.0.1") &&
    host.endsWith(`:${process.env.PORT || "5050"}`)
  ) {
    host = host.split(":")[0];
  }

  return `${protocol}://${host}${relativePath}`;
};

/**
 * Validate that a file path is safe and expected
 * Prevents directory traversal attacks and unexpected file types
 *
 * @param {string} filePath - File path to validate
 * @param {string} allowedPrefix - Expected prefix (e.g., '/pdfs/', '/uploads/')
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidFilePath = (filePath, allowedPrefix = "/pdfs/") => {
  if (!filePath || typeof filePath !== "string") {
    return false;
  }

  // Check for directory traversal attempts
  if (filePath.includes("..") || filePath.includes("//")) {
    return false;
  }

  // Check allowed prefix
  if (!filePath.startsWith(allowedPrefix)) {
    return false;
  }

  return true;
};

/**
 * Batch sanitize URLs for bulk operations (useful during migrations)
 *
 * @param {Array<string>} urls - Array of URLs to sanitize
 * @returns {Array<string>} - Array of sanitized relative paths
 */
export const batchSanitizeUrls = (urls) => {
  if (!Array.isArray(urls)) return [];

  return urls
    .map((url) => sanitizeDatabaseUrl(url))
    .filter((url) => url !== null);
};

export default {
  extractRelativePath,
  sanitizeDatabaseUrl,
  constructFullUrl,
  isValidFilePath,
  batchSanitizeUrls,
};
