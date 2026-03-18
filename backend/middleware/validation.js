import { body, validationResult } from "express-validator";

// Validation rules for contact form
export const validateContact = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),

  body("service")
    .trim()
    .notEmpty()
    .withMessage("service is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("service must be select from dropdown"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("phoneNumber")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({ min: 10 })
    .withMessage("Please provide a valid phone number"),

  body("message")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 5000 })
    .withMessage("Message must be less than 5000 characters"),

  body("privacyAgreed")
    .custom((value) => {
      if (
        value === true ||
        value === "true" ||
        value === "on" ||
        value === "1"
      ) {
        return true;
      }
      return false;
    })
    .withMessage("You must agree to the privacy policy"),
];

// Middleware to handle validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }

  next();
};
