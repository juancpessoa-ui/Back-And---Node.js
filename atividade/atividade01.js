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
entradaDeDados.question('Digite o nome do cliente: ', function (nome) {
    let nomeCliente = nome // copia da variavel 

    entradaDeDados.question('Digite nome do produto que está sendo comprado: ', function (produto) {
        let nomeProduto = produto

        entradaDeDados.question('Digite  o valor da compra: ', function (compra) {
            let valorCompra = compra // copia da variavel 

            entradaDeDados.question('Digite a  taxa de juros: ', function (juros) {
                let taxaJuros = juros // copia da variavel 
                
                // Entrada que faz implementação do desafio
                entradaDeDados.question('digite 1 para anos e 2 para mêses: ', function (tempoEscolha) { 
               
                    if((tempoEscolha <= 0) || (tempoEscolha > 2) || isNaN(tempoEscolha)){
                        console.log('Erro: é obrigatorio o preenchimento desses dados com opção 1 para anos ou 2 para mêses')
                        entradaDeDados.close()
                    }
                    
                    entradaDeDados.question('Digite o tempo de pagamento: ', function (tempo) {
                    let tempoPag = tempo //copia da variavel 


                        //Tratativa de Dados
                        if (nomeCliente == '' || nomeProduto == '' || valorCompra == '' || taxaJuros == '' || tempoPag == '') {
                            console.log('Erro: é obrigatorio o preenchimento de todos os dados!!!')
                        } else if (valorCompra <= 0 || taxaJuros <= 0 || tempoPag <= 0) {
                            console.log('Erro: é obrigatorio o preenchimento de dados com numero maior de zero!!!')
                        } else if (isNaN(taxaJuros) || isNaN(tempoPag) || isNaN(valorCompra) || isNaN(tempoEscolha)) {
                            console.log('Erro: é obrigatorio o preenchimento desses dados em numero')
                        }else if(tempoEscolha == 1){
                            let anoEmMes = tempo *12

                            //definição de Variavel 
                            let i = Number(taxaJuros) / 100
                            let c = Number(valorCompra)
                            let n = (anoEmMes)
                            //Raalização do Calculo
                            let m = Number(c) * (1 + i) ** n
                            let valorParcela = Number(m) / Number(anoEmMes)
                            let acrescimo = m - c

                            //Imprime na tela
                            console.log('*************************** Viva Moda ***********************************************')
                            console.log(`  Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.`)
                            console.log(`  A compra do produto ${produto}, tem um valor de: ${valorCompra}`)
                            console.log(`  A sua compra será parcelada em ${anoEmMes} vezes e o Sr(a) pagará: ${valorParcela.toFixed(2)}.`)
                            console.log(`  O acréscimo realizado ao valor de: ${c.toFixed(2)} será de ${acrescimo.toFixed(2)}.`)

                            console.log('  Muito obrigado por escolher a Viva Moda')
                            console.log('**************************************************************************************')

                            
                        }else {
                            //definição de Variavel 
                            let i = Number(taxaJuros) / 100
                            let c = Number(valorCompra)
                            let n = (tempoPag)
                            //Realização do Calculo
                            let m = Number(c) * (1 + i) ** n
                            let valorParcela = Number(m) / Number(tempoPag)
                            let acrescimo = m - c

                            //Imprime na tela
                            console.log('*************************** Viva Moda *************************************')
                            console.log(`  Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.`)
                            console.log(`  A compra do produto ${produto}, tem um valor de: ${valorCompra}`)
                            console.log(`  A sua compra será parcelada em ${tempoPag} vezes e o Sr(a) pagará: ${valorParcela.toFixed(2)}.`)
                            console.log(`  O acréscimo realizado ao valor de: ${c.toFixed(2)} será de ${acrescimo.toFixed(2)}.`)

                            console.log('  Muito obrigado por escolher a Viva Moda')
                            console.log('*****************************************************************************')
                        }

                    })
                })

            })
        })
    })
})
