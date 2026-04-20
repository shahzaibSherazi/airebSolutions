import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Storage configuration
const storage = multer.diskStorage({
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

// File filter
const fileFilter = (req, file, cb) => {
  // Accept images only
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// Upload middleware
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Single file upload middlewares
export const uploadBlogImage = upload.single("blogImage");
export const uploadWhitePaperImage = upload.single("whitePaperImage");

// Multiple file upload (if needed)
export const uploadMultiple = upload.fields([
  { name: "blogImage", maxCount: 1 },
  { name: "whitePaperImage", maxCount: 1 },
]);
