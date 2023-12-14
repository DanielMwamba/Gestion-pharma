import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/products",
//         element: <Products />,
//         children: [
//           {
//             path: "",
//             element: <ProductsList />,
//           },
//           {
//             path: ":id",
//             element: <SignleProduct />,
//           },
//         ],
//       },
//     ]
//   },
//   {
//     path: "/",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "/all-products",
//         element: <AllProducts />,
//       },
//       {
//         path: "/create-product",
//         element: <CreateProduct />,
//       },
//       {
//         path: "/update-product",
//         element: <UpdateProduct />,
//       },
//       {
//         path: "/delete-product",
//         element: <DeleteProduct />,
//       },
//     ]
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);
