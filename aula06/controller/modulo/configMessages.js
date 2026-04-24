/************************************************************************************************************************************************************************************************
 *Objetivo: Arquivo responsavel pela confguração e padronização das mensagens da API
 * Data: 17/04/2026
 * Autor: Juan Carlos
 * Versão: 1.0
 *****************************************************************************************************************************************************************************************************/ 



//Padronização de cabeçalho para retorno dos endpoint da API
 const DEFAUT_MESSAGE = {
    api_description :   'Api para gerenciar o contole de filmes.',
    development:        'Juan Carlos Fonseca',
    version :           '1.0.4.26',
    status:             Boolean,
    status_code:        Number,
    response:           {}
}

// mensagem de erro da API
const   ERROR_BAD_REQUEST                   = {  status: false, status_code: 400 , message: 'Os dados enviados na equisição não estão corretos'}
const   ERROR_INTERNAL_SERVER_MODEL         = {  status: false, status_code: 500 , message: 'Não foi possivel processar a requisição, por conta de erro na Api [ERRO NA MODELAGEM DE DADOS].'}
const   ERROR_INTERNAL_SERVER_CONTROLLER    = {  status: false, status_code: 500 , message: 'Não foi possivel processar a requisição, por conta de erro na Api [ERRO NA CONTROLLER].'}
const   ERROR_NOT_FOND                     = {  status: false, status_code: 404 , message: 'Não foi encontrado nenhum dado para retorno [ERRO ].'}
const   ERROR_CONTENT_TYPE                  = {  status: false, status_code: 415 , message: 'Não foi possivel processar a requisição, pois o formato de dados aceito pela api é somente Json.'}

//Mensagens de sucesso da API
const SUCCES_CREADT_ITEM = {status: true, status_code: 201, message: 'Registro incerido com sucesso'}
const SUCCES_RESPONSE    = {status: true, status_code: 201}


module.exports = {
    DEFAUT_MESSAGE,
    ERROR_BAD_REQUEST,
    SUCCES_CREADT_ITEM,
    ERROR_INTERNAL_SERVER_MODEL,
    ERROR_INTERNAL_SERVER_CONTROLLER,
    ERROR_CONTENT_TYPE,
    ERROR_NOT_FOND,
    SUCCES_RESPONSE
}