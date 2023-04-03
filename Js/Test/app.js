import http from 'http';

http.createServer(function(req, res){
    res.end("Ola, mundo!");
}).listen(8083);


console.log("Server iniciado!");