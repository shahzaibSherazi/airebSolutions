import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import connectDB from "./config/database.js";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// ===================== MIDDLEWARE =====================

// Security headers
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Body parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Rate limiting - to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message:
    "Too many contact form submissions from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

// ===================== ROUTES =====================

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date(),
  });
});

// Contact form routes
app.use("/api/contact", contactLimiter, contactRoutes);

// ===================== ERROR HANDLING =====================

// 404 handler
app.use(notFound);

// Global error handler
app.use(errorHandler);

// ===================== SERVER START =====================

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start server
    app.listen(PORT, () => {
      console.log(`
╔════════════════════════════════════════╗
║   Aireb Solutions Backend Server       ║
║   Server running on port ${PORT}        ║
║   Environment: ${process.env.NODE_ENV || "development"}      ║
╚════════════════════════════════════════╝
      `);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

export default app;
