
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

select * from tbl_filme;

#Inseriri Dados 
insert into tbl_filme(
						nome, 
                        data_lancamento, 
                        duracao, 
                        sinopse, 
                        avaliacao, 
                        valor, 
                        capa,
                        id_clasificacao
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
                            '5'
							);
select * from  tbl_classificacao;
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
#Criar CRUD Classificação

create table tbl_classificacao(
	id  	int not null auto_increment primary key,
    sigla  	varchar (15) not null,
    nome 	varchar (50) not null,
    descricaco varchar (200) not null
);

insert into tbl_classificacao ( sigla, 
								nome, 
                                descricaco)
							value ('L', 
									'livre', 
                                    'Filme de classificação livre!'
									),
								  ('10', 
                                  'Maior de 10 anos ', 
                                  'Conteúdo sencivel para menores de 10 anos');


#Criadas tabelas 
create table tbl_atividade(
	id 				int not null primary key auto_increment,
    atividade 		varchar(80) not null
    );
    
    insert into tbl_atividade(
				atividade
    )
    value(
		'Roteirista, Colaboração com o roteiro'
    );
    select * from tbl_atividade;

create table tbl_nascionalidade(
	id 				int not null primary key auto_increment,
    nascionalidade	varchar(80) not null
    );
    
    insert into tbl_nascionalidade(
		nascionalidade
				) values(
                'Argentino'
                );
  delete from tbl_atividade where id = 9;
desc tbl_filme

select * from tbl_nascionalidade;

update tbl_nascionalidade set
			nascionalidade = 'Jamaica'
            where id = 6 ;
desc tbl_nascionalidade;

select * from tbl_nascionalidade;

insert into tbl_classificacao (sigla,
                                nome,
                                descricaco)
							    values 
                                    ('A', 
									'avaliação', 
                                    'jsdjsjfnsf'
									);
                                    
select * from tbl_filme;
select * from tbl_classificacao;
select * from tbl_genero;
select * from tbl_filme_filme_genero;