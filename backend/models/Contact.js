import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
      minlength: [2, "City must be at least 2 characters long"],
      maxlength: [100, "City cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [5000, "Message cannot exceed 5000 characters"],
    },
    privacyAgreed: {
      type: Boolean,
      required: [true, "You must agree to privacy policy"],
      default: false,
    },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
    notes: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

// Index for faster queries
contactSchema.index({ email: 1 });
contactSchema.index({ createdAt: -1 });

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
