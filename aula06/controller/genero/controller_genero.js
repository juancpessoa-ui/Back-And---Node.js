/***********************************************************************************************************************************************************************************
 * objetivo: Arquivo responsavel pelo CRUD no banco de dados MySQL na tabela filme 
 * Data: 15/04/2026
 * Autor: Juan Carlos
 * Versão: 1.0
 **************************************************************************************************************************************************************************************/

const config_message = require('../modulo/configMessages.js')

const generoDAO = require('../../model/DAO/genero/genero.js')

const inserirNovoGenero = async function (genero, contentType) {

    let message = JSON.parse(JSON.stringify(config_message))

    try {


        if (String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON') {

            let validar = await validarDados(genero)

            if (validar) {
                return validar
            } else {
                let result = await generoDAO.insertGenero(genero)
                if (result) { //status code 201

                    genero.id = result

                    message.DEFAUT_MESSAGE.status = message.SUCCES_CREADT_ITEM.status
                        message.DEFAUT_MESSAGE.status_code = message.SUCCES_CREADT_ITEM.status_code
                        message.DEFAUT_MESSAGE.massage = message.SUCCES_CREADT_ITEM.message
                        message.DEFAUT_MESSAGE.response  = genero
                } else {//status code 500
                    return message.ERROR_INTERNAL_SERVER_MODEL
                    //Erro 500 model
                }
                return message.DEFAUT_MESSAGE
            }
        } else {
            return message.ERROR_CONTENT_TYPE
        } 
    } catch (error) {
        
        return message.ERROR_INTERNAL_SERVER_CONTROLLER// ERRO 500 controller

    }
}



const listarGenero = async function () {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        let result = await generoDAO.selectAllGenero()

        if (result) {
            if (result.length > 0) {
                message.DEFAUT_MESSAGE.status = message.SUCCES_CREADT_ITEM.status
                        message.DEFAUT_MESSAGE.status_code = message.SUCCES_CREADT_ITEM.status_code
                        message.DEFAUT_MESSAGE.massage = message.SUCCES_CREADT_ITEM.message
                        message.DEFAUT_MESSAGE.response  = result

                return message.DEFAUT_MESSAGE //200 (Dados do Filme)

            } else {
                return message.ERROR_NOT_FOUND //404
            }
        } else {
            return message.ERROR_INTERNAL_SERVER_MODEL //500(model)
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500(controller)
    }
}

const buscarGenero = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (id == undefined || id == '' || id == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await generoDAO.selectByIdGenero(id)

            if (result) {
                if (result.length > 0) {
                    message.DEFAUT_MESSAGE.status = message.SUCCES_RESPONSE.status
                    message.DEFAUT_MESSAGE.status_code = message.SUCCES_RESPONSE.status_code
                    message.DEFAUT_MESSAGE.response.genero = result

                    return message.DEFAUT_MESSAGE//200
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

const atualizarGenero = async function (genero, id, contentType) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            //validação para o ID incorreto
            let resultBuscarID = await buscarGenero(id)

            if (resultBuscarID.status) {
                let validar = await validarDados(genero)

                if (!validar) {
                    genero.id = id

                    let result = await generoDAO.updateGenero(genero)

                    if (result) {
                        message.DEFAUT_MESSAGE.status = message.SUCCES_UPDATED_ITEM.status
                        message.DEFAUT_MESSAGE.status_code = message.SUCCES_UPDATED_ITEM.status_code
                        message.DEFAUT_MESSAGE.message = message.SUCCES_UPDATED_ITEM.message
                        message.DEFAUT_MESSAGE.response  = genero

                        return message.DEFAUT_MESSAGE //200

                    } else {
                        return message.ERROR_INTERNAL_SERVER_MODEL //500
                    }

                } else {
                    return validar //400
                }
            } else {
                return resultBuscarID // 400 ou 404 ou 500
            }


        } else {
            return message.ERROR_CONTENT_TYPE //415
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER//500(model)
    }

}

const excluirGenero = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let resultBuscarID = await buscarGenero(id)

        if (resultBuscarID.status) {
            let result = await generoDAO.deleteGenero(id)

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


const validarDados = async function (genero) {
    let message = JSON.parse(JSON.stringify(config_message))

    if (genero.nome == undefined || genero.nome == '' || genero.nome == null || genero.nome.length > 80) {
        message.ERROR_BAD_REQUEST.field = '[GENERO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400
    }else {
        return false
    }

}






module.exports = {
    inserirNovoGenero,
    validarDados,
    listarGenero,
    buscarGenero,
    atualizarGenero,
    excluirGenero
}