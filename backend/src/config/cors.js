import cors from "cors";

const corsOptions = {
  origin(origin, callback) {
    // Allow requests with no origin (like Postman, mobile apps, or same-origin)
    if (!origin) return callback(null, true);

    const cleanOrigin = origin.replace(/\/$/, "");

    const allowedOrigins = process.env.FRONTEND_URL
      ? process.env.FRONTEND_URL
          .split(",")
          .map((o) => o.trim().replace(/\/$/, ""))
      : [];

    // Allow localhost or 127.0.0.1 origins
    if (
      cleanOrigin.includes("localhost") ||
      cleanOrigin.includes("127.0.0.1")
    ) {
      return callback(null, true);
    }

    // Allow configured production frontend origin(s)
    if (allowedOrigins.includes(cleanOrigin)) {
      return callback(null, true);
    }

    // Fallback in development mode
    if (process.env.NODE_ENV === "development") {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },

  credentials: true,

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
    "x-visitor-id",
    "x-timezone",
    "x-skip-view",
    "x-admin-request",
    "x-country-code",
    "x-country-name",
  ],

  optionsSuccessStatus: 204,
};

export default cors(corsOptions);