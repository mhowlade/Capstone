import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect} from "react";
import Home from './home';
import Character from './character';
import Film from './film';
import Planet from './planet';


function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/characters')
    .then(res => res.json())
    .then(data => setCharacters(data))
  }, [])

  return (
    <>
    <Routes>
      <Route path="/" element={<Home characters = {characters} />}></Route>
      <Route path="/characters/:id" element={<Character />}></Route>
      <Route path="/films/:id" element={<Film />}></Route>
      <Route path="/planets/:id" element={<Planet />}></Route>
      <Route path='/api/characters'></Route>
    </Routes>
    </>
  );
}

export default App;
