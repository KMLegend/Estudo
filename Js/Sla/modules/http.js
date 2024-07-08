const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1> Sla so vai meu irmaoooo </h1>");
  }

  if (req.url == "/usuarios") {
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

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(usuarios));
  }
});

server.listen(port, () => console.log(`Rodando em http://127.0.0.1:${port}`));
