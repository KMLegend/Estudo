import express from "express";
const app = express();


app.get("/", function (req, res) {
    res.send("Seja bem vindo!");
});

app.get("/sobre", function (req, res) {
    res.send("Minha pagina sobre!");
});

app.get("/blog", function (req, res) {
    res.send("Bem vindo a pagina blog!");
});


app.listen(8030, function() {
    console.log("rodando na url http://localhost:8030");
});
// localhost:8030
