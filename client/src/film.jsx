import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';

function Film() {
  const [film, setFilm] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  let {id} = useParams();

  async function getFilm(id)
  {
    let data = await fetch("http://localhost:3000/api/films/" + id);
    let json = await data.json();
    setFilm(json);
    return json;
  }

  async function getFilmCharacters(id)
  {
    let data = await fetch("http://localhost:3000/api/films/" + id + "/characters");
    let json = await data.json();
    setCharacters(json);
    return json;
  }

    async function getFilmPlanets(id)
  {
    let data = await fetch("http://localhost:3000/api/films/" + id + "/planets");
    let json = await data.json();
    setPlanets(json);
    return json;
  }

  async function getData()
  {
      let char = await getFilm(id);
      await getFilmCharacters(id);
      await getFilmPlanets(id);
      

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <h1>Film Page</h1>
    <section id="generalInfo">
      <p>Director: <span id="director">{film.director}</span></p>
      <p>Producer: <span id="producer">{film.producer}</span></p>
      <p>Opening Crawl: <span id="opening">{film.opening_crawl}</span></p>
      <p>Release Date: <span id="release">{film.release_date}</span></p>
    </section>
    <section id="characters">
        <h2>Characters</h2>
        {characters.map((el, index) => (
            <li key={index}><a href={"/characters/"+el.id}>{el.name}</a></li>
        ))}
    </section>
    <section id="planets">
        <h2>Planets</h2>
        {planets.map((el, index) => (
            <li key={index}><a href={"/planets/"+el.id}>{el.name}</a></li>
        ))}
    </section>
    </>
  );
}
export default Film;