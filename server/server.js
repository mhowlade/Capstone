const express = require('express');
const dao = require("./mongo-dao");
const pyscript = require('./python_scripts')
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


app.get("/api/products", (req, res) => {
    dao.getProducts(
        (prods) => {
            if (!prods) {
                res.status(404).end();
            } else {
                res.send(prods);
            }
        })
});
app.get("/api/categories", (req, res) => {
    dao.getCategories(
        (cats) => {
            if (!cats) {
                res.status(404).end();
            } else {
                res.send(cats);
            }
        })
});
app.get("/api/products/id/:oid", (req, res) => {
    dao.findProductById(req.params.oid,
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        })
});
app.get("/api/categories/:catid/products", (req, res) => {
    dao.findProductsByCategory(req.params.catid,
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        }
    )
});
app.get("/api/animals/:animal/products", (req, res) => {
    dao.findProductsByAnimal(req.params.animal,
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        }
    )
});
app.get("/api/recommend/:oid/:count", (req, res) => {
    dao.findRecommendedProducts(req.params.oid,req.params.count,
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        }
    )
});
app.get("/api/popular/:count", (req, res) => {
    dao.findPopularProducts(req.params.count,
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        }
    )
});

app.get("/api/recommendations/:oid/:count", (req, res) => {
    pyscript.runTest(req.params.oid,req.params.count,
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
app.listen(port)



