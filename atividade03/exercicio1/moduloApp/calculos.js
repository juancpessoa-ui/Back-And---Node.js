/*********************************************************************************************************************************
 * Objetivo: Desenvolver uma aplicação para a empresa Cálculos SA
 * Data: 27/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
 ***********************************************************************************************************************************/


//Executa Calculo de IMC
function calculoImc(peso,altura){

    let p = Number(peso)
    let h = Number(altura)
    let imc


    imc = p / (h * h)
    //console.log(`Seu imc é igual: ${imc.toFixed(2)}`)
}

//Função de interpretação de IMC

function interpretarIMC(valor){

let imc = valor

    if(imc <= 18.5 && imc <= 24.99){
        console.log('Peso Normal')
    }else if( imc <= 25 && imc <= 29.99){
        console.log('Acima do peso(sobrepeso)')
    }else if(imc <= 30 && imc <= 34.99){
        console.log('Obesidade I')
    }else if(imc <= 35 && imc <= 39.99){
        console.log('Obesidade II')
    }else if(imc >= 40){
        console.log('Obesidade III')
    }else{
        process.exit()
    }

}

function validaDados(peso,altura){
    
    let p = Number(peso)
    let h = Number(altura)
    
    if(p == ''|| h == ''){
        console.log('ERRO: Valores digitados estão vazios')
        return false
    }else if(typeof p === "string" && typeof h === "string"){
        parseInt(p)
        parseInt(h)
    }if (isNaN(p) || isNaN(h) ){
        console.log('ERRO: Operação inválida, digte numero valido com uso do ponto ( . )')
        return false
    
    }else{
        return true
    }
    
}

module.exports = {
    calculoImc,
    interpretarIMC,
    validaDados
}