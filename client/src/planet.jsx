import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
function Planet () {
    const [planet, setPlanet] = useState([]);
    const [films, setFilms] = useState([]);
    const [characters, setCharacters] = useState([]);

    let {id} = useParams();

    async function getPlanetData(id)
    {
        let data = await fetch("http://localhost:3000/api/planets/" + id);
        let json = await data.json();
        setPlanet(json);
        return json;
    }
    async function getPlanetFilms(id){
        let data = await fetch("http://localhost:3000/api/planets/" + id + "/films");
        let json = await data.json();
        setFilms(json);
    }

    async function getPlanetCharacters(id){
        let data = await fetch("http://localhost:3000/api/planets/" + id + "/characters");
        let json = await data.json();
        setCharacters(json);
    }
    async function getData()
    {
        let char = await getPlanetData(id);
        await getPlanetFilms(id);
        await getPlanetCharacters(id);
    }

    useEffect(() => {
        getData();
    }, []);
    return(
        <>
        <h1>A Starwars Planet</h1>
        <h2 id="name">{planet.name}</h2>
        <section id="generalInfo">
            <p>Climate: <span id="climate">{planet.climate}</span></p>
            <p>Population: <span id="population">{planet.population}</span></p>
            <p>Terrain: <span id="terrain">{planet.terrain}</span></p>
        </section>
        <section id="characters">
            <h2>Characters</h2>
            {characters.map((el, index) => (
                <li key={index}><a href={"/characters/"+el.id}>{el.name}</a></li>
            ))}
        </section>
        <section id="films">
            <h2>Films appeared in</h2>
            <ul>
            {films.map((el, index) => (
                <li key={index}><a href={"/films/"+el.id}>{el.title}</a></li>
            ))}
            </ul>
        </section>
        </>
    )
}
export default Planet;