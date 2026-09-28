# Teck Solar

A modern, responsive web application for Teck Solar, a solar energy solutions provider in Australia. Built with React 19, TypeScript, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout tailored for mobile, tablet, and desktop viewports.
- **Dynamic Routing & Lazy Loading**: All pages are code-split using `React.lazy()` with Suspense loaders for fast page transitions and minimal initial bundle size.
- **Modern UI & Rich Aesthetics**: Clean, professional interface built with Tailwind CSS, custom design tokens, and smooth micro-animations.
- **Comprehensive Services**: Dedicated service pages with technical details and benefits:
  - Residential Solar
  - Commercial Solar
  - Battery Storage
  - EV Chargers
- **Resource Center**: Customer guides, WiFi monitoring setup, and technical datasheets.
- **Interactive Quote Modal**: Lead intake with automated submission via Web3Forms API.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Linting & Formatting**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## Project Structure & Architecture

```text
teck-solar/
├── .env.example              # Environment variables template (Web3Forms API key)
├── .gitignore                # Git ignore rules (node_modules, dist, .env, *.tsbuildinfo)
├── .prettierrc               # Code formatting rules
├── eslint.config.js          # ESLint flat configuration
├── components.json           # shadcn configuration pointing to src/index.css
├── public/                   # Static assets (robots.txt, sitemap.xml, images/)
└── src/
    ├── app/                  # Application root (App shell, router, providers)
    │   ├── App.tsx           # Thin root app shell
    │   ├── router.tsx        # Centralized React.lazy routes & fallback loader
    │   ├── providers.tsx     # Context provider hierarchy
    │   └── index.ts
    ├── components/
    │   ├── ui/               # shadcn primitive components only (button, card, input)
    │   ├── effects/          # Animated & decorative components (direct imports)
    │   ├── layout/           # Global layout (Header, Footer, PageBanner, ScrollToTop)
    │   └── shared/           # Reusable business components (QuoteModal, SharedCTA)
    ├── features/             # Domain feature logic
    │   └── quote/            # QuoteModalContext and quote workflows
    ├── data/                 # Static content decoupled from JSX (services, faqs, navigation, stats, testimonials)
    ├── hooks/                # Custom React hooks (e.g., useReveal)
    ├── lib/                  # Shared utilities and services (utils.ts cn helper, web3forms.ts)
    ├── types/                # Centralized TypeScript definitions and models
    ├── pages/                # Page route components with co-located sections
    │   ├── home/             # HomePage.tsx + sections/
    │   ├── about/            # AboutPage.tsx + sections/
    │   ├── contact/          # ContactPage.tsx + sections/
    │   ├── services/         # ServicePageTemplate.tsx, sections/, and 4 service pages
    │   ├── resources/        # Datasheets, WiFi setup, and Consumer guide pages
    │   └── legal/            # PrivacyPage.tsx and TermsPage.tsx
    ├── index.css             # Single global stylesheet with Tailwind & theme variables
    └── main.tsx              # Application entry point
```

### File Naming Conventions

- **`components/ui/` & `components/effects/`**: Use `kebab-case.tsx` (`button.tsx`, `dot-pattern.tsx`, `pixel-image.tsx`). This aligns with shadcn/ui conventions. For performance and tree-shaking, import effects directly from their file.
- **`components/layout/` & `components/shared/`**: Use `PascalCase.tsx` (`Header.tsx`, `Footer.tsx`, `QuoteModal.tsx`, `SharedCTA.tsx`).
- **`pages/`**: Page components use `PascalCase.tsx` (`HomePage.tsx`, `AboutPage.tsx`, `ContactPage.tsx`), subdirectories use `kebab-case`, and each page folder contains a one-line `index.ts` re-export (`export { default } from './XxxPage';`).
- **`data/` & `lib/`**: Use `kebab-case.ts` (`services.ts`, `navigation.ts`, `web3forms.ts`).

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Environment Setup

Copy `.env.example` to create your local `.env`:

```bash
cp .env.example .env
```

Set your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### Installation

```bash
npm install
```

### Development Server

Start the local Vite dev server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

Runs TypeScript compiler checks (`tsc -b`) and produces an optimized production bundle in the `dist` directory with separate chunks per route.

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

- **Lint**: `npm run lint`
- **Format**: `npx prettier --check .`
