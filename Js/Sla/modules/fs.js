const fs = require("fs");
const path = require("path");

// Cria uma pasta
/*
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
}); */

// Criar arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "Heloo Node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Aquivo criado com sucesso");

    // Adicionar á um arquivo
    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      " Sla oque é pra fazer",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Inseriu com sucesso!");
      }
    );

    // Ler o Arquivo
    fs.readFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log(data);
      }
    );
  }
);
