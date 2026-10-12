import express from "express";
import jwt from "jsonwebtoken";
import { safeCompare } from "../utils/security.js";
import { protectBlogAdmin } from "../middlewares/auth.js";
import { createRateLimiter } from "../middlewares/rateLimiter.js";
import logger from "../utils/logger.js";

const router = express.Router();

// Rate limiter for login attempts (15 attempts per 15 minutes)
const loginLimiter = createRateLimiter({
  maxRequests: 15,
  windowMs: 15 * 60 * 1000,
});

/**
 * @route   POST /api/blog-auth/login
 * @desc    Authenticate blog admin and issue JWT
 * @access  Public
 */
router.post("/login", loginLimiter, async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both username and password.",
      });
    }

    const expectedUsername = process.env.BLOG_ADMIN_USERNAME || "blogadmin";
    const expectedPassword = process.env.BLOG_ADMIN_PASSWORD || "Blogadmin@2026";

    const isUsernameMatch = safeCompare(String(username).trim(), expectedUsername);
    const isPasswordMatch = safeCompare(String(password), expectedPassword);

    if (!isUsernameMatch || !isPasswordMatch) {
      logger.warn(`Failed blog admin login attempt for user: ${username}`);
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    const token = jwt.sign(
      {
        role: "blog_admin",
        username: expectedUsername,
      },
      process.env.JWT_SECRET,
      {
        issuer: "teck-solar",
        audience: "blog-admin-panel",
        expiresIn: "7d",
      }
    );

    logger.info(`Blog admin logged in successfully: ${username}`);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      admin: {
        username: expectedUsername,
        role: "blog_admin",
      },
    });
  } catch (error) {
    logger.error("Blog admin login error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error occurred during login.",
    });
  }
});

/**
 * @route   GET /api/blog-auth/verify
 * @desc    Verify current session / token
 * @access  Private (Blog Admin)
 */
router.get("/verify", protectBlogAdmin, (req, res) => {
  return res.status(200).json({
    success: true,
    admin: req.blogAdmin,
  });
});

export default router;
