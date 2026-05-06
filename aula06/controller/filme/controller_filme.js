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
 const inserirNovoFilme = async function(filme ,contentType){
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
                    if(result){ //201
                        filme.id = result // criando atributo ID no Json do Filme e colocando o ID gerado após o insert
                        message.DEFAUT_MESSAGE.status = message.SUCCES_CREADT_ITEM.status
                        message.DEFAUT_MESSAGE.status_code = message.SUCCES_CREADT_ITEM.status_code
                        message.DEFAUT_MESSAGE.massage = message.SUCCES_CREADT_ITEM.message
                        message.DEFAUT_MESSAGE.response = filme
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
 const atualizarFilme = async function(filme,id,contentType){
    let message  = JSON.parse(JSON.stringify(config_message)) 

    try {
        if(String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON'){
                let resultBuscarId = await buscarFilme(id)

            // se a função buscar encontrar o filme o atributo status do Json será verdadeiro
            // isso signicica que o filme existe na base, caso não retorne true, então 
            // o retorno da função poderá ser 400 ou 404 até mesmo um 500
            if(resultBuscarId.status){
                let validar = await validarDados(filme)
                

                //Validação de Campos Obrigatorios para a atualização
                if(!validar){

                    // Adiciona o atributo ID do filme no Json para ser enviado ao DAO
                    filme.id = id

                    //Chama a função do DAO para atualizar o Filme (Dados e o ID)
                    let result = await filmeDAO.updatefilme(filme)
                    if(result){
                        message.DEFAUT_MESSAGE.status = message.SUCCES_UPDATED_ITEM.status
                        message.DEFAUT_MESSAGE.status_code = message.SUCCES_UPDATED_ITEM.status_code
                        message.DEFAUT_MESSAGE.message = message.SUCCES_UPDATED_ITEM.message
                        message.DEFAUT_MESSAGE.response = filme

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
 const listarFilme= async function(){
    let message  = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)

    try {
        //Chama a função do DAO  para retornar a lista de todos os filmes. 
        let result = await filmeDAO.selectAllFilme()
        
        //Validação para verificar se o DAO conseguiu processar os Dados 
        if(result){
            // Validação para verificar se existe conteúdo no array
            if(result.length > 0){
                message.DEFAUT_MESSAGE.status = message.SUCCES_RESPONSE.status
                message.DEFAUT_MESSAGE.status_code = message.SUCCES_RESPONSE.status_code
                message.DEFAUT_MESSAGE.response.count = result.length
                message.DEFAUT_MESSAGE.response.filme = result
                
                return message.DEFAUT_MESSAGE// 200(dados do filme)
            }else{
                return message.ERROR_NOT_FOND //404 
            }
        }else{
            
            return message.ERROR_INTERNAL_SERVER_MODEL // 500(model)
        }

    } catch (error) {
        message.ERROR_INTERNAL_SERVER_CONTROLLER //500(controller)
    }
 }

 //Função para buscar filme pelo ID
 const buscarFilme = async function (id){
    let message  = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)

    try {
        //Validação para garantir que id seja valido
        if(id == undefined || id == '' || id == null ||  isNaN(id)){
            message.ERROR_BAD_REQUEST.field = '[ID INVÁLIDO]'
            return message.ERROR_BAD_REQUEST //400
        }else{
            let result = await filmeDAO.selectByIdFilme(id)

            if(result){
                if(result.length > 0){
                    message.DEFAUT_MESSAGE.status = message.SUCCES_RESPONSE.status
                    message.DEFAUT_MESSAGE.status_code = message.SUCCES_RESPONSE.status_code
                    message.DEFAUT_MESSAGE.response.filme = result
                    
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
 const excluirFilme = async function(id){
    
    let message  = JSON.parse(JSON.stringify(config_message)) 
    
    try {
        // Validação do erro 400 e 404
        let resultBuscarId = await buscarFilme(id)
        
        //Validação para verificar se o status é verdadeiro (Se existe o filme)
        if(resultBuscarId.status){
         //Chamar função DAO para excluir o filme
            let result = await filmeDAO.deleteFilme(id)
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
 const validarDados = async function (filme){

    //Criando um clone do objeto json para manipular a sua estrutura local sem modificar a estrutura original. 
    let message  = JSON.parse(JSON.stringify(config_message)) //(STATUS 400)
    console.log( filme.avaliacao.split('.')[0].length)
    
    if(filme.nome == undefined || filme.nome=== '' || filme.nome == null ||  filme.nome.length > 80){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.data_lancamento == undefined || filme.data_lancamento == '' || filme.data_lancamento == null ||  filme.data_lancamento.length != 10 ){
        message.ERROR_BAD_REQUEST.field = '[DATA_LANÇAMNETO] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.duracao == undefined || filme.duracao == '' || filme.duracao == null ||  filme.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURACÃO] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(filme.sinopse == undefined || filme.sinopse == '' ||filme.sinopse == null  ){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(isNaN(filme.avaliacao) || filme.avaliacao.split('.')[0].length > 1){
        message.ERROR_BAD_REQUEST.field = '[AVALIACÃO] INVALIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.valor == undefined || filme.valor == '' || filme.valor == null ||  filme.valor.split('.')[0].length > 3 || isNaN(filme.valor)){
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
    inserirNovoFilme,
    atualizarFilme,
    listarFilme,
    buscarFilme,
    excluirFilme,
    validarDados
 }