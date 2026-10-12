# ☀️ Teck Solar — Clean Energy Platform & Blog Panel

Welcome to the **Teck Solar** monorepo codebase. This repository powers the official web platform for Teck Solar Australia, featuring high-converting clean energy service pages, an educational solar insights hub, and a blog administration dashboard.

---

## 📑 Table of Contents

- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Folder Structure](#-folder-structure)
- [Key Features](#-key-features)
- [Prerequisites](#-prerequisites)
- [Quick Start Guide](#-quick-start-guide)
  - [1. Backend Setup](#1-backend-setup)
  - [2. Frontend Setup](#2-frontend-setup)
- [Environment Variables](#-environment-variables)
  - [Backend (`backend/.env`)](#backend-backendenv)
  - [Frontend (`frontend/.env`)](#frontend-frontendenv)
- [Blog Admin Dashboard](#-blog-admin-dashboard)
- [API Reference](#-api-reference)
- [Validation & Quality Scripts](#-validation--quality-scripts)
- [Deployment](#-deployment)

---

## ⚡ Architecture & Tech Stack

### Frontend (`/frontend`)
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/) with HTTP proxy (`/api` &rarr; `http://localhost:5000`)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with Teck Solar brand identity:
  - Solar Orange: `#F38335`
  - Deep Royal Navy: `#14488C`
  - Crisp Canvas: `#FAFAFA`
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Rich Text Editing**: [TipTap 3](https://tiptap.dev/) (WYSIWYG editor with Cloudinary image upload)
- **Icons & Animation**: [Lucide React](https://lucide.dev/), [GSAP](https://greensock.com/gsap/), [Motion](https://motion.dev/), [Lenis](https://lenis.darkroom.engineering/)

### Backend (`/backend`)
- **Runtime**: Node.js (ES Modules `type: "module"`)
- **Server Framework**: [Express 4](https://expressjs.com/)
- **Database & ODM**: [MongoDB Atlas](https://www.mongodb.com/atlas) with [Mongoose 8](https://mongoosejs.com/) (automated public DNS fallback for reliable connection on Windows)
- **Authentication**: JWT (JSON Web Tokens) with timing-safe credential verification and rate limiting
- **Media Storage**: [Cloudinary](https://cloudinary.com/) (assets uploaded directly to the `teck-solar-blogs` folder)
- **Security & Reliability**: [Helmet](https://helmetjs.github.io/), CORS origin validation, [Sentry](https://sentry.io/), Winston logger

---

## 📂 Folder Structure

```
teck-solar/
├── .gitignore                   # Root gitignore protecting secrets & build artifacts
├── README.md                    # Main repository documentation
│
├── backend/                     # Node.js / Express REST API
│   ├── .env.example             # Backend environment template
│   ├── .gitignore               # Backend-specific ignore rules
│   ├── package.json             # Backend dependencies & scripts
│   ├── server.js                # Express application entrypoint
│   ├── scripts/
│   │   └── check.js             # 5-point CI/CD validation script
│   └── src/
│       ├── config/              # Database (MongoDB), CORS, Env, and Sentry config
│       ├── middlewares/         # JWT Admin Auth and error handlers
│       ├── models/              # Blog Mongoose schema & slug logic
│       ├── routes/              # Blog CRUD & Admin Auth routes
│       └── utils/               # Logger & helper utilities
│
└── frontend/                    # React 19 / Vite Application
    ├── .env.example             # Frontend environment template
    ├── .gitignore               # Frontend-specific ignore rules
    ├── package.json             # Frontend dependencies & scripts
    ├── vite.config.ts           # Vite configuration & backend proxy
    ├── public/                  # Public brand assets, logos, and images
    └── src/
        ├── app/                 # Root App component, layout switcher, & Router
        ├── blog-admin/          # Dedicated Blog Admin panel components & TipTap editor
        ├── components/          # Shared UI buttons, headers, footers, & modals
        ├── data/                # Navigation links, services data, & FAQs
        └── pages/
            ├── about/           # About Us page
            ├── blog/            # Public Solar Insights Blog
            │   ├── sections/    # Hero & Post Grid sections
            │   ├── BlogDetailPage.tsx  # Article reader view (/blog/:slug)
            │   ├── BlogPage.tsx        # Blog index view (/blog)
            │   └── index.ts
            ├── contact/         # Contact Us page
            ├── home/            # Home page & hero sliders
            ├── resources/       # Datasheets, WiFi setup, & CEC guides
            └── services/        # Residential, Commercial, Battery, & EV charger pages
```

---

## 🚀 Key Features

1. **Brand-Aligned Public Website**:
   - Modern, responsive presentation of Teck Solar's clean energy solutions.
   - Solar Quote modal launcher accessible site-wide.
   - Interactive calculators, datasheets download center, and WiFi inverter setup manuals.

2. **Solar Insights & Knowledge Hub (`/blog`)**:
   - **Hero Section**: Solar Insights banner with live article count and reading stats.
   - **Interactive Filtering**: Real-time category selection (e.g., Solar Rebates, Battery Storage, Commercial Solar, Inverters).
   - **Instant Search**: Client-side filtering by article title, excerpt, and tags.
   - **Deep-Dive Article Reader (`/blog/:slug`)**: SEO meta titles, reading time calculation, copy-link share button, and recommended related reads.
   - **Reliable Fallback**: Seamless display of curated solar articles if the database is initially empty.

3. **Secure Blog Admin Panel (`/admin`)**:
   - Protected route isolated from consumer navigation headers and footers.
   - Rate-limited admin login with timing-safe authentication.
   - Visual dashboard with live statistics (Total Posts, Published, Drafts, Scheduled).
   - WYSIWYG article creation & editing powered by TipTap with formatting controls, blockquotes, and headings.
   - One-click drag-and-drop Cloudinary image upload.
   - Scheduled post automation engine (`/api/blog/publish-scheduled`).
   - Filtered CSV data export.

---

## 📦 Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or later (Node.js 20+ recommended)
- **npm**: v9.0.0 or later
- **MongoDB**: Active MongoDB Atlas URI (or local MongoDB instance)
- **Cloudinary Account**: Cloud Name, API Key, and API Secret for media uploads

---

## 🛠️ Quick Start Guide

### 1. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create environment configuration
cp .env.example .env
```

Open `backend/.env` and fill in your MongoDB connection string and credentials:

```ini
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/test?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key
BLOG_ADMIN_USERNAME=blogadmin
BLOG_ADMIN_PASSWORD=Blogadmin@2026
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:5173
```

Start the backend server:

```bash
# Development mode with hot-reload
npm run dev

# Or standard production start
npm start
```

*The backend will boot on `http://localhost:5000` and establish a connection with MongoDB Atlas.*

---

### 2. Frontend Setup

In a new terminal window:

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

*The frontend will launch at `http://localhost:5173`. Requests to `/api/*` are automatically forwarded to `http://localhost:5000` via the Vite proxy.*

---

## 🔑 Blog Admin Dashboard

To access the blog management panel:

1. Navigate to: **`http://localhost:5173/admin`**
2. Enter the admin credentials:
   - **Username**: `blogadmin` (configurable in `backend/.env`)
   - **Password**: `Blogadmin@2026` (configurable in `backend/.env`)
3. Click **Sign In to Dashboard**.
4. You can now publish, schedule, draft, edit, and delete blog articles, upload feature images, and monitor post analytics.

---

## 📡 API Reference

All blog endpoints are prefixed under `/api/blog` (and aliased to `/api/blogs`).

### Public Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/blog/public` | Get published articles (supports `?page=`, `?limit=`, `?category=`, `?search=`) |
| `GET` | `/api/blog/:id` | Retrieve single article by MongoDB ID or slug |
| `GET` | `/api/blog/export-csv` | Download articles as a CSV file |

### Admin Endpoints (Require Bearer Token)

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/blog-auth/login` | Authenticate admin (`username`, `password`) and receive JWT |
| `GET` | `/api/blog` | List all blogs with status filtering (`All`, `published`, `draft`, `scheduled`) |
| `POST` | `/api/blog` | Create a new blog post |
| `PUT` | `/api/blog/:id` | Update an existing blog post |
| `DELETE` | `/api/blog/:id` | Permanently remove a blog post |
| `GET` | `/api/blog/stats` | Retrieve aggregate counts (total, published, draft, scheduled) |
| `POST` | `/api/blog/publish-scheduled` | Trigger automated publish check for scheduled posts |
| `POST` | `/api/blog/upload-image` | Upload featured or inline images to Cloudinary |

---

## 🔍 Validation & Quality Scripts

Both projects include strict health and validation checks:

```bash
# Run backend 5-point verification (Lint, Build, Audit, No console.logs, No secrets)
cd backend
npm run check

# Run frontend production build check
cd frontend
npm run build

# Run frontend linting
cd frontend
npm run lint
```

---

## 🌐 Deployment

### Frontend (e.g. Vercel, Netlify, Cloudflare Pages)
1. Set the root directory to `frontend`.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set environment variable: `VITE_API_URL=https://your-backend-domain.com`

### Backend (e.g. Render, Railway, AWS EC2, VPS)
1. Set the root directory to `backend`.
2. Build command: `npm install`
3. Start command: `node server.js`
4. Configure all environment variables from `backend/.env.example` in your hosting dashboard.

---

### 🛡️ License
Private and confidential. Built for **Teck Solar Australia**. All rights reserved.
