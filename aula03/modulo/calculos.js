/*********************************************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calculo para este projeto
 * Data: 11/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0 
 * 
 * Resumo da Aula: necessario tornar as funcoes publicas 
************************************************************************************************************************************/

 // Criando um função para criar o valor da compra parcelado
// Metodo tradicional para criar função

    function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto){
        //Recebe os arumentos da funções em variaveis locais
        //As Variaveis (valor, taxa e tempo são variaveis númericas devido a conversão)
        //Mas os argumentos (valorCompra, taxajuros, tempoPagto ainda serão Strings)
        let valor = Number(valorCompra)
        let taxa  = Number(taxaJuros)
        let tempo = Number(tempoPagto)
    
    
        if(valorCompra == '' || isNaN(valorCompra) || tempoPagto == '' || isNaN(tempoPagto)){
            console.log(' ERRO: Valores de compra ou tempo de pagamento estão incorretos')
            return false
        }else{
    
            //chama a função para converter o numero percentual
            let percentual = calcularPercentual(taxa)
            
            if(percentual){
            let montante = valor * ((1+percentual)**tempo)
                return Number(montante.toFixed(2))
            }else{
                console.log(' ERRO: Valor da taxa esta incorreto')
                return false
            }
        }
    }
    function calcularPercentual(numero){
    
        let numeroPercentual = Number(numero)
        
    
        // Validação de  vazio em Number vira zero
        if(numero <= 0 || numero == '' || isNaN(numero)){
            return false // não pode processar
        }else{
    
        let percentual = numeroPercentual / 100
        return Number(percentual.toFixed(2))
        }
    
    
    }
    // Tornando as duas funções publicas para este projeto
    module.exports= {
        calcularJurosCompostos,
        calcularPercentual
    }