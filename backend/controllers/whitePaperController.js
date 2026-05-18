import Category from "../models/Category.js";
import WhitePaper from "../models/WhitePaper.js";
import {
  sanitizeDatabaseUrl,
  constructFullUrl,
} from "../utils/filePathSanitizer.js";

/**
 * Normalize PDF URL for API responses
 * Converts stored relative paths to full URLs based on current request context
 * Works transparently across localhost, staging, and production environments
 */
const normalizePdfUrl = (pdfUrl, req) => {
  if (!pdfUrl) return pdfUrl;

  // Data URLs: return as-is
  if (pdfUrl.startsWith("data:")) {
    return pdfUrl;
  }

  // Already a full URL from legacy data: return as-is (will be migrated)
  if (pdfUrl.startsWith("http://") || pdfUrl.startsWith("https://")) {
    return pdfUrl;
  }

  // Relative path: convert to full URL using current request context
  return constructFullUrl(pdfUrl, req);
};

// @desc Get all white papers
// @route GET /api/whitepapers
// @access Public
export const getWhitePapers = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status = "published",
      category,
      search,
    } = req.query;

    let filter = { isDeleted: false };

    if (status) {
      filter.status = status;
    }

    if (category) {
      filter.category = category;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const whitePapers = await WhitePaper.find(filter)
      .sort({ publishedDate: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await WhitePaper.countDocuments(filter);

    // Convert relative paths to full URLs
    const whitePapersWithUrls = whitePapers.map((paper) => {
      const paperObj = paper.toObject();
      paperObj.pdfUrl = normalizePdfUrl(paperObj.pdfUrl, req);
      return paperObj;
    });

    res.status(200).json({
      success: true,
      count: whitePapersWithUrls.length,
      total,
      pages: Math.ceil(total / limit),
      currentPage: page,
      whitePapers: whitePapersWithUrls,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Get single white paper
// @route GET /api/whitepapers/:id
// @access Public
export const getWhitePaper = async (req, res) => {
  try {
    const { id } = req.params;

    let whitePaper;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      whitePaper = await WhitePaper.findById(id);
    } else {
      whitePaper = await WhitePaper.findOne({ slug: id });
    }

    if (!whitePaper || whitePaper.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "White paper not found",
      });
    }

    // Increment views
    whitePaper.views += 1;
    await whitePaper.save();

    // Convert relative path to full URL
    const paperObj = whitePaper.toObject();
    paperObj.pdfUrl = normalizePdfUrl(paperObj.pdfUrl, req);

    res.status(200).json({
      success: true,
      whitePaper: paperObj,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Create new white paper
// @route POST /api/whitepapers
// @access Private (editor/admin)
export const createWhitePaper = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      pdfUrl,
      category,
      author,
      keyPoints,
      status,
    } = req.body;

    // Validation
    if (!title || !category || !image || !pdfUrl) {
      return res.status(400).json({
        success: false,
        message: "Please provide title, category, image, and PDF URL",
      });
    }

    // Sanitize PDF URL: extract relative path and reject invalid URLs
    // This ensures only relative paths are stored in database
    const sanitizedPdfUrl = sanitizeDatabaseUrl(pdfUrl);
    if (!sanitizedPdfUrl) {
      return res.status(400).json({
        success: false,
        message: "Invalid PDF URL format. PDF must be from /pdfs/ directory.",
        receivedUrl: pdfUrl,
      });
    }
    console.log("RAW PDF URL FROM FRONTEND:", pdfUrl);
    console.log("SANITIZED PDF URL FOR DB:", sanitizedPdfUrl);
    const whitePaper = await WhitePaper.create({
      title,
      description,
      image,
      pdfUrl: sanitizedPdfUrl, // Store ONLY relative path
      category,
      author,
      keyPoints,
      status,
    });

    // Normalize PDF URL in response
    const paperObj = whitePaper.toObject();
    paperObj.pdfUrl = normalizePdfUrl(paperObj.pdfUrl, req);
    res.status(201).json({
      success: true,
      message: "White paper created successfully",
      whitePaper: paperObj,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Update white paper
// @route PUT /api/whitepapers/:id
// @access Private (editor/admin)
export const updateWhitePaper = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      image,
      pdfUrl,
      category,
      author,
      keyPoints,
      status,
    } = req.body;

    let whitePaper = await WhitePaper.findById(id);

    if (!whitePaper || whitePaper.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "White paper not found",
      });
    }

    // Update fields
    if (title) whitePaper.title = title;
    if (description) whitePaper.description = description;
    if (image) whitePaper.image = image;

    // Sanitize PDF URL if provided
    if (pdfUrl) {
      const sanitizedPdfUrl = sanitizeDatabaseUrl(pdfUrl);
      if (!sanitizedPdfUrl) {
        return res.status(400).json({
          success: false,
          message: "Invalid PDF URL format. PDF must be from /pdfs/ directory.",
          receivedUrl: pdfUrl,
        });
      }
      whitePaper.pdfUrl = sanitizedPdfUrl; // Store ONLY relative path
    }

    if (category) whitePaper.category = category;
    if (author) whitePaper.author = author;
    if (keyPoints) whitePaper.keyPoints = keyPoints;
    if (status) whitePaper.status = status;

    whitePaper = await whitePaper.save();

    // Normalize PDF URL in response
    const paperObj = whitePaper.toObject();
    paperObj.pdfUrl = normalizePdfUrl(paperObj.pdfUrl, req);

    res.status(200).json({
      success: true,
      message: "White paper updated successfully",
      whitePaper: paperObj,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Delete white paper (soft delete)
// @route DELETE /api/whitepapers/:id
// @access Private (editor/admin)
export const deleteWhitePaper = async (req, res) => {
  try {
    const { id } = req.params;

    const whitePaper = await WhitePaper.findById(id);

    if (!whitePaper) {
      return res.status(404).json({
        success: false,
        message: "White paper not found",
      });
    }

    whitePaper.isDeleted = true;
    await whitePaper.save();

    res.status(200).json({
      success: true,
      message: "White paper deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Get all categories
// @route GET /api/whitepapers/admin/categories
// @access Public
// export const  getCategories = async (req, res) => {
//   try {
//     const categories = await WhitePaper.distinct("category");
//     res.status(200).json({
//       success: true,
//       categories,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ type: "whitepaper" }).sort({
      isDefault: -1,
      name: 1,
    }); // defaults first

    res.status(200).json({
      success: true,
      categories: categories.map((c) => c.name),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// @desc Track download
// @route POST /api/whitepapers/:id/download
// @access Public
export const trackDownload = async (req, res) => {
  try {
    const { id } = req.params;

    const whitePaper = await WhitePaper.findByIdAndUpdate(
      id,
      { $inc: { downloads: 1 } },
      { new: true },
    );

    if (!whitePaper) {
      return res.status(404).json({
        success: false,
        message: "White paper not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Download tracked",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
