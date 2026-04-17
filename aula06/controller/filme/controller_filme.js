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

 //Função para inserir um novo filme
 const inserirNovoFilme = async function(filme){

    //Criando um clone do objeto json para manipular a sua estrutura local sem modificar a estrutura original. 
    let message  = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)

    if(filme.nome=== '' || filme.nome == null || filme.nome == undefined || filme.nome.length > 80){
        message.ERROR_BADREQUEST.field = '[NOME] INVALIDO'
        //return message.ERROR_BADREQUEST //400
    }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length != 10 ){
        message.ERROR_BADREQUEST.field = '[DATA_LANÇAMNETO] INVALIDO'
    }else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5){
        message.ERROR_BADREQUEST.field = '[DURACÃO] INVALIDO'
    } else if(filme.sinopse == '' ||filme.sinopse == null || filme.sinopse == undefined){
        message.ERROR_BADREQUEST.field = '[SINOPSE] INVALIDO'
    }else if(isNaN(filme.avaliacao || filme.avaliacao > 3)){
        message.ERROR_BADREQUEST.field = '[AVALIACÃO] INVALIDO'
    }else if(filme.valor == '' || filme.valor == null || filme.valor == undefined || filme.valor.length > 5 || isNaN(filme.valor)){
        message.ERROR_BADREQUEST.field = '[VALOR] INVALIDO'
    }else if(filme.capa.length > 255){
        message.ERROR_BADREQUEST.field = '[CAPA] INVALIDO'
    }else{
        let result = await filmeDAO.insertFilmes(filme)
        if(result){ //201
            message.DEFAUT_MESSAGE.status = message.SUCCES_CREADT_ITEM.status
            message.DEFAUT_MESSAGE.status_code = message.SUCCES_CREADT_ITEM.status_code
            message.DEFAUT_MESSAGE.massage = message.SUCCES_CREADT_ITEM.message
        }else //400
        message.DEFAUT_MESSAGE.staus = message.ERROR_BADREQUEST.status
        message.DEFAUT_MESSAGE.status_code = message.ERROR_BADREQUEST.status_code
        message.DEFAUT_MESSAGE.massage = message.ERROR_BADREQUEST.message
        message.DEFAUT_MESSAGE.filme = message.ERROR_BADREQUEST.field
    }

    return message.DEFAUT_MESSAGE
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

 module.exports = {
    inserirNovoFilme
 }