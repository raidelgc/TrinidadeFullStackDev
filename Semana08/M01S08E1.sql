CREATE TABLE IF NOT EXISTS clients(
id SERIAL PRIMARY KEY,
nome varchar(50) not null,
sobrenome varchar(50) not null,
idade INT);

INSERT INTO clients(nome,sobrenome,idade) values('Gabriel','Gonzalez',22);
INSERT INTO clients(nome,sobrenome,idade) values('Raul','Fernandez',28);
INSERT INTO clients(nome,sobrenome,idade) values('Raidel','Gonzalo',30);

SELECT * From clients;