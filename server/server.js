const express = require('express');
const dao = require("./mongo-dao");
const app = express();


app.use((req, res, next)=>{
    res.setHeader(
        "Access-Control-Allow-origin",
        "http://localhost:3001"
    );
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

app.use(express.json());


app.get("/api/characters", (req, res) => {
    dao.findAllCharacters(
        (characters) => {
            if (!characters) {
                res.status(404).end();
            } else {
                res.send(characters);
            }
        })
});
app.get("/api/films", (req, res) => {
    dao.findAllFilms(
        (films) => {
            if (!films) {
                res.status(404).end();
            } else {
                res.send(films);
            }
        })
});
app.get("/api/planets", (req, res) => {
    dao.findAllPlanets(
        (planets) => {
            if (!planets) {
                res.status(404).end();
            } else {
                res.send(planets);
            }
        })
});

app.get("/api/characters/:id", (req, res) => {
    dao.findCharacterById(req.params.id,
        (character) => {
            if (!character) {
                res.status(404).end();
            } else {
                res.send(character);
            }
        }
    );
});

app.get("/api/films/:id", (req, res) => {
    dao.findFilmById(req.params.id,
        (film) => {
            if (!film) {
                res.status(404).end();
            } else {
                res.send(film);
            }
        }
    );
});

app.get("/api/planets/:id", (req, res) => {
    dao.findPlanetById(req.params.id,
        (planet) => {
            if (!planet) {
                res.status(404).end();
            } else {
                res.send(planet);
            }
        }
    );
});

app.get("/api/films/:id/characters", (req, res) => {
    dao.findFilmChars(req.params.id,
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        }
    )
});
app.get("/api/films/:id/planets", (req, res) => {
    dao.findFilmPlanets(req.params.id,
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        }
    )
});
app.get("/api/characters/:id/films", (req, res) => {
    dao.findCharFilms(req.params.id,
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        }
    )
});
app.get("/api/planets/:id/films", (req, res) => {
    dao.findPlanetFilms(req.params.id,
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        }
    )
});
app.get("/api/planets/:id/characters", (req, res) => {
    dao.findPlanetChars(req.params.id,
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        }
    )
});
const port = 3000
console.log("Open a browser to http://localhost:" +port+" to view the application");
app.listen(port);

