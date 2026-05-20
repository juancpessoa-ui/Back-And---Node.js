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
                                nome 
                                descricaco)
							    value ('${classificacao.sigla}', 
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

module.exports = {
    insertClassificacao,
 }