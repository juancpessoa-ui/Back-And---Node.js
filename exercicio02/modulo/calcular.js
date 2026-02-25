/**********************************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel pela funções de calcular (somar, subtrair, multiplicar e dividir)
 * Data: 20/02/2026 
 * Autor: Juan
 * Versão: 1.0
 ************************************************************************************************************************************************************************/

// A ausencia da {} na condicional é porque qualquer condicional que tenha apenas processamento a {} torna-se opcional


// Modelo de função anonima
// CALCULAR AS 4 OPERAÇÕES MATEMATICAS
const calcular = function(numero1,numero2,operador){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operadorMatematico = String(operador).toUpperCase()
    let resultado = false //função nasce falsa e valida somente quando resultado é validado com algum calculo

    // Tradicional 
    // if(operadorMatematico == 'SOMAR')
    //     resultado = valor1 + valor2
    // else if(operadorMatematico == 'SUBTRAIR')
    //     resultado = valor1 - valor2
    // else if(operadorMatematico == 'MULTIPLICAR')
    //     resultado = valor1 * valor2
    // else if(operadorMatematico == 'DIVIDIR')
    //     resultado = valor1 / valor2 }

    
    // Função Anonima, Switch case 
    switch (operadorMatematico) {
        case 'SOMAR':
                resultado = somar(valor1, valor2)
            break;
        case 'SUBTRAIR':
            resultado = subtrair(valor1, valor2)
            break;
         case 'MULTIPLICAR':
            resultado = multiplicar(valor1, valor2)
            break; 
        case 'DIVIDIR':
            resultado = dividir(valor1, valor2)
            break;        
        default:
            break;
    
    }
    return resultado
}

//exemplo de função baseado em seta(arrow function)
//Função par realizar as opções matematicas
const somar         = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair      = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar   = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir       = (numero1, numero2) => Number(numero1) / Number(numero2)

module.exports= {
    calcular,
    somar,
    subtrair,
    multiplicar,
    dividir
}
