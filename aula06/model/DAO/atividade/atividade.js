/***********************************************************************************************************************************************************************************
 * objetivo: Arquivo responsavel pelo CRUD no banco de dados MySQL na tabela atividade
 * Data: 13/04/2026
 * Autor: Juan Carlos
 * Versão: 1.0
 **************************************************************************************************************************************************************************************/
// Import da biblioteca para gerenciar o banco de dados Mysql no node.js
const  knex = require('knex')

//Import do arquivo de configuração para conexão com BD MySQL
const knexConfig = require('../../database_config_knex/knexFile')

//Criar a conexão com o banco de dados MySql
const knexConex = knex(knexConfig.development)

//Função para Inserir dados na tabela de atividade.

const insertAtividade = async function (atividade) {
    try {
        let sql = ` insert into tbl_atividade(
				    atividade
                    )
                    value(
		            '${atividade.atividade}'
                    );`
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

const updateAtividade = async function (atividade) {
    try {
        let sql = ` insert into tbl_atividade(
				    atividade
                    )
                    value(
		            '${atividade.atividade}'
                    );`
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

const selectAllAtividade = async function () {
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

const selectByIdAtividade = async function (id) {
    
}

const deleteAtividade = async function (id) {
    
}

module.exports = {
    insertAtividade,
    updateAtividade,
    selectAllAtividade,
    selectByIdAtividade,
    deleteAtividade
 }