/*********************************************************************************************************************************
 * Objetivo: sistema que gerencie as médias escolares
 * Data: 27/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
 ***********************************************************************************************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite tabuada inicial : ', function (numero) {
    let tabuadaIncial = numero
    entradaDeDados.question('Digite a tabuada final): ', function (numero2) {
        let tabuadFinal = numero2
        entradaDeDados.question('Digite o numero inicial: ', function(valor1){
            let numeroInical = valor1
            entradaDeDados.question('Digite o numero final: ',function(valor2){
                let numeroFinal = valor2
            })
        })
    })
})