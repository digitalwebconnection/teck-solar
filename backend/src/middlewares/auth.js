import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import logger from '../utils/logger.js';

dotenv.config();

/**
 * Middleware to verify that the request has valid blog admin rights.
 */
export const protectBlogAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ success: false, message: 'Not authorized: No token provided.' });
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      audience: 'blog-admin-panel',
    });

    req.blogAdmin = decoded;
    return next();
  } catch (err) {
    logger.error('Blog admin auth error:', err.message);
    return res.status(401).json({
      success: false,
      message: 'Not authorized: Token invalid or expired.',
    });
  }
};

export default protectBlogAdmin;
