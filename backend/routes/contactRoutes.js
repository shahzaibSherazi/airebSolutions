import express from "express";
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

const router = express.Router();

// Contact form routes
router.post("/submit", validateContact, handleValidationErrors, submitContact);

// Admin routes
router.get("/", getAllContacts); // Get all contacts
router.get("/stats", getContactStats); // Get statistics
router.get("/:id", getContactById); // Get single contact
router.patch("/:id", updateContactStatus); // Update contact status
router.delete("/:id", deleteContact); // Delete contact

export default router;
