create table clientes (
	id int primary key not null auto_increment,
    nome varchar(150),
    email varchar(150),
    cpf int,
    telefone int
);


create table produtos (
	id int primary key not null auto_increment,
    nome_prod varchar(150),
    descricao varchar(300),
    valor_prod float(5, 2)
);

create table pedidos (
	id int primary key not null auto_increment,
    prod_id int not null,
    cli_id int not null,
    foreign key (prod_id) references produtos(id) on delete cascade,
    foreign key (cli_id) references clientes(id)  on delete cascade
);