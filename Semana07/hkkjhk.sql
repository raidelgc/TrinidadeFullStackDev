CREATE TABLE produto(
	id serial primary key,
	descricao varchar(20) not null
)
CREATE TABLE setor(
id SERIAL primary key,
nome varchar(40) not null
);
CREATE TABLE IF NOT EXISTS funcionario(
id SERIAL PRIMARY KEY, 
nome varchar(50) not null,
cpf char(11) not null,
rg char(11) not null,
id_funcionario_setor INTEGER,
foreign key(id_funcionario_setor) references setor(id)
);


CREATE TABLE IF NOT EXISTS cliente(
   id SERIAL PRIMARY KEY,
    nome varchar(50) not null,
	cpf char(11) not null,
	rg char(11) not null	
);
CREATE TABLE item(
    id SERIAL PRIMARY KEY,
	nome VARCHAR(70) NOT NULL,
	preco NUMERIC(5,2)
);

---quantidade=6 (inteiro)


CREATE TABLE dependente(
id SERIAL PRIMARY KEY, 
nome varchar(50) not null, 
cpf char(11) not null, 
rg char(11) not null,
id_funcionario_dependente INTEGER,
foreign key(id_funcionario_dependente) references funcionario(id)
);

ALTER TABLE ITEM RENAME TO ITENS;


ALTER TABLE funcionario ADD salario decimal(11,2);


SELECT * FROM produto;

select *from itens

SELECT distinct nome FROM funcionario;
ALTER TABLE funcionario ADD comissao decimal(11,2);
UPDATE funcionario SET salario=1000.50 where id=7;
UPDATE funcionario SET salario=2000.50 where id=9;
UPDATE funcionario SET salario=3000.50 where id=10;
UPDATE funcionario SET salario=4000.50 where id=11;
UPDATE funcionario SET salario=5000.50 where id=12;
UPDATE funcionario SET comissao=1000.50 where id=7;
UPDATE funcionario SET comissao=2000.50 where id=9;
UPDATE funcionario SET comissao=3000.50 where id=10;
UPDATE funcionario SET comissao=4000.50 where id=11;
UPDATE funcionario SET comissao=5000.50 where id=12;
SELECT * FROM funcionario;