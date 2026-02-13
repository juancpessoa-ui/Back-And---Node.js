/*********************************************************************************************************************************
 * Objetivo: Exercicio Back-and - Atividade 2
 * Data: 13/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
 ***********************************************************************************************************************************/

//Funções para validar erros: 
function validaDados(numero1 ,numero2,operacao){
    let dado1 = Number(numero1)
    let dado2 = Number(numero2)
    let dado3 = operacao
    if(numero1 == ''|| numero2 == ''||isNaN(numero1) || isNaN(numero2) ){
        console.log('ERRO: Valores digitados estão invalidados')
        return false
    }if(operacao != 'soma' && operacao != 'subtrair' && operacao != 'multiplicar' && operacao != 'dividir'  ){
        console.log('ERRO: Valores digitados estão invalidados')
        return false
    }else{
        return true
    }
    
}   
//Tratativa de dados
function  tratativaDados(dados1, dado2){
    if (typeof dado1 === String || typeof dado2 === String) {
    let valorComPonto1 = numero1.replace(',', '.')
    let valorComPonto2 = numero2.replace(',', '.')
    console.log(valorComPonto1,valorComPonto2)
    }if(dado1 > 2 || dado2 > 2){
    dado1 + '.' + dado2.slice(1).join('')
    return false
    }else{
    ture
    }
}
    
function realizarCalculo(operacao){

    let escolha = String(operacao)
    if(escolha == 'somar'){
        let calculo = dado1 + dado2 
        return Number(calculo.toFixed(2))
     }if( escolha == 'subtrair'){
        let calculo = dado1 - dado2 
        return Number(calculo.toFixed(2))
    }if( escolha == 'mutiplicar'){
        let calculo = dado1 * dado2 
        return Number(calculo.toFixed(2))
    }if(escolha == 'dividir'){
        let calculo = dado1 / dado2 
        return Number(calculo.toFixed(2))
    }else{
        console.log('fim')
    } 
}

// Funções para operaçõees matematicas:





// Torna as funções Publicas 
 // Tornando as duas funções publicas para este projeto
 module.exports= {
    tratativaDados,
    realizarCalculo
 }