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
    try {
        
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
                                '${filme.data_lancamento}', 
                                '${filme.duracao}',
                                '${filme.sinopse}',
                                if ('${filme.avaliacao}' = '', null,'${filme.avaliacao}'),
                                '${filme.valor}',
                                '${filme.capa}'
                                ); ` // usar a `` devido as concatenações. 

        //Execultar o scrip sql no Banco de Dados
        let result = await knexConex.raw(sql) // await -> faz com que o java espere a  resposta do banco. 

        if(result)
            return result[0].insertId// Retorna o ID gerado
        else
            return false
    } catch (error) {
        console.log(error)
        return false
    }
}   

// função para atualizar um filme existente na tabela 
const updatefilme = async function(filme){

    try {
        
        let sql = `update tbl_filme set
                    nome            = '${filme.nome}',
                    data_lancamento = '${filme.data_lancamento}',
                    duracao         = '${filme.duracao}',
                    sinopse         = '${filme.sinopse}',
                    avaliacao       = if ('${filme.avaliacao}' = '', null,'${filme.avaliacao}'),
                    valor           = '${filme.valor}',
                    capa            = '${filme.capa}'
                    where id        = ${filme.id}`
                    
    // Executa script                
    let result = await knexConex.raw(sql)

    if(result)
        return true
    else
        return false
    } catch (error) {
        console.log(erro)
    }
    
}

// Função para reornar todos os dados da tabela de filme 
const selectAllFilme = async function() {
    try {

        //Script para retornar todos os filmes 
        let sql =  `select * from tbl_filme order by id desc ` 
        
        //execulta no banco de Dados o script SQL para retornar os filmes
        let result = await knexConex.raw(sql)

        //Validação para verificar se o retorno no Bd é um Array
        //Se o scriptSQL de erro, o banco não devolve um array 
        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }

    } catch (error) {
        return false
    }
}


//Função para retornar os dados do Filme Filtrando pelo ID 
 const selectByIdFilme = async function(id) {
    try {
        let sql = `select * from tbl_filme where id= ${id}`
        
        let result = await knexConex.raw(sql)

        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }


    } catch (error) {
        return false
    }
 }

 //Função para excluir um filme pelo ID
 const deleteFilme = async function(id) {
    try {
        
        let sql = `delete from tbl_filme where id = ${id}`
    
    // Executa script                
    let result = await knexConex.raw(sql)

    if(result)
        return true
    else
        return false
    } catch (error) {
        console.log(error)
    }
    
 }

 module.exports = {
    insertFilmes,
    updatefilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme
 }
