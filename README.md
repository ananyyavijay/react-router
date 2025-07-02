# 🍓 BerryBloom – Discover the Benefits of Strawberries

This project utilizes `React Router v6` to enable smooth client-side navigation without reloading the page.
---
### 📌 Key Features

- **`createBrowserRouter`** and **`RouterProvider`** from `react-router-dom` handle route creation and rendering.
- A shared **`Layout`** component includes the site's structure (like `Header` and `Footer`) and uses `<Outlet />` to inject child components dynamically.
- Navigation is built using **`NavLink`**, which applies active styles based on the current route.
- Routes are organized cleanly with each major page component (e.g., `Home`, `About`, `Contact`, `Github`) defined in the router configuration.
---

## 🚀 Getting Started

Visit the live site or clone the repository if you're interested in the code:

git clone https://github.com/ananyyavijay/react-router.git

cd react-router

npm install

npm run dev

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
