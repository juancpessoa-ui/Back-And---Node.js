/***********************************************************************************************************************************************************************************
 * objetivo: Arquivo responsavel pelo CRUD no banco de dados MySQL na tabela filme 
 * Data: 15/04/2026
 * Autor: Juan Carlos
 * Versão: 1.0
 **************************************************************************************************************************************************************************************/

const config_message = require('../modulo/configMessages.js')

const filmeGeneroDAO = require('../../model/DAO/filme_genero.js/filme_genero.js')

const inserirNovoFilmeGenero = async function (filme_filme_genero) {

    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let validar = await validarDados(filme_filme_genero)

            if (validar) {
                return validar
            } else {
                let result = await filmeGeneroDAO.insertFilmeGenero(filme_filme_genero)
                if (result) { //status code 201

                    filme_filme_genero.id = result

                    message.DEFAUT_MESSAGE.status = message.SUCCES_CREADT_ITEM.status
                    message.DEFAUT_MESSAGE.status_code = message.SUCCES_CREADT_ITEM.status_code
                    message.DEFAUT_MESSAGE.message = message.SUCCES_CREADT_ITEM.message
                    message.DEFAUT_MESSAGE.response = filme_filme_genero
                } else {//status code 500
                    return message.ERROR_INTERNAL_SERVER_MODEL //Erro 500 model
                }
                return message.DEFAUT_MESSAGE
            }
        
        
    } catch (error) {
        
        return message.ERROR_INTERNAL_SERVER_CONTROLLER// ERRO 500 controller

    }
}



const listarFilmeGenero = async function () {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        let result = await filmeGeneroDAO.selectAllFilmeGenero()

        if (result) {
            if (result.length > 0) {
                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.genero = filme_filme_genero

                return message.DEFAULT_MESSAGE //200 (Dados do Filme)

            } else {
                return message.ERROR_NOT_FOUND //404
            }
        } else {
            return message.ERROR_INTERNAL_SERVER_MODEL //500(model)
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500(controller)
    }
}

const buscarFilmeGenero = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (id == undefined || id == '' || id == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await filmeGeneroDAO.selectByIdFilmeGenero(id)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme_filme_genero = result

                    return message.DEFAULT_MESSAGE//200
                } else {
                    return message.ERROR_NOT_FOUND//404
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL//500(model)
            }
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

const atualizarFilmeGenero = async function (filme_filme_genero, id, ) {
     let message = JSON.parse(JSON.stringify(config_message))
     try {
      
            let resultBuscarID = await buscarGenero(id)

            if (resultBuscarID.status) {
                let validar = await validarDados(genero)

                if (!validar) {
                    filme_filme_genero.id = id

                    let result = await filmeGeneroDAO.updateFilmeGenero(filme_filme_genero)

                    if (result) {
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.response = filme_filme_genero

                        return message.DEFAULT_MESSAGE //200

                     } else {
                    return validar //400
                        }
            } else {
                return resultBuscarID // 400 ou 404 ou 500
            }

            }
        } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER//500(model)
         }

}

const excluirFilmeGenero = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let resultBuscarID = await buscarGenero(id)

        if (resultBuscarID.status) {
            let result = await filmeGeneroDAO.deleteFilmeGenero(id)

            if (result) {
                return message.SUCCESS_DELETE_ITEM //200(Registro excluido)
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        } else {
            return resultBuscarID //404 ou 400
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER//500(controller)
    }


}

const validarDados = async function (filme_filme_genero) {
    let message = JSON.parse(JSON.stringify(config_message))

    if (filme_filme_genero.id_filme == undefined || filme_filme_genero.id_filme == '' || filme_filme_genero.id_filme == null || isNaN(filme_filme_genero.id_filme)) {
        message.ERROR_BAD_REQUEST.field = '[ID_FILME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400
    }else if (filme_filme_genero.id_genero == undefined || filme_filme_genero.id_genero == '' || filme_filme_genero.id_genero == null || isNaN(filme_filme_genero.id_genero)) {
        message.ERROR_BAD_REQUEST.field = '[ID_FILME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    }else {
        return false
    }

}

const buscarFilmeidGenero = async function (idGenero) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (idGenero == undefined || idGenero == '' || idGenero == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await filmeGeneroDAO.selectByIdFilmeGenero(idGenero)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme_filme_genero = result

                    return message.DEFAULT_MESSAGE//200
                } else {
                    return message.ERROR_NOT_FOUND//404
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL//500(model)
            }
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

const buscarGeneroidFilme = async function (idFilme) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (idFilme == undefined || idFilme == '' || idFilme == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await filmeGeneroDAO.selectGeneroByIdFilme(idFilme)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme_filme_genero = result

                    return message.DEFAULT_MESSAGE//200
                } else {
                    return message.ERROR_NOT_FOUND//404
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL//500(model)
            }
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

//Função para excluir os generos relacinados com o filme

const excluirGenerosIdFilme = async function (idFilme) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        
            let result = await filmeGeneroDAO.deleteFilmebyidGenero(idFilme)
            if (result) {
                return message.SUCCESS_DELETE_ITEM //200(Registro excluido)
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
         

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER//500(controller)
    }


}

module.exports = {
    inserirNovoFilmeGenero,
    validarDados,
    listarFilmeGenero,
    buscarFilmeGenero,
    atualizarFilmeGenero,
    excluirFilmeGenero,
    buscarFilmeidGenero,
    buscarGeneroidFilme,
    excluirGenerosIdFilme
}