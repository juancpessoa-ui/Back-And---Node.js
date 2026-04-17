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

    let result = await controllerFilmes.inserirNovoFilme(dados)

    response.status(result.status_code)
    response.json(result)


})

 //serve para inicializar a Api para receber requisições
app.listen(8080, function () {
    console.log('Api funcionando e aguardando novas requisições...')
})
 
