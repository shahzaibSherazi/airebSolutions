import express from "express";
import multer from "multer";
import {
  submitContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats,
} from "../controllers/contactController.js";
import {
  validateContact,
  handleValidationErrors,
} from "../middleware/validation.js";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true);
  },
});

const router = express.Router();

// Contact form routes
router.post(
  "/submit",
  upload.single("file"),
  validateContact,
  handleValidationErrors,
  submitContact,
);

// Admin routes
router.get("/", getAllContacts); // Get all contacts
router.get("/stats", getContactStats); // Get statistics
router.get("/:id", getContactById); // Get single contact
router.patch("/:id", updateContactStatus); // Update contact status
router.delete("/:id", deleteContact); // Delete contact

export default router;
