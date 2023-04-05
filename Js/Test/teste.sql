mysql -h localhost -u root -p

SHOW DATABASES;

USE sistemadecadastro;

SHOW TABLE;

CREATE TABLE usuarios (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

DESCRIBE usuarios;

INSERT INTO usuarios (nome, email, idade) VALUES (
    "Ana Clara", 
    "ana@teste.com",
    8
);


SELECT * FROM usuarios WHERE nome = "Kevin Maykel";
SELECT * FROM usuarios WHERE idade >= 18;