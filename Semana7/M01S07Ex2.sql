CREATE TABLE IF NOT EXISTS cliente(
   id SERIAL PRIMARY KEY,
    nome varchar(50) not null,
	sobrenome varchar(50) not null,
	cpf char(11) not null,
	rg char(11) not null	
);

CREATE TABLE pedido(
	id serial primary key,
	data varchar(20) not null,
	id_pedido_cliente INTEGER,
	foreign key (id_pedido_cliente) reference cliente(id)
);

CREATE TABLE produto(
	id serial primary key,
	nome varchar(50) not null,
	id_producto_cliente INTEGER,
	foreign key (id_producto_cliente) reference cliente(id)
);


