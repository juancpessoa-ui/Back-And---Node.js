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
const ERROR_BADREQUEST = {  status: false, status_code: 400 , message: 'Os dados enviados na equisição não estão corretos'}

//Mensagens de sucesso da API
const SUCCES_CREADT_ITEM = {status: true, status_code: 201, message: 'Registro incerido com sucesso'}

module.exports = {
    DEFAUT_MESSAGE,
    ERROR_BADREQUEST,
    SUCCES_CREADT_ITEM
}