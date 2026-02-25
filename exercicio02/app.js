/**************************************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel pela entrada e saida de dados da aplicação
 * Data: 20/02/2026 
 * Autor: Juan
 * Versão: 1.0
 ************************************************************************************************************************************************************************/
//import da biblioteca para calculos
const calculosMatematicos = require('./modulo/calcular.js')

let resposta = calculosMatematicos.calcular(10,60,'somar')
let respostaSoma = calculosMatematicos.somar(10,70)

console.log(resposta)
console.log(respostaSoma)