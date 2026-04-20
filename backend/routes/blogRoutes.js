import express from "express";
import {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getCategories,
} from "../controllers/blogController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getBlogs);
router.get("/categories", getCategories);
router.get("/:id", getBlog);

// Private routes (require authentication)
router.post("/", protect, authorize("editor", "admin"), createBlog);
router.put("/:id", protect, authorize("editor", "admin"), updateBlog);
router.delete("/:id", protect, authorize("editor", "admin"), deleteBlog);

export default router;
