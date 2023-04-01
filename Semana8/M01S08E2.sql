CREATE TABLE IF NOT EXISTS clients(
id SERIAL PRIMARY KEY,
nome varchar(50) not null,
sobrenome varchar(50) not null,
idade INT);

INSERT INTO clients(nome,sobrenome,idade) values('Gabriel','Gonzalez',22);
INSERT INTO clients(nome,sobrenome,idade) values('Raul','Fernandez',28);
INSERT INTO clients(nome,sobrenome,idade) values('Raidel','Gonzalo',30);

UPDATE clients set nome='Rodolfo' where id=1;
UPDATE clients set idade=36 where id=3;
SELECT * From clients order by id;