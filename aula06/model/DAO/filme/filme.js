/***********************************************************************************************************************************************************************************
 * objetivo: Arquivo responsavel pelo CRUD no banco de dados MySQL na tabela filme 
 * Data: 15/04/2026
 * Autor: Juan Carlos
 * Versão: 1.0
 **************************************************************************************************************************************************************************************/

// Import da biblioteca para gerenciar o banco de dados Mysql no node.js
const  knex = require('knex')

//Import do arquivo de configuração para conexão com BD MySQL
const knexConfig = require('../../database_config_knex/knexFile')

//Criar a conexão com o banco de dados MySql
const knexConex = knex(knexConfig.development)


//Função para Inserir dados na tabela de filme.

// colocar async em todas as funções 
const insertFilmes = async function(filme){
    let sql = `insert into tbl_filme(
						nome, 
                        data_lancamento, 
                        duracao, 
                        sinopse, 
                        avaliacao, 
                        valor, 
                        capa
                        ) 
						values (
							'${filme.nome}', 
                            '${filme.data_lancamneto}', 
                            '${filme.duracao}',
                            '${filme.sinopse}',
                            '${filme.avaliacao}',
                            '${filme.valor}',
                            '${filme.capa}'
							); ` // usar a `` devido as concatenações. 

    //Execultar o scrip sql no Banco de Dados
    let result = await knexConex.raw(sql) // await -> faz com que o java espere a  resposta do banco. 

    if(result)
        return true
    else
        return false
}

// função para atualizar um filme existente na tabela 
const updatefilme = async function(filme){

}

// Função para reornar todos os dados da tabela de filme 
const selectAllFilme = async function() {
    
}

//Função para retornar os dados do Filme Filtrando pelo ID 
 const selectByIdFilme = async function(id) {
    
 }

 //Função para excluir um filme pelo ID
 const deleteFilme = async function(id) {
    
 }

 module.exports = {
    insertFilmes,
    updatefilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme
 }
