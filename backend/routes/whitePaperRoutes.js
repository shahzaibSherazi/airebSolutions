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
router.get("/admin/categories", getCategories);
router.get("/:id", getWhitePaper);
router.post("/:id/download", trackDownload);

// Private routes (require authentication)
router.post("/", protect, authorize("editor", "admin"), createWhitePaper);
router.put("/:id", protect, authorize("editor", "admin"), updateWhitePaper);
router.delete("/:id", protect, authorize("editor", "admin"), deleteWhitePaper);

export default router;
