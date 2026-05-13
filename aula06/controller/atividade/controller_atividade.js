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
 const atualizarAtividade = async function(){
   
 }


 //Função para reornar todos os filmes
 const listaratividade = async function(){
    
 }

 //Função para buscar filme pelo ID
 const buscarAtividade = async function (){
   
 }

 //Função para excluir um filme
 const excluirAtividade = async function(){
    
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
    listaratividade,
    buscarAtividade,
    excluirAtividade,
    validarDados
 }
