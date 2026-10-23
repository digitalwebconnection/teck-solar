import "dotenv/config";
import "./src/config/env.js";

import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import logger from "./src/utils/logger.js";

import connectDB from "./src/config/db.js";
import corsmiddlewares from "./src/config/cors.js";

import blogRoutes from "./src/routes/blog.js";
import blogAuthRoutes from "./src/routes/blogAuth.js";


const app = express();

// ===============================
// Middlewares
// ===============================
app.use(corsmiddlewares);
app.use(helmet());
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// ===============================
// Database Connection
// ===============================
connectDB();

// ===============================
// API Routes
// ===============================
app.use("/api/blog-auth", blogAuthRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/blogs", blogRoutes);

// ===============================
// Root Route
// ===============================
app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    message: "Teck Solar Blog API is running.",
  });
});

// ===============================
// 404 Catch-All Handler
// ===============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});


// ===============================
// Global Error Handler
// ===============================
app.use((err, req, res, next) => {
  logger.error(err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message || "Internal Server Error",
  });
});

// ===============================
// Start Server
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`🚀 Teck Solar Server running on port ${PORT}`);
});
