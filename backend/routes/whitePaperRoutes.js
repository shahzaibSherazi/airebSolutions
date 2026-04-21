import express from "express";
import {
  getWhitePapers,
  getWhitePaper,
  createWhitePaper,
  updateWhitePaper,
  deleteWhitePaper,
  getCategories,
  trackDownload,
} from "../controllers/whitePaperController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getWhitePapers);
// Specific routes (must come before /:id to avoid matching as ID)
router.get("/admin/categories", getCategories);
// Dynamic routes (must come last)
router.get("/:id", getWhitePaper);
router.post("/:id/download", trackDownload);

// Private routes (require authentication)
router.post("/", protect, authorize("editor", "admin"), createWhitePaper);
router.put("/:id", protect, authorize("editor", "admin"), updateWhitePaper);
router.delete("/:id", protect, authorize("editor", "admin"), deleteWhitePaper);

export default router;
