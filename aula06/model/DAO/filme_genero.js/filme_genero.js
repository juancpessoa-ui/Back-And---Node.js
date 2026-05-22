/***********************************************************************************************************************************************************************************
 * objetivo: Arquivo responsavel pelo CRUD no banco de dados MySQL na tabela filme 
 * Data: 15/04/2026
 * Autor: Juan Carlos
 * Versão: 1.0
 **************************************************************************************************************************************************************************************/


const knex = require('knex')

const knexConfig = require('../../database_config_knex/knexFile.js')

const knexConex = knex(knexConfig.development)

const insertFilmeGenero = async function (filme_filme_genero) {


    try {
        let sql = `insert into tbl_filme_filme_genero 
                    (id_filme,
                    id_genero)
                    values(
                    ${filme_filme_genero.id_filme},
                    ${filme_filme_genero.id_genero}

                    );`

    let result = await knexConex.raw(sql)
    
    if (result) {
        return result[0].insertId //retorna o ID gerado 
    } else {
        return false
    }

    } catch (error) {
        console.log(error)
        return false
    }

}


const selectAllFilmeGenero = async function () {
    try {
        //Script para retornar todos os filmes
        let sql = 'select * from tbl_filme_filme_genero order by id'

        //Executa no banco de dados o script SQL para retornar os filmes
        let result = await knexConex.raw(sql)

        //Validação para verificar se o retorno no BD é um array
        //Se o scriptSQL der erro, o banco não devolve um array
        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }
    } catch (error) {

    }
}


const selectByIdFilmeGenero = async function (id) {

    try {
        let sql = `select * from tbl_filme_filme_genero where id=${id}`

        let result = await knexConex.raw(sql)

        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }

    } catch (error) {
        return false
    }

}

const updateFilmeGenero = async function (filme_filme_genero) {

    try {
        let sql = `update tbl_filme_filme_genero set
                id_filme = ${filme_filme_genero.id_filme},
                id_genero = ${filme_filme_genero.id_genero}
                where id = ${filme_filme_genero.id}`
        //executa o script SQL no BD
        let result = await knexConex.raw(sql)
    
        if (result) {
            return true
        } else {
            return false
        }
        
    } catch (error) {
        return false
    }
}

// Função que vai retornar os dado do genero filtrando pelo id do filme
const selectFilmesByIdFilmeGenero = async function (idGenero) {

    try {
        let sql = `select tbl_filme.* 
                    from tbl_filme 
                    inner join  tbl_filme_filme_genero 
                        on tbl_filme.id = tbl_filme_filme_genero.id_filme
                    inner join tbl_genero
                        on tbl_genero.id = tbl_filme.id_genero
                    where tbl_genero.id=${idGenero}`

        let result = await knexConex.raw(sql)

        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }

    } catch (error) {
        return false
    }

}
// Função que vai retornar os dado do filme filtrando pelo id do genero
const selectGeneroByIdFilme = async function (idFilme) {

    try {
        let sql = `select tbl_genero.* 
                    from tbl_filme 
                    inner join  tbl_filme_filme_genero 
                        on tbl_filme.id = tbl_filme_filme_genero.id_filme
                    inner join tbl_genero
                        on tbl_genero.id = tbl_filme.id_genero
                    where tbl_filme.id=${idFilme}`

        let result = await knexConex.raw(sql)

        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }

    } catch (error) {
        return false
    }

}

const deleteFilmeGenero = async function (id) {

    try {
        let sql = `delete from tbl_filme_filme_genero where id=${id}`

        let result = await knexConex.raw(sql)

        if (result) {
            return true
        } else {
            return false
        }

    } catch (error) {
        return false
    }

}

module.exports = {
    insertFilmeGenero,
    selectAllFilmeGenero,
    selectByIdFilmeGenero,
    updateFilmeGenero,
    deleteFilmeGenero,
    selectFilmesByIdFilmeGenero,
    selectGeneroByIdFilme
}