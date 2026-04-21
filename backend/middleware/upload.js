import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Storage configuration for images
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = "public/uploads/";

    // Determine folder based on field name or route
    if (file.fieldname === "blogImage") {
      uploadPath += "blog/";
    } else if (file.fieldname === "whitePaperImage") {
      uploadPath += "whitepapers/";
    } else {
      uploadPath += "general/";
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extension);

    // Sanitize filename
    const sanitizedName = basename.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
    cb(null, sanitizedName + "-" + uniqueSuffix + extension);
  },
});

// Storage configuration for PDFs
const pdfStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/pdfs/");
  },
  filename: (req, file, cb) => {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extension);

    // Sanitize filename
    const sanitizedName = basename.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
    cb(null, sanitizedName + "-" + uniqueSuffix + extension);
  },
});

// File filter for images
const imageFileFilter = (req, file, cb) => {
  // Accept images only
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// File filter for PDFs
const pdfFileFilter = (req, file, cb) => {
  // Accept only PDF files
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

// Image upload middleware
export const imageUpload = multer({
  storage: imageStorage,
  fileFilter: imageFileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// PDF upload middleware
export const pdfUpload = multer({
  storage: pdfStorage,
  fileFilter: pdfFileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit for PDFs
  },
});

// Single file upload middlewares for images
export const uploadBlogImage = imageUpload.single("blogImage");
export const uploadWhitePaperImage = imageUpload.single("whitePaperImage");

// Single file upload middleware for PDFs
export const uploadWhitePaperPdf = pdfUpload.single("whitePaperPdf");

// Multiple file upload (if needed)
export const uploadMultiple = imageUpload.fields([
  { name: "blogImage", maxCount: 1 },
  { name: "whitePaperImage", maxCount: 1 },
]);
