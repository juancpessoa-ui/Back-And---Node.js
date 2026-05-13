/************************************************************************************************************************************************************************************************
 *Objetivo: 
 * Data: 17/04/2026
 * Autor: Juan Carlos
 * Versão: 1.0
 *****************************************************************************************************************************************************************************************************/

 //import das dependencias para criar a API
 const express = require('express')
 const cors = require('cors')
 const bodyParser = require('body-parser')

 // import das Controller
 const controllerFilmes= require('./controller/filme/controller_filme.js')

 //Cria um objeto  para manipular ddos body da APi em formato JSon
const bodyParserJOSN = bodyParser.json()

 //Criando um objeto para manipular o express
 const app = express()
 
 //conjunto de permissões a serem aplicadas no CORS da API
 const corsOptions = {
     origin: ['*'], //Origem da requisição, podendo ser um ip(so maquinas especificas podem acessar a API) ou o *(todas as maquinas podem acessar a API)
     methods: 'Get , POST, PUT, DLETE, OPTIONS', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
     allowedHeaders: ['Content-type', 'Autorization'], // São permissões de cabeçalho do CORS
 }
 
 //configura as permissões da API através do CORS
 app.use(cors(corsOptions))
 
 //ENDPOINTS

app.post('/v1/senai/locadora/filme', bodyParserJOSN, async function(request,response){
    // Recebe o conteúdo dentro do body da requisição
    let dados = request.body
    // Recebe o content Type da função para validar se é um Json
    let contentType = request.headers['content-type']

    let result = await controllerFilmes.inserirNovoFilme(dados,contentType)
    
    response.status(result.status_code)
    response.json(result)


})

app.get('/v1/senai/locadora/filme', async function (request, response){
    let result = await controllerFilmes.listarFilme()
    
    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/filme/:id', async function (request, response){
    //Recebi via parametro
    let id = request.params.id

    let result= await controllerFilmes.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/filme/:id', bodyParserJOSN, async function(request, response){
    
    //Recebe o content type da requisição 
    let contentType = request.headers['content-type']
    //Recebe o ID da requisição 
    let id = request.params.id
    //Recebe os dados da requisição 
    let dados = request.body
    
    // Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller. 
    let result = await controllerFilmes.atualizarFilme(dados,id,contentType)

    response.status(result.status_code)
    response.json(result)
})

app.delete('/v1/senai/locadora/filme/:id',  async function(request,response){
    
    
    //Recebe o ID da requisição 
    let id = request.params.id
    
    
    // Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller. 
    let result = await controllerFilmes.excluirFilme(id)

    response.status(result.status_code)
    response.json(result)
})

 //serve para inicializar a Api para receber requisições

 
/**************************************************************************************************************************************************************************************************************************************** */

 //ENDPOINTS


 // import das ControllerAtividade
 const controllerAtividade = require('./controller/atividade/controller_atividade.js')


app.post('/v1/senai/locadora/atvidade', bodyParserJOSN, async function(request,response){
    // Recebe o conteúdo dentro do body da requisição
    let dados = request.body
    // Recebe o content Type da função para validar se é um Json
    let contentType = request.headers['content-type']

    let result = await controllerAtividade.inserirNovaAtividade(dados,contentType)
    
    response.status(result.status_code)
    response.json(result)


})

app.get('/v1/senai/locadora/atividade', async function (response){
    let result = await controllerAtividade.listarAtividade()
    
    response.status(result)
    response.json(result)
})










app.listen(8080, function () {
    console.log('Api funcionando e aguardando novas requisições...')
})