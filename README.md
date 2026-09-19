# Teck Solar

A modern, responsive web application for Teck Solar, a solar energy solutions provider. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that looks great on all devices (mobile, tablet, desktop).
- **Modern UI**: Clean, professional, and accessible interface built with Tailwind CSS.
- **Client-Side Routing**: Fast and seamless navigation using React Router.
- **Comprehensive Services**: Detailed pages showcasing core offerings:
  - Residential Solar
  - Commercial Solar
  - Battery Storage
  - EV Chargers
- **Resource Center**: Easy access to important customer resources like product datasheets, WiFi monitoring guides, and CEC consumer guides.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Linting**: [Oxlint](https://oxc.rs/docs/guide/usage/linter)

## Project Structure

The source code is organized as follows:

```text
src/
├── assets/         # Static assets like images and icons
├── components/     # Reusable UI components (e.g., layout elements, Header, Footer)
├── hooks/          # Custom React hooks
├── pages/          # Route components (Home, About, Services, Resources, Contact)
├── utils/          # Helper and utility functions
├── App.tsx         # Main application component and routing configuration
├── index.css       # Global styles and Tailwind directives
└── main.tsx        # Application entry point
```

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd teck-solar
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This command runs the TypeScript compiler and uses Vite to bundle the application. The optimized output will be placed in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

### Linting

To analyze the code for potential errors using Oxlint:

```bash
npm run lint
```
