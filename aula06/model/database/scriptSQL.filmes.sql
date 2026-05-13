
# Cria o database de proejto de filmes 
create database db_filmes_2026_1_a;

# Ativa o uso de database de filmes
use db_filmes_2026_1_a;

#Cria a tabela de filmes 
create table tbl_filme(
	id 				int not null primary key auto_increment,
    nome 			varchar(80) not null,
    data_lancamento date not null,
    duracao 		time not null,
    sinopse			text not null,
    avaliacao		decimal(3,2) default null,
    valor 			decimal(5,2) not null default 0,
    capa			varchar(255)
);

show tables;

#Inseriri Dados 
insert into tbl_filme(
						nome, 
                        data_lancamento, 
                        duracao, 
                        sinopse, 
                        avaliacao, 
                        valor, 
                        capa
                        ) 
						values (
							'C', 
                            '2026-04-02', 
                            '01:39:00',
                            'Uma nova aventura leva Mario a enfrentar um inédito e ameaçador super vilão. Em Super Mario Galaxy: O Filme, 
                            o bigodudo encanador italiano e seus aliados embarcam numa aventura galáctica repleta de ação e momentos 
                            emocionantes depois de salvar o Reino dos Cogumelos.Sessões',
                            '3',
                            '50.70',
                            'https://br.web.img3.acsta.net/c_310_420/img/5b/ea/5bea1aeac3323aeaaf82449a34fafbbf.jpg'
							);
select * from tbl_filme;
select * from tbl_filme order by id desc;

delete from tbl_filme where id = 15;


update tbl_filme set
	nome = 'filme teste',
    data_lancamento = '2000-01-01',
    duracao = '02:00',
    sinopse = 'testando upadate n aplicação e banco',
    avaliacao = '2',
    valor = '10',
    capa = 'teste capa'
where id = 11;

delete from tbl_filme where id > 0;
#***************************************************************************************************#

#Criar tabelas 
create table tbl_atividade(
	id 				int not null primary key auto_increment,
    atividade 		varchar(80) not null
    );

create table tbl_nascionalidade(
	id 				int not null primary key auto_increment,
    nascionalidade	varchar(80) not null
    );
  


