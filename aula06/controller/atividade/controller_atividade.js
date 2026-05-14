/************************************************************************************************************************************************************************************************
 *Objetivo: Arquivo responsavel pela validação, tratamneto e manipulação de dados para o CRUD de filmes.
 * Data: 13/05/2026
 * Autor: Juan Carlos
 * Versão: 1.0
 *****************************************************************************************************************************************************************************************************/ 
//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados. 
const atividadeDAO = require('../../model/DAO/atividade/atividade.js')

 //Função para inserir um novo filme(Json)
 const inserirNovaAtividade = async function(atividade ,contentType){
   let message = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)

   try { 
        if(String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON'){
            let validar = await validarDados(atividade)

            if(validar){
                return validar
            }else{

                let result = await atividadeDAO.insertAtividade(atividade)
                if(result){//201
                    atividade.id = result //criando atributo ID no Json da Atividdade
                    message.DEFAUT_MESSAGE.status = message.SUCCES_CREADT_ITEM.status
                    message.DEFAUT_MESSAGE.status_code = message.SUCCES_CREADT_ITEM.status_code
                    message.DEFAUT_MESSAGE.massage = message.SUCCES_CREADT_ITEM.message
                    message.DEFAUT_MESSAGE.response = atividade 
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

 //Função para atualizar filme 
 const atualizarAtividade = async function(atividade ,id,contentType){
    let message = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)

   let message  = JSON.parse(JSON.stringify(config_message)) 
   
       try {
           if(String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON'){
                   let resultBuscarId = await buscarAtividade(id)
   
               // se a função buscar encontrar o atividade o atributo status do Json será verdadeiro
               // isso signicica que o atividade existe na base, caso não retorne true, então 
               // o retorno da função poderá ser 400 ou 404 até mesmo um 500
               if(resultBuscarId.status){
                   let validar = await validarDados(atividade)
                   
   
                   //Validação de Campos Obrigatorios para a atualização
                   if(!validar){
   
                       // Adiciona o atributo ID do atividade no Json para ser enviado ao DAO
                       atividade.id = id
   
                       //Chama a função do DAO para atualizar o Atividade (Dados e o ID)
                       let result = await atividadeDAO.updateAtividade(atividade)
                       if(result){
                           message.DEFAUT_MESSAGE.status = message.SUCCES_UPDATED_ITEM.status
                           message.DEFAUT_MESSAGE.status_code = message.SUCCES_UPDATED_ITEM.status_code
                           message.DEFAUT_MESSAGE.message = message.SUCCES_UPDATED_ITEM.message
                           message.DEFAUT_MESSAGE.response = atividade
   
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


 //Função para reornar todos os filmes
 const listarAtividade = async function(){
    let message = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)

    try {
        let result = await atividadeDAO.selectAllAtividade()
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

 //Função para buscar filme pelo ID
 const buscarAtividade = async function (id){
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

 //Função para excluir um filme
 const excluirAtividade = async function(id){
    try {
            // Validação do erro 400 e 404
            let resultBuscarId = await buscarAtividade(id)
            
            //Validação para verificar se o status é verdadeiro (Se existe o filme)
            if(resultBuscarId.status){
             //Chamar função DAO para excluir o filme
                let result = await atividadeDAO.deleteAtividade(id)
                if(result){
                    return message.SUCCES_DELETED_ITEM //(registro excluido)
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL // Erro na model 
                    }
            }else{
                return resultBuscarId
            }
                
            
            
        } catch (error) {
            return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500(CONTROLLER)
        }
 }

 //Função para validar todos os dados de filmes (obrigatorio, qtde de caracteres,etc)
 const validarDados = async function (atividade){


    //Criando um clone do objeto json para manipular a sua estrutura local sem modificar a estrutura original. 
    let message  = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)
    console.log( atividade.atividade.split('.')[0].length)
    
    if(atividade.atividade == undefined || atividade.atividade  === '' || atividade.atividade == null ){
        message.ERROR_BAD_REQUEST.field = '[ATIVIDADE] INVALIDO'
        return message.ERROR_BAD_REQUEST //400
    }else{
        return false 
    }
 }

 module.exports = {
    inserirNovaAtividade,
    atualizarAtividade,
    listarAtividade,
    buscarAtividade,
    excluirAtividade,
    validarDados
 }
