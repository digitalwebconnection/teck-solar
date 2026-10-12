const requiredEnv = [
  "MONGODB_URI",
  "JWT_SECRET",
  "FRONTEND_URL",
  "BLOG_ADMIN_USERNAME",
  "BLOG_ADMIN_PASSWORD",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];

requiredEnv.forEach((key) => {

  if (!process.env[key]) {

    throw new Error(`Missing required environment variable: ${key}`);

  }

});