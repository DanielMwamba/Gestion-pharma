import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./context/UserContext";


import Login from "./pages/login";
import Home from "./pages/home";
import SingleProduct from "./pages/single-product";
import About from "./pages/about";
import Products from "./pages/product";
import ProductsList from "./pages/products-list";
import Layout from "./components/layout/layout";
import AdminLayout from "./components/layout/admin-layout";
import AllProducts from "./pages/all-products";
import CreateProduct from "./pages/create-product";
import UpdateProduct from "./pages/update-product";
import DeleteProduct from "./pages/delete-product";



// import "./App.css";
// import Layout from "./components/Layout/layout";
// import About from "./pages/about";
// import AdminLayout from "./components/layout/admin-layout";
// import Login from "./pages/login";

function App() {

  const [pseudo, setPseudo] = useState(null);

  const handleLoginSubmit = (userName) => {
    setPseudo(userName);
  };

  return (
    <UserContext.Provider value={{isLogged: true, pseudo: pseudo}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLoginSubmit={handleLoginSubmit}/>} />

        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="products" element={<Products />}>
            <Route path="" element={<ProductsList />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
        </Route>

        <Route path="/" element={<AdminLayout />}>
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="update-product" element={<UpdateProduct />} />
          <Route path="/delete-product" element={<DeleteProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
