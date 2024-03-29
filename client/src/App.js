import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./home";
import Aquatic from "./aquatic";
import Cats from "./cats";
import Dogs from "./dogs";
import Birds from "./birds";
import Cart from "./cart";
import Navbar from "./navbar";
import Details from "./details";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    LoadProduct()
    LoadCategories()
   }, [])

  function LoadProduct() {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  function LoadCategories() {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((data) =>setCategories(data) );
  }
  console.log('app products', products)
  console.log('app categories', categories)

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home categories={categories} products={products} />}></Route>
          <Route path="/Dogs" element={<Dogs products={products} />}></Route>
          <Route path="/Cats" element={<Cats products={products} />}></Route>
          <Route path="/Birds" element={<Birds products={products} />}></Route>
          <Route path="/Aquatic" element={<Aquatic products={products} />}></Route>
          <Route path="/Details" element={<Details />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
    </>
  );
}

export default App;
