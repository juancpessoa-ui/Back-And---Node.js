/*********************************************************************************************************************************
 * Objetivo: Usar função em outro arquivo 
 * Data: 11/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0 
 * Resumo da Aula: Criar terceiro arquivo para que possamos usar as funções globais(classe ou lib), ficam na pasta modulo -> Calculos 
************************************************************************************************************************************/
//Importe da biblioteca que importa Calculos financeiros
let calculos = require('./modulo/calculos.js')

let valorPercentual = 5

//Chama import com a vriavel criada
let percentual = calculos.calcularPercentual(valorPercentual)