/**************************************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel por gerar a tabuada de um numero (Usando Estrutura de repetição)
 * Data: 25/02/2026 
 * Autor: Juan
 * Versão: 1.0
 ************************************************************************************************************************************************************************/
// import no começo do arquivo
const calculosMatematicos = require('./calcular.js')


//função para gerar tabuada usando While
const gerarTabuada = function(tabuada){
    //recebe a tabuada a ser gerada 
    let tab = Number(tabuada)
    let cont  = 0
    let resultado 
    
    //repetição para gerar a tabuada até ser gerado 
    while(cont <= 10){
        //chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab,cont)
        console.log(`${tab} x ${cont} = ${resultado}`)

        //cont = cont + 1
        //cont+=1
        cont++
    }
}
gerarTabuada(8)

//função para gerar tabuada usando While
const gerarTabuadaFor = function(tabuada){
    //recebe a tabuada a ser gerada 
    let tab = Number(tabuada)
    //let cont  = 0
    let resultado 
    
    //repetição para gerar a tabuada até 10 -> For mais sofisticado
    for( let cont = 0; cont <= 10; cont++){
        //chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab,cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
    }
}


gerarTabuada(9)

// step -> Para contar mais que 1 