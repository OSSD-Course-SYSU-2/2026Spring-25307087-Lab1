# Harmony Mart - Modern E-Commerce Platform

Welcome to the **Harmony Mart** open-source repository. This project serves as a robust, pure-frontend demonstration of modern web engineering principles, emphasizing modular architecture, reactive state management, and extremely polished user interfaces.

## 🌟 Project Overview

Harmony Mart is not just a static webpage; it is a meticulously engineered Single Page Application (SPA) built without heavy frameworks like React or Vue. By utilizing native JavaScript (ES6 Modules), CSS Variables, and a custom State Management engine, this project demonstrates a deep understanding of core web technologies.

The application simulates a high-end grocery and lifestyle e-commerce platform. It features dynamic filtering, a reactive shopping cart, simulated checkout processes, and a responsive design that degrades gracefully across all device sizes (from massive desktop monitors down to mobile phones).

## 🏗️ Architecture & Technical Depth

To ensure enterprise-grade maintainability, the codebase is structured around several core engineering principles:

### 1. Custom Reactive State Management (`js/core/store.js`)
Instead of relying on Redux or Vuex, this project implements a bespoke centralized Store using the Observer pattern. 
- **Centralized Source of Truth**: All application state (products, cart items, user data, UI toggles) lives in one place.
- **Unidirectional Data Flow**: Components dispatch actions (e.g., `ADD_TO_CART`, `SET_CATEGORY`) rather than mutating state directly.
- **Subscription Model**: UI components subscribe to the store and automatically re-render when relevant state changes occur, ensuring the UI is always perfectly synchronized with the data.

### 2. Component-Based Architecture (`js/components/`)
The UI is broken down into independent, reusable classes inheriting from a `BaseComponent`.
- `Header.js`: Manages global search, cart toggles, and mobile navigation states.
- `ProductList.js`: Dynamically renders the product grid, handles sorting, and manages "Add to Cart" interactions.
- `Cart.js`: A complex slide-out drawer that calculates totals in real-time, manages quantities, and simulates the checkout pipeline.
- `Sidebar.js`: Handles category routing and visual feedback for the active view.

### 3. Scalable CSS Architecture (`css/`)
The styling completely avoids "spaghetti CSS" by strictly adhering to a modular structure:
- `themes/default.css`: Global CSS Custom Properties (Variables) defining the design token system (colors, spacing, typography, shadows).
- `layouts/grid.css`: Macro-level structural CSS controlling the responsive grid and main container flexibility.
- `components/*.css`: Micro-level scoped CSS for specific UI elements, ensuring styles do not bleed across the application.

### 4. Mock Data Layer (`data/db.js`)
A robust mock database simulating a real backend API. It includes detailed product schemas (IDs, categories, stock levels, sales prices, review metrics) to stress-test the frontend rendering capabilities.

## 🎨 Design & UX/UI

The visual design prioritizes clarity, performance, and aesthetic impact:
- **Glassmorphism**: Subtle translucent effects on headers and modals create a modern, deep feel without compromising performance.
- **Micro-interactions**: Hover states, click animations, and smooth CSS transitions provide immediate tactile feedback to user actions.
- **Responsive Fluidity**: CSS Grid and Flexbox are utilized to ensure the layout mathematically adapts to any viewport, preventing horizontal scrolling and broken elements.

## 🚀 How to Run

Because this project relies entirely on native browser features and ES6 Modules, it requires no complex build tools (no Webpack, no Babel).

1. Clone the repository:
   ```bash
   git clone https://github.com/OSSD-Course-SYSU-2/2026Spring-25307087-Lab1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd 2026Spring-25307087-Lab1
   ```
3. Start a local development server (required to serve ES6 modules properly). If you have Python installed:
   ```bash
   python -m http.server 8000
   ```
   Or using Node.js/npx:
   ```bash
   npx serve .
   ```
4. Open your browser and navigate to `http://localhost:8000`.

## 📂 Directory Structure

```text
.
├── index.html              # Application entry point
├── data/
│   └── db.js               # Mock database schema and records
├── js/
│   ├── app.js              # Application bootstrapper
│   ├── core/
│   │   └── store.js        # Reactive state management engine
│   └── components/         # Reusable UI classes
│       ├── BaseComponent.js
│       ├── Cart.js
│       ├── Header.js
│       ├── ProductList.js
│       └── Sidebar.js
└── css/
    ├── themes/             # Design tokens and variables
    ├── layouts/            # Grid and structural layouts
    └── components/         # Scoped component styles
```

## 📝 License

This project is open-sourced under the MIT License. Feel free to fork, study, and modify the code.
