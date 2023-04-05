import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function (req, res) {
    res.send("Bem vindo a pagina blog!");
});

app.get("/ola/:cargo/:nome", function (req, res) {
    res.send("<h1>Ola" + " " + req.params.nome + "</h1>" + "<h2> Seu cargo e: " + req.params.cargo);
});

app.listen(8030, function() {console.log("rodando na url http://localhost:8030");});
// localhost:8030
