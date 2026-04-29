import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a blog title"],
      trim: true,
      maxlength: [200, "Title cannot be more than 200 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    category: {
      type: String,
      // enum: ["Engineering", "AI & SaaS", "Microservices", "Design Systems"],
      trim: true,
      required: true,
    },
    author: {
      type: String,
      default: "Airebsolution Teams",
      trim: true,
    },
    readTime: {
      type: String,
      default: "5 min read",
    },
    intro: {
      type: String,
    },
    contentHtml: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    imagealt: {
      type: String,
      default: "Blog featured image",
    },
    sections: [
      {
        id: String,
        heading: String,
        content: [
          {
            type: {
              type: String,
              enum: ["p", "ul", "ol", "subheading"],
            },
            text: String,
            items: [String],
          },
        ],
      },
    ],
    relatedIds: [String],
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    publishedDate: Date,
    views: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// Create slug from title before saving
blogSchema.pre("save", function (next) {
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
blogSchema.index({ status: 1, createdAt: -1 });
blogSchema.index({ category: 1 });

export default mongoose.model("Blog", blogSchema);
