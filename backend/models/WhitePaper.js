import mongoose from "mongoose";

const whitePaperSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a white paper title"],
      trim: true,
      maxlength: [200, "Title cannot be more than 200 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    image: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "White paper featured image",
    },
    pdfUrl: {
      type: String,
      required: true,
    },
    pdfFileName: String,
    author: {
      type: String,
      default: "Airebsolution Teams",
    },
    category: {
      type: String,
      // enum: ["Development", "Design", "Strategy", "Technology"],
      trim: true,
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    publishedDate: Date,
    downloads: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    keyPoints: [String], // Array of main takeaways
    readMoreUrl: String, // Link to full article if available
  },
  { timestamps: true },
);

// Create slug from title before saving
whitePaperSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }
  if (this.status === "published" && !this.publishedDate) {
    this.publishedDate = new Date();
  }
  next();
});

// Index for frequent queries
whitePaperSchema.index({ status: 1, createdAt: -1 });
whitePaperSchema.index({ category: 1 });

export default mongoose.model("WhitePaper", whitePaperSchema);
