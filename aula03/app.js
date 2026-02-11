/*********************************************************************************************************************************
 * Objetivo: Criar um sistema que permite calculo de juros que permite boas praticas com funções. 
 * Data: 11/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
*********************************************************************************************************************************/


const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('Digite o nome do Cliente: ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Digite  o nome do Produto: ', function(produto){
        let nomeProduto = produto

        entradaDeDados.question('Digite o valor de compra: ', function(capital){
            let capitalProduto = capital

            entradaDeDados.question('Digite o valor da taxa de juros a ser aplicada na compra: ',function(taxa){
                let taxaCompra = taxa

                entradaDeDados.question('Digite o tempo para realizar o pagamento: ', function(tempo){
                    let tempoPagamento = tempo
                    
                    //Importe da biblioteca que importa Calculos financeiros
                    let calculos = require('./modulo/calculos.js')
                    
                    let montante = calculos.calcularJurosCompostos(capitalProduto , taxaCompra, tempoPagamento)

                    if(montante){
                   console.log('O montante final é: '+ montante.toFixed(2))
                    }else{
                        entradaDeDados.close()
                    }
                })
            })
        })
    })

})





















/*********************************************************************************************************************************
* Resumo da aula:  Aula foi focada na crição de funções para solucionar problems de maneira mais pratica e objetiva, função consegui desmembrar 
 o calculo por exempla para usar o objeto em outros blocos.
 // Criando um função para criar o valor da compra parcelado

 Metodo tradicional para criar função -> toda função: 
 
 nome (argumento){
              
 } 
 Argumento = entrada e return = saida.

 ***********************************************************************************************************************************/

   