import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./home";
import Aquatic from "./aquatic";
import Cats from "./cats";
import Dogs from "./dogs";
import Cart from "./cart";

function App() {
  // const [characters, setCharacters] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/characters')
  //   .then(res => res.json())
  //   .then(data => setCharacters(data))
  // }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dogs" element={<Dogs />}></Route>
        <Route path="/cats" element={<Cats />}></Route>
        <Route path="/aquatic" element={<Aquatic />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
