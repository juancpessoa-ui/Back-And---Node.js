/**********************************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel pela entrada e saida de dados da aplicação
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

    // if(operadorMatematico == 'SOMAR')
    //     resultado = valor1 + valor2
    // else if(operadorMatematico == 'SUBTRAIR')
    //     resultado = valor1 - valor2
    // else if(operadorMatematico == 'MULTIPLICAR')
    //     resultado = valor1 * valor2
    // else if(operadorMatematico == 'DIVIDIR')
    //     resultado = valor1 / valor2
    
    switch (operadorMatematico) {
        case 'SOMAR':
                resultado = valor1 + valor2
            break;
        case 'SUBTRAIR':
            resultado = valor1 + valor2
            break;
         case 'MULTIPLICAR':
            resultado = valor1 * valor2
            break; 
        case 'DIVIDIR':
            resultado = valor1 / valor2
            break;        
        default:
            break;
    }


    return resultado 
    

}

// Imprimir resultado é fora da função

console.log(calcular(10 ,3 ,'dividir'))