import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import connectDB from "./config/database.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import whitePaperRoutes from "./routes/whitePaperRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import User from "./models/User.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
// ===================== MIDDLEWARE =====================

// Security headers
app.use(helmet());

// CORS configuration
const allowedOrigins = process.env.FRONTEND_URL?.split(",").map((o) =>
  o.trim(),
) || ["http://localhost:8080"];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow direct requests from Postman or same-server checks (no origin)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error(
          `CORS policy: origin ${origin} not allowed. Use one of: ${allowedOrigins.join(", ")}`,
        ),
      );
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Body parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Serve static files from public/uploads directory
app.use("/uploads", express.static("public/uploads"));

// Serve PDF files from public/pdfs directory with proper headers
app.use(
  "/pdfs",
  express.static("public/pdfs", {
    setHeaders: (res, path) => {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "inline");
    },
  }),
);

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

// Auth + content routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/whitepapers", whitePaperRoutes);
app.use("/api/upload", uploadRoutes);

// ===================== ERROR HANDLING =====================

// 404 handler
app.use(notFound);

// Global error handler
app.use(errorHandler);

// ===================== SERVER START =====================

const PORT = process.env.PORT || 5050;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Default admin seed
    const defaultAdminEmail =
      process.env.DEFAULT_ADMIN_EMAIL || "admin@aireb.com";
    const defaultAdminName = process.env.DEFAULT_ADMIN_NAME || "Aireb Admin";
    const defaultAdminPassword =
      process.env.DEFAULT_ADMIN_PASSWORD || "password123";

    const existingAdmin = await User.findOne({ email: defaultAdminEmail });
    if (!existingAdmin) {
      await User.create({
        name: defaultAdminName,
        email: defaultAdminEmail,
        password: defaultAdminPassword,
        role: "admin",
      });
      console.log(`✅ Default admin created: ${defaultAdminEmail}`);
    } else {
      console.log(`✅ Default admin already exists: ${defaultAdminEmail}`);
    }

    // Start server
    app.listen(PORT, () => {
      console.log(`

   Aireb Solutions Backend Server       
   Server running on port ${PORT}        
   Environment: ${process.env.NODE_ENV || "development"}      ║

      `);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

export default app;
