import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import Post from'./models/Post.js';

const app = express();

// Config
    // Template Engine
        app.engine('handlebars', engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    
// Rota

    app.get('/cat', function(req, res) {
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function() {
            res.send("Post criado com sucesso")
        }).catch(function(erro) {
            res.send("Houve um erro: " + erro)
        })

    })

app.listen(8030, function() {
    console.log("Servidor rodando na url http://localhost:8030");
});