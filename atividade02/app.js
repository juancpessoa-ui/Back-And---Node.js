/*********************************************************************************************************************************
 * Objetivo: Exercicio Back-and - Atividade 2
 * Data: 13/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
 ***********************************************************************************************************************************/


const readline = require('readline')


const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



// Entradas: 
entradaDeDados.question ('Digite primeiro valor  de entrada: ', function (numero1) {
    let valor1 = parseFloat(numero1.replace(',', '.'))
    entradaDeDados.question('Digite segundo valor  de entrada: ', function(numero2) {
        let valor2 = parseFloat(numero2.replace(',', '.'))
        entradaDeDados.question ('Digite qual operação matemática deseja realizar: \n1-somar \n2-subtrair \n3-multiplicar \n4-dividir \n Opção Escolhida: ', function (conta) {
            let operacao  = conta   
            
           let app = require('./moduloApp/calculo')

            let valida = app.validaDados(valor1,valor2, operacao)

            
                if (valida) {
                    let resultado = app.realizarCalculo(valor1,valor2, conta)
                    console.log("Resultado:", resultado)
                }
            
        })
    })
})
 
