



const InfoEstados = require('./estados_cidades.js') 

function getListaDeEstados(siglaestado){

    const listUf= []

    InfoEstados.listaDeEstados.estados.forEach(function(uf){
       listUf.push(uf.sigla)
    })
    console.log(listUf)
    console.log(`Quantidade: ${listUf.length}`)

    return {uf:listUf,
            quantidade: listUf.length
     }
}
function getDadosEstado(siglaRecebida){ 
   let resultado = null

   InfoEstados.listaDeEstados.estados.forEach(function(estado){ 
      if(estado.sigla.toUpperCase() === siglaRecebida.toUpperCase()){ 
         resultado =  {
               uf: estado.sigla,
               descricao: estado.nome,
               capital: estado.capital,
               regiao: estado.regiao
            }
         }
   }) 
      return resultado
}
          

function getEstadoRegiao(regiaoRecebida){
   let listaDeEstados = []

   InfoEstados.listaDeEstados.estados.forEach(function(estado){
      if(estado.regiao.toUpperCase() === regiaoRecebida.toUpperCase()){
         listaDeEstados.push ({
            uf: estado.nome,
            descricao: estado.nome
         })
      }if(listaDeEstados.length === 0){
         return null
      }
   })   
      return {
         regiao : regiaoRecebida,
         descricao: listaDeEstados
      }
}

function getCapitalPais(capitalRecebido){
   let listaCapital = []

   InfoEstados.listaDeEstados.estados.forEach(function(estado){
      if(estado.capital_pais){
         listaCapital.push(
            {
               capital_atual: estado.capital_pais.capital,
               uf:estado.sigla,
               descricao: estado.nome,
               capital: estado.capital,
               regiao: estado.regiao,
               capital_pais_ano_inicio:estado.capital_pais?.ano_inicio,
               capital_pais_ano_inicio:estado.capital_pais?.ano_fim
            }
         )
      }
    })
   return listaCapital
}
function getCapitalEstado(siglaRecebida){
   let resultado = null

   InfoEstados.listaDeEstados.estados.forEach(function(estado){
       if(estado.sigla.toUpperCase() === siglaRecebida.toUpperCase()){
           resultado = {
               uf: estado.sigla,
               descricao: estado.nome,
               capital: estado.capital
           }
       }
   })

   return resultado
}
// console.log(getCapitalPais())

function getCidades(ufRecebido){

   let resultados // Primeira variavel que foi criada no forEach
   let listaCidades = [] // Segunda variavel que foi criada no forEach
   
   // Lendo o Array  listaDeEstados e o callback é estado 
   InfoEstados.listaDeEstados.estados.forEach(function(estado){
      // Se o argumento recebido for igual ao argumento passado 
      if(estado.sigla.toUpperCase() === ufRecebido.toUpperCase()){
         // Leia o Json dentro do Array já lido e o callback da função é cidade
         estado.cidades.forEach(function(cidade){
            listaCidades.push(cidade.nome)
         })
         // Acresenta os objetos selecionados dos dois for each na variavel resultado.
          resultados = {
               uf: estado.sigla,
               descricao: estado.nome,
               quantidade_cidades: estado.cidades.length,
               cidades: listaCidades
               

            }
         
      }
   })
      return resultados
}

// cola isso no final do arquivo
module.exports = {
   getListaDeEstados,
   getDadosEstado,
   getCapitalEstado,
   getEstadoRegiao,    // ← nome correto, sem "s"
   getCapitalPais,
   getCidades
}