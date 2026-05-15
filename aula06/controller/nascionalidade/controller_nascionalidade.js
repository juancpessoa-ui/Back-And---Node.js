/************************************************************************************************************************************************************************************************
 *Objetivo: Arquivo responsavel pela validação, tratamneto e manipulação de dados para o CRUD de filmes.
 * Data: 15/05/2026
 * Autor: Juan Carlos
 * Versão: 1.0
 *****************************************************************************************************************************************************************************************************/ 
//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados. 
const nascionalidadeDAO = require('../../model/DAO/nascionalidade/nascionalidade.js')

// Funcão para inserir nova Nascionalidade no Banco

const  inserirNovaNascionalidade = async function(nascionalidade ,contentType) {

    let message = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)
    
       try { 
            if(String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON'){
                let validar = await validarDados(nascionalidade)
    
                if(validar){
                    return validar
                }else{
    
                    let result = await nascionalidadeDAO.insertNascionalidade(nascionalidade)
                    if(result){//201
                        nascionalidade.id = result //criando atributo ID no Json da Atividdade
                        message.DEFAUT_MESSAGE.status = message.SUCCES_CREADT_ITEM.status
                        message.DEFAUT_MESSAGE.status_code = message.SUCCES_CREADT_ITEM.status_code
                        message.DEFAUT_MESSAGE.massage = message.SUCCES_CREADT_ITEM.message
                        message.DEFAUT_MESSAGE.response = nascionalidade 
                    }else{ //500
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }
                return message.DEFAUT_MESSAGE
            }else{
                return message.ERROR_CONTENT_TYPE//415
            }
        
       } catch (error) {
        return  message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (Controller)
       }
}

// Função para atualizar Nascionalidade no Banco 

const atualizarNascionalidade = async function(nascionalidade, id,contentType) {
     let message = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)
    
    
       
           try {
               if(String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON'){
                       let resultBuscarId = await buscarNascionalidade(id)
       
                   // se a função buscar encontrar o atividade o atributo status do Json será verdadeiro
                   // isso signicica que o atividade existe na base, caso não retorne true, então 
                   // o retorno da função poderá ser 400 ou 404 até mesmo um 500
                   if(resultBuscarId.status){
                       let validar = await validarDados(nascionalidade)
                       
       
                       //Validação de Campos Obrigatorios para a atualização
                       if(!validar){
       
                           // Adiciona o atributo ID do atividade no Json para ser enviado ao DAO
                           atividade.id = id
       
                           //Chama a função do DAO para atualizar o Atividade (Dados e o ID)
                           let result = await nascionalidadeDAO.updateNascionalidade(nascionalidade)
                           if(result){
                               message.DEFAUT_MESSAGE.status = message.SUCCES_UPDATED_ITEM.status
                               message.DEFAUT_MESSAGE.status_code = message.SUCCES_UPDATED_ITEM.status_code
                               message.DEFAUT_MESSAGE.message = message.SUCCES_UPDATED_ITEM.message
                               message.DEFAUT_MESSAGE.response = nascionalidade
       
                               return message.DEFAUT_MESSAGE // 200(atualizado)
       
       
                           }else{
                               return message.ERROR_INTERNAL_SERVER_MODEL //500
                           }
       
                       }else{
                           return validar // 400
                       }
                   }else{
                       return resultBuscarId// 400, 404 ou 500. 
                   }
                   
               }else{
                   return message.ERROR_CONTENT_TYPE // 415
               }
           } catch (error) {
               return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500(CONTROLLER)
           }
}

// Função que lista Nascionalidade 
const listarNascionalidade = async function () {

    let message = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)
    
        try {
            let result = await nascionalidadeDAO.selectAllNascionalidade()
            if(result){
    
                if(result.length > 0 ){
                
                    message.DEFAUT_MESSAGE.status = message.SUCCES_CREADT_ITEM.status
                    message.DEFAUT_MESSAGE.status_code = message.SUCCES_CREADT_ITEM.status_code
                    message.DEFAUT_MESSAGE.massage = message.SUCCES_CREADT_ITEM.message
                    message.DEFAUT_MESSAGE.response = result 
    
                    return message.DEFAUT_MESSAGE// 200(dados do filme)
                    
                }else{
                    console.log(result)
                    return message.ERROR_NOT_FOND //404 
                } 
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL // 500(model)
            }
        } catch (error) {
            return message.ERROR_INTERNAL_SERVER_CONTROLLER //500(controller)
        }
}

// Função que Busca NAscionalidade no banco de Dados 
const buscarNascionalidade = async function (id) {
    let message  = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)
       
           try {
               //Validação para garantir que id seja valido
               if(id == undefined || id == '' || id == null ||  isNaN(id)){
                   message.ERROR_BAD_REQUEST.field = '[ID INVÁLIDO]'
                   return message.ERROR_BAD_REQUEST //400
               }else{
                   let result = await atividadeDAO.selectByIdAtividade(id)
       
                   if(result){
                       if(result.length > 0){
                           message.DEFAUT_MESSAGE.status = message.SUCCES_RESPONSE.status
                           message.DEFAUT_MESSAGE.status_code = message.SUCCES_RESPONSE.status_code
                           message.DEFAUT_MESSAGE.response.atividade = result
                           
                           return message.DEFAUT_MESSAGE //200
                       }else{
                        console.log(result)
                           return message.ERROR_NOT_FOND //404
                       }
                   }else{
                       return message.ERROR_INTERNAL_SERVER_MODEL// 500(MODEL)
                   }
               }     
           } catch (error) {
               return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (CONTROLLER)
           }
}

// Função que exclui Nascionalidade no banco de Dados
const excluirNascionalidade = async function (params) {
    
}

//Função para validar todos os dados de filmes (obrigatorio, qtde de caracteres,etc)
 const validarDados = async function (nascionalidade){


    //Criando um clone do objeto json para manipular a sua estrutura local sem modificar a estrutura original. 
    let message  = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)
    console.log( nascionalidade.nascionalidade.split('.')[0].length)
    
    if(nascionalidade.nascionalidade == undefined || nascionalidade.nascionalidade  === '' || nascionalidade.nascionalidade == null ){
        message.ERROR_BAD_REQUEST.field = '[ATIVIDADE] INVALIDO'
        return message.ERROR_BAD_REQUEST //400
    }else{
        return false 
    }
 }

module.exports = {
    inserirNovaNascionalidade,
    atualizarNascionalidade,
    listarNascionalidade,
    buscarNascionalidade,
    excluirNascionalidade,
    validarDados
 }