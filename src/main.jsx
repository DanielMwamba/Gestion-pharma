import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import SingleProduct from "./pages/single-product.jsx";
import About from './pages/about';
import Products from './pages/products';
import ProductList from './pages/products-list';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },

  {
    path: "/home",
    element: <Home />
  },

  {
    path: "/about",
    element: <About />
  },

  {
    path: "/products",
    element: <Products />,
    children: [
      {
        path: "",
        element: <ProductList />,
      },

      {
        path: ":id",
        element: <SingleProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
