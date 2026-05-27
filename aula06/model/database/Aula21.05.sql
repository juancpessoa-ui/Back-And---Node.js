use db_filmes_2026_1_a;

show tables;


select * from tbl_filme;
select * from tbl_classificacao;
select * from tbl_genero;
select * from tbl_filme_filme_genero;


#relacionamneto entre tabelas
# INNER JOIN
## inner join é a linha de relacionamneto / Inner : só retorna o que estiver relacionado. 
select tbl_filme.nome,tbl_filme.data_lancamento,tbl_filme.sinopse, 
			tbl_classificacao.sigla
from tbl_filme
		inner join tbl_classificacao 
         on tbl_classificacao.id = tbl_filme.id_classificacao;
         
#LEFT JOIN
#Left retorna o que esta a esquerda  mesmo sem relacionamento. 
select tbl_filme.nome,tbl_filme.data_lancamento,tbl_filme.sinopse, 
			tbl_classificacao.sigla
from tbl_filme 
		left join tbl_classificacao 
         on tbl_classificacao.id = tbl_filme.id_classificacao;
         
# RIGHT
 # right que retorna tudo o que tem na tabela da direita mesmo sem relacionamneto
select tbl_filme.nome,tbl_filme.data_lancamento,tbl_filme.sinopse, 
			tbl_classificacao.sigla
from tbl_filme  
		right join tbl_classificacao 
         on tbl_classificacao.id = tbl_filme.id_classificacao;
         
insert into tbl_genero (nome)
			values  ('Drama'),
					('Ação'),
                    ('comedia'),
                    ('Aventura'),
                    ('Suspense');
                    
insert into tbl_filme_filme_genero (id_filme, id_genero)
				values (23,5),
						(23,2),
						(23,3),
						(23,4);
                        
#ATENÇÃO:


select tbl_filme.nome,tbl_filme.sinopse,tbl_filme.duracao,
		tbl_classificacao.sigla,tbl_classificacao.descricao,tbl_classificacao.nome,
        tbl_genero.nome
        
from tbl_filme 
	inner join tbl_classificacao
		on tbl_classificacao.id = tbl_filme.id_classificacao
    inner  join tbl_filme_genero
		on tbl_filme.id = tbl_fime_genero.id_filme
	inner join tbl_genero
		on tbl_genero.id = tbl_filmegenero.id_genero
	order by tbl_filme.nome asc;
    
    #Refeito:
    select 
    tbl_filme.nome as nome_filme,
    tbl_filme.sinopse,
    tbl_filme.duracao,
    tbl_classificacao.sigla,
    tbl_classificacao.descricaco, # Arrumar nome do atributo descricaco
    tbl_classificacao.nome as nome_classificacao,
    tbl_genero.nome as nome_genero

from tbl_filme

inner join tbl_classificacao
    on tbl_classificacao.id = tbl_filme.id_classificacao

inner join tbl_filme_filme_genero
    on tbl_filme.id = tbl_filme_filme_genero.id_filme

inner join tbl_genero
    on tbl_genero.id = tbl_filme_filme_genero.id_genero

where tbl_filme.nome like '%mario%' # Filtro por Sting ou palavra chave

order by tbl_filme.nome asc;

# Verificar tabela por tabela

select * from tbl_filme;
select * from tbl_classificacao;
select * from tbl_genero;
select * from tbl_filme_filme_genero;


#Refeito com left para trazer filme sem genero:

    select 
    tbl_filme.nome as nome_filme,
    tbl_filme.sinopse,
    tbl_filme.duracao,
    tbl_classificacao.sigla,
    tbl_classificacao.descricaco, # Arrumar nome do atributo descricaco
    tbl_classificacao.nome as nome_classificacao,
    tbl_genero.nome as nome_genero

from tbl_filme

inner join tbl_classificacao
    on tbl_classificacao.id = tbl_filme.id_classificacao

left join tbl_filme_filme_genero
    on tbl_filme.id = tbl_filme_filme_genero.id_filme

left join tbl_genero
    on tbl_genero.id = tbl_filme_filme_genero.id_genero
 
order by tbl_filme.nome asc;


#Sub Consulta 

select * from tbl_filme_genero where id_filme in(
									select tbl_filme.id from tbl_filme
);
