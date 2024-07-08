const express = require("express");
const app = express();
const UserModel = require("../src/models/user.model");

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1> Sla so vai meu irmaoooo </h1>");
});

app.get("/usuarios", (req, res) => {
  const usuarios = [
    {
      name: "Kevin Maykel",
      email: "kevin.maykel@cityinc.com.br",
    },
    {
      name: "Usuario Teste",
      email: "sla@gmail.com",
    },
  ];

  res.status(200).json(usuarios);
});

app.post("/users", (req, res) => {
  const user = UserModel.create(req.body);

  res.status(201).json(user);
});

const port = 8080;

app.listen(port, () => console.log(`Rodando em http://127.0.0.1:${port}`));
