import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  uploadBlogImage,
  uploadWhitePaperImage,
  uploadWhitePaperPdf,
} from "../middleware/upload.js";
import { constructFullUrl } from "../utils/filePathSanitizer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// @desc Upload blog image
// @route POST /api/upload/blog-image
// @access Private (editor/admin)
router.post("/blog-image", uploadBlogImage, (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Verify file was actually saved
    const filePath = path.join(__dirname, "..", req.file.path);
    if (!fs.existsSync(filePath)) {
      return res.status(500).json({
        success: false,
        message: "File upload failed - file not saved",
      });
    }

    // Return the file path that can be used in the database
    const dbPath = `/uploads/blog/${req.file.filename}`;

    res.status(200).json({
      success: true,
      message: "Blog image uploaded successfully",
      file: {
        filename: req.file.filename,
        path: dbPath,
        url: constructFullUrl(dbPath, req),
        size: req.file.size,
        mimetype: req.file.mimetype,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @desc Upload white paper image
// @route POST /api/upload/whitepaper-image
// @access Private (editor/admin)
router.post("/whitepaper-image", uploadWhitePaperImage, (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Verify file was actually saved
    const filePath = path.join(__dirname, "..", req.file.path);
    if (!fs.existsSync(filePath)) {
      return res.status(500).json({
        success: false,
        message: "File upload failed - file not saved",
      });
    }

    // Return the file path that can be used in the database
    const dbPath = `/uploads/whitepapers/${req.file.filename}`;

    res.status(200).json({
      success: true,
      message: "White paper image uploaded successfully",
      file: {
        filename: req.file.filename,
        path: dbPath,
        url: constructFullUrl(dbPath, req),
        size: req.file.size,
        mimetype: req.file.mimetype,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @desc Upload white paper PDF
// @route POST /api/upload/whitepaper-pdf
// @access Private (editor/admin)
router.post("/whitepaper-pdf", uploadWhitePaperPdf, (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Verify file was actually saved
    const filePath = path.join(__dirname, "..", req.file.path);
    if (!fs.existsSync(filePath)) {
      return res.status(500).json({
        success: false,
        message: "File upload failed - file not saved",
      });
    }

    // Return the file path that can be used in the database
    const dbPath = `/pdfs/${req.file.filename}`;

    res.status(200).json({
      success: true,
      message: "White paper PDF uploaded successfully",
      file: {
        filename: req.file.filename,
        path: dbPath,
        url: constructFullUrl(dbPath, req),
        size: req.file.size,
        mimetype: req.file.mimetype,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
