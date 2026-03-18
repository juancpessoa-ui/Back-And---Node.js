const InfoEstados = require('./estados_cidades.js') 

function getListaDeEstados(estado){

    const listUf= []

    InfoEstados.listaDeEstados.estados.forEach(function(uf){
       listUf.push(uf.sigla)
    })
    console.log(listUf)
    console.log(`Quantidade: ${(uf.sigle).length}`)
}

getListaDeEstados()