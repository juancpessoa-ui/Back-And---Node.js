/***********************************************************************************************************************************************************************************
 * objetivo: Arquivo responsavel pelo CRUD no banco de dados MySQL na tabela filme 
 * Data: 20/05/2026
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
const insertClassificacao = async function(classificacao){ 
    try {
        
        let sql = `insert into tbl_classificacao (sigla,
                                nome, 
                                descricaco)
							    values 
                                    ('${classificacao.sigla}', 
									'${classificacao.nome}', 
                                    '${classificacao.descricaco}'
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

const updateClassificacao = async function (classificacao) {
    try {
        let sql = ` update tbl_classificacao set
                                sigla = '${sigla.silga}', 
								nome  = '${nome.nome}', 
                                descricaco '${descricaco.descricaco}'
                                where id = ${classificacao.id}
                    ;`
    // Executar o scrip sql no Banco de Dados
    let result = await knexConex.raw(sql) // 
    if(result)
        return true
    else
        return false    
    } catch (error) {
        console.log(error)
        return false
    }     
}
const selectAllClassificacao = async function() {
    try {

        //Script para retornar todos os filmes 
        let sql =  `select * from tbl_classificacao order by id desc ` 
        
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
const selectByIdClassificacao = async function (id) {
    try {
        let sql = `select * from tbl_classificacao where id= ${id}`
        
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

module.exports = {
    insertClassificacao,
    updateClassificacao,
    selectAllClassificacao,
    selectByIdClassificacao
 }