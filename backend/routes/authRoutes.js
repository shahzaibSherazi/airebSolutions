import express from "express";
import {
  login,
  register,
  getCurrentUser,
  logout,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getCurrentUser);
router.get("/logout", logout);

export default router;
