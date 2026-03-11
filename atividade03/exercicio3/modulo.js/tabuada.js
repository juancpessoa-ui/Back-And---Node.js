/*********************************************************************************************************************************
 * Objetivo: Exercicio Back-and - Atividade 2
 * Data: 13/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
***********************************************************************************************************************************/
const calculosMatematicos = require('./calcular')




const calcularTabuada = function(valorInicio,valorFinal){
    let resultado
    for(let cont = 0; cont <= valorFinal; cont++){
        resultado = calculosMatematicos.multiplicar(valorInicio,cont)
    }

}

const gerarTabuada = function(tabuadaIncial,tabuadFinal,valor1,valor2){
    
    let resultado
    
    for(let cont = 0; cont <= tabuadFinal; cont ++){
        resultado = calcularTabuada(valor1,valor2)
        
        
    }
}



gerarTabuada(5,8,5,5)