const mongodb = require("mongodb");
const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const dbName = "swapi";
const collectionName = "planets"
let planets;
let characters;
let films;
let films_characters;
let films_planets;

async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db(dbName)
    planets = db.collection("planets");
    characters = db.collection("characters");
    films = db.collection("films");
    films_characters = db.collection("films_characters");
    films_planets = db.collection("films_planets");
}
startup();

// /api/characters
// /api/films
// /api/planets

module.exports.findAllCharacters = function (callback) {
    let dataPromise = characters.find({}).toArray();
    dataPromise.then((char) => callback(char));
};

module.exports.findAllFilms = function (callback) {
    let dataPromise = films.find({}).toArray();
    dataPromise.then((char) => callback(char));
};

module.exports.findAllPlanets = function (callback) {
    let dataPromise = planets.find({}).toArray();
    dataPromise.then((char) => callback(char));
};

// /api/characters/:id
// /api/films/:id
// /api/planets/:id

module.exports.findCharacterById = async function(id,callback){
    let charData = await characters.findOne({id:Number(id)});
    callback(charData);
}

module.exports.findFilmById = async function(id,callback){
    let filmData = await films.findOne({id:Number(id)});
    callback(filmData);
}

module.exports.findPlanetById = async function(id,callback){
    let planetData = await planets.findOne({id:+id});
    callback(planetData);
}

// /api/films/:id/characters
module.exports.findFilmChars = async function(id,callback){
    let filmCharData = await films_characters.find({film_id:+id}).toArray();
    // Extract character IDs from filmCharacters
    const charIds = filmCharData.map(film => +film.character_id);
    // Find characters based on the extracted IDs
    const chars = await characters.find({ id: { $in: charIds } }).toArray();
    callback(chars);
}
// /api/films/:id/planets
module.exports.findFilmPlanets = async function(id,callback){
    let filmPlanetData = await films_planets.find({film_id:+id}).toArray();
    // Extract planet IDs from film_planets
    const planetIds = filmPlanetData.map(film => +film.planet_id);
    // Find planets based on the extracted IDs
    const planetsData = await planets.find({ id: { $in: planetIds } }).toArray();
    callback(planetsData);
}
// /api/characters/:id/films
module.exports.findCharFilms = async function(id,callback){
    let data = await films_characters.find({character_id:+id}).toArray();
    // Extract character IDs from filmCharacters
    const filmIds = data.map(char => +char.film_id);
    // Find character details based on the extracted character IDs
    const filmsData = await films.find({ id: { $in: filmIds } }).toArray();
    callback(filmsData);
}
// /api/planets/:id/films
module.exports.findPlanetFilms = async function(id,callback){
    let data = await films_planets.find({planet_id:+id}).toArray();
    // Extract character IDs from filmCharacters
    const filmIds = data.map(planet => +planet.film_id);
    // Find character details based on the extracted character IDs
    const filmsData = await films.find({ id: { $in: filmIds } }).toArray();
    callback(filmsData);
}
// /api/planets/:id/characters
module.exports.findPlanetChars = async function(id,callback){
    //Find all characters with homeworld: planet_id
    let data = await characters.find({homeworld:+id}).toArray();
    callback(data);
}
