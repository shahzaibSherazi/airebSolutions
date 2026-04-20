import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Generate JWT token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });
};

// @desc Register user
// @route POST /api/auth/register
// @access Public
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    // Create user
    user = await User.create({
      name,
      email,
      password,
      role: role || "editor",
    });

    const token = generateToken(user._id, user.role);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server error during registration",
    });
  }
};

// @desc Login user
// @route POST /api/auth/login
// @access Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("[Auth] login attempt", { email });

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Find user and include password
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Update lastLogin
    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id, user.role);

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server error during login",
    });
  }
};

// @desc Get current user
// @route GET /api/auth/me
// @access Private
export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Logout user
// @route GET /api/auth/logout
// @access Private
export const logout = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
