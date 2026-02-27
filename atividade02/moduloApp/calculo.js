/*********************************************************************************************************************************
 * Objetivo: Exercicio Back-and - Atividade 2
 * Data: 13/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
 ***********************************************************************************************************************************/

//Funções para validar erros: 
function validaDados(numero1,numero2,conta){
    
    
    let operacao = conta.trim().toLowerCase()
   

    if(numero1 == ''|| numero2 == ''){
        console.log('ERRO: Valores digitados estão vazios')
        return false 
    }
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    
    if (isNaN(valor1) || isNaN(valor2) ){
        console.log('ERRO: Operação inválida, digte numero valido')
        return false 
    }if(
        operacao != 'somar' && 
        operacao != 'subtrair' && 
        operacao != 'multiplicar' && 
        operacao != 'dividir' 
        ){
        console.log('ERRO: Escolhas digitadas estão invalidadas')
        return false
    }else{
        return true
    }
    
}   
//Tratativa de dados desafio   
function realizarCalculo(valor1, valor2, operacao){

    let dado1 = Number(valor1)
    let dado2 = Number(valor2)

    let resultado

    if (operacao == 'somar'){
        resultado = dado1 + dado2

    } else if (operacao == 'subtrair'){
        resultado = dado1 - dado2

    } else if (operacao == 'multiplicar'){
        resultado = dado1 * dado2

    } else if (operacao == 'dividir'){
        resultado = dado1 / dado2
    }

    return Number(resultado.toFixed(2))
}

// Funções para operaçõees matematicas:
// Torna as funções Publicas 
 // Tornando as duas funções publicas para este projeto
 module.exports= {
    validaDados,
    realizarCalculo
 }