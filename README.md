# 🌿 Paradise Nursery — Online Plant Shop

A dynamic React + Redux shopping cart application for Paradise Nursery, an online plant store where nature meets your home.

## Project Overview

Paradise Nursery is a full-featured e-commerce plant shopping experience built with modern web technologies. Browse curated collections of houseplants, add them to your cart, and manage your selections with a smooth, intuitive interface.

## Features

- 🪴 Browse 18+ unique houseplants across 3 categories
- 🛒 Add to cart with instant feedback (button disables after adding)
- 🔢 Live cart item count in the navigation bar
- ➕➖ Increase / decrease plant quantities in the cart
- 🗑️ Remove individual items from the cart
- 💰 Per-item total and grand total calculations
- 🔗 Seamless navigation between landing page, product list, and cart

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend Framework | React 18 (Vite) |
| State Management | Redux Toolkit |
| Styling | CSS Modules + Custom CSS |
| Routing | React Router DOM |
| Build Tool | Vite |

## Project Structure

```
paradise-nursery/
├── public/
├── src/
│   ├── store/
│   │   ├── index.js          # Redux store configuration
│   │   └── CartSlice.jsx     # Cart state slice (Redux Toolkit)
│   ├── AboutUs.jsx           # About the company page
│   ├── App.jsx               # Landing page with "Get Started"
│   ├── App.css               # Global styles + background image
│   ├── CartItem.jsx          # Shopping cart page
│   ├── ProductList.jsx       # Plant catalogue with categories
│   └── main.jsx              # Entry point
├── README.md
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Plant Categories

- **Air Purifiers** — Plants that clean and refresh your indoor air
- **Low Maintenance** — Perfect for busy plant parents
- **Tropical Beauties** — Lush, exotic statement plants

## Author

Built as the Final Project for the IBM Full Stack Developer course — React Fundamentals module.
