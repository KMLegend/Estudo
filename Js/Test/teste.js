import Sequelize from 'sequelize';

const sequelize = new Sequelize('test', 'root', 'Ke12345678901', {
    host: "localhost",
    dialect: 'mysql'
});


sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!");
}).catch(function (erro) {
    console.log("Falha ao se conectar: " + erro);
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

/*
Postagem.create({
    titulo: "UM Titulo qualquer",
    conteudo: "123321 tudo sobre 2"
})

Insere na tabela.
*/

// isso é um model
const Pagamentos = sequelize.define('pagamentos', {
    conta: {
        type: Sequelize.INTEGER
    },
    nome: {
        type: Sequelize.STRING
    },
    nsu: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    valor: {
        type: Sequelize.DECIMAL
    },
    data_vencimento: {
        type: Sequelize.DATE
    },
    data_hora_pagamento: {
        type: Sequelize.DATE
    }
});


