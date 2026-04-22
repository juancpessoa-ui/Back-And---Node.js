/************************************************************************************************************************************************************************************************
 *Objetivo: Arquivo responsavel pela validação, tratamneto e manipulação de dados para o CRUD de filmes.
 * Data: 17/04/2026
 * Autor: Juan Carlos
 * Versão: 1.0
 *****************************************************************************************************************************************************************************************************/ 
//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados. 
const filmeDAO = require('../../model/DAO/filme/filme.js')

 //Função para inserir um novo filme(Json)
 const inserirNovoFilme = async function(filme,contentType){
    console.log(filme)
    //Criando um clone do objeto json para manipular a sua estrutura local sem modificar a estrutura original. 
    let message  = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)

    try {
        
        if(String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON'){
                let validar = await validarDados(filme)
            
                // Se a função validar retornar um Json de erro, iremos devolver ao App o erro
                if(validar){
                return validar
                }else{

                    //Encaminha Dados do filme para o DAO
                    let result = await filmeDAO.insertFilmes(filme)
                    console.log(result)
                    if(result){ //201
                        message.DEFAUT_MESSAGE.status = message.SUCCES_CREADT_ITEM.status
                        message.DEFAUT_MESSAGE.status_code = message.SUCCES_CREADT_ITEM.status_code
                        message.DEFAUT_MESSAGE.massage = message.SUCCES_CREADT_ITEM.message
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
 const atualizarFilme = async function(){
    
 }

 //Função para reornar todos os filmes
 const listarFilme= async function(){

 }

 //Função para buscar filme pelo ID
 const buscarFilme = async function (){

 }

 //Função para excluir um filme
 const excluirFilme = async function(){

 }

 //Função para validar todos os dados de filmes (obrigatorio, qtde de caracteres,etc)
 const validarDados = async function (filme){

    //Criando um clone do objeto json para manipular a sua estrutura local sem modificar a estrutura original. 
    let message  = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)

    
    if(filme.nome=== '' || filme.nome == null || filme.nome == undefined || filme.nome.length > 80){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length != 10 ){
        message.ERROR_BAD_REQUEST.field = '[DATA_LANÇAMNETO] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURACÃO] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(filme.sinopse == '' ||filme.sinopse == null || filme.sinopse == undefined){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(isNaN(filme.avaliacao || filme.avaliacao > 3)){
        message.ERROR_BAD_REQUEST.field = '[AVALIACÃO] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.valor == '' || filme.valor == null || filme.valor == undefined || filme.valor.split('.')[0].length > 3 || isNaN(filme.valor)){
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.capa.length > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVALIDO'
        return message.ERROR_BAD_REQUEST //400
    }else{
        return false 
    }
 }

 module.exports = {
    inserirNovoFilme
 }