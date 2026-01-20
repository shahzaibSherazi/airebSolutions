import Contact from "../models/Contact.js";
import {
  sendContactEmail,
  sendConfirmationEmail,
} from "../services/emailService.js";

// Submit contact form
export const submitContact = async (req, res, next) => {
  try {
    const { fullName, city, email, phoneNumber, message, privacyAgreed } =
      req.body;

    // Check if all required fields are provided
    if (
      !fullName ||
      !city ||
      !email ||
      !phoneNumber ||
      !message ||
      !privacyAgreed
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create new contact document
    const contact = new Contact({
      fullName,
      city,
      email,
      phoneNumber,
      message,
      privacyAgreed: privacyAgreed === "true" || privacyAgreed === true,
    });

    // Save to database
    await contact.save();

    // Send email to company
    await sendContactEmail({
      fullName,
      city,
      email,
      phoneNumber,
      message,
    });

    // Send confirmation email to user
    await sendConfirmationEmail(email, fullName);

    res.status(201).json({
      success: true,
      message:
        "Contact form submitted successfully. We will get back to you soon!",
      data: {
        id: contact._id,
        email: contact.email,
      },
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    next(error);
  }
};

// Get all contacts (admin only - you can add authentication later)
export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    next(error);
  }
};

// Get single contact by ID
export const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Error fetching contact:", error);
    next(error);
  }
};

// Update contact status
export const updateContactStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    // Validate status
    const validStatuses = ["new", "read", "replied"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Must be one of: new, read, replied",
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status, notes },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    next(error);
  }
};

// Delete contact
export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting contact:", error);
    next(error);
  }
};

// Get contact statistics (for dashboard)
export const getContactStats = async (req, res, next) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    const totalContacts = await Contact.countDocuments();

    res.status(200).json({
      success: true,
      totalContacts,
      stats,
    });
  } catch (error) {
    console.error("Error fetching contact statistics:", error);
    next(error);
  }
};
