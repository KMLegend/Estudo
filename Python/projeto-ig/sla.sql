mysql -u root -p --host=127.0.0.1


CREATE DATABASE ig;

USE ig;


CREATE TABLE membros (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(50), 
    telefone VARCHAR(20),
    endereco VARCHAR(100),
    data_nascimento DATE,
    observacao TEXT 
);

select * from membros;

DELETE FROM membros WHERE id >= 3;