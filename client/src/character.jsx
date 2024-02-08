import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
function Character () {
    const [character, setCharacter] = useState([]);
    const [films, setFilms] = useState([]);
    const [planet, setPlanet] = useState([]);

    let {id} = useParams();

    async function getCharacterData(id)
    {
        let data = await fetch("http://localhost:3000/api/characters/" + id);
        let json = await data.json();
        setCharacter(json);
        return json;
    }
    async function getCharFilms(id){
        let data = await fetch("http://localhost:3000/api/characters/" + id + "/films");
        let json = await data.json();
        setFilms(json);
    }

    async function getCharPlanet(id){
        let data = await fetch("http://localhost:3000/api/planets/" + id);
        let json = await data.json();
        setPlanet(json);
    }
    async function getData()
    {
        let char = await getCharacterData(id);
        await getCharFilms(id);
        await getCharPlanet(char.id);
    }

    useEffect(() => {
        getData();
    }, []);


    return(
        <>
        <h1>A Starwars Character</h1>
        <h2 id="name">{character.name}</h2>
        <section id="generalInfo">
            <p>Height: <span id="height">{character.height}</span> cm</p>
            <p>Mass: <span id="mass">{character.mass}</span> kg</p>
            <p>Born: <span id="birth_year">{character.birth_year}</span></p>
        </section>
        <section id="planets">
            <h2>Homeworld</h2>
            <p><span id="homeworld"><a href={"/planets/"+character.homeworld}>{planet.name}</a></span></p>
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
export default Character;