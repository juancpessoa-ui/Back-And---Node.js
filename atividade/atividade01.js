/*********************************************************************************************************************************
 * Objetivo: Exercicio Back-and
 * Data: 04/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0.
 ***********************************************************************************************************************************/

const readline = require('readline')
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// Entradas: 
entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = nome // copia da variavel 
    
    entradaDeDados.question('Digite nome do produto que está sendo comprado: ' ,function(produto){
        let nomeProduto = produto

         entradaDeDados.question('Digite  o valor da compra: ', function(compra){
            let valorCompra = compra // copia da variavel 
        
            entradaDeDados.question('Digite a  taxa de juros: ', function(juros){
                let taxaJuros = juros // copia da variavel 

                entradaDeDados.question('Digite o tempo de pagamento: ', function(tempo){
                    let tempoPag = tempo // copia da variavel 
                   
                    //Tratativa de Dados
                    if(nomeCliente == '' || nomeProduto == '' || valorCompra == '' || taxaJuros == '' || tempoPag == ''){
                        console.log('Erro: é obrigatorio o preenchimento de todos os dados!!!')
                    }else if(valorCompra >= 0 || taxaJuros >= 0 || tempoPag >= 0){
                        console.log('Erro: é obrigatorio o preenchimento de dados com numero maior de zero!!!')
                    }else{
                        let m = montante
                        let c = valorCompra
                        let i = taxaJuros
                        let n = tempoPag
                    }


                })
            
            })
        })
    })
})
