//Exercicio para receber nome e 3 numeros de devolve nome e soma dos 3 valores.

const { clear } = require('console')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Favor digitar o seu nome:' ,function(nomeUsurio){
    console.log('O nome do usuario é: ' + nomeUsurio)
    
    entradaDeDados.question(' Digite o primeiro valor: ', function(valor1){
        console.log('O valor 1 é: '+ valor1) 
        
        entradaDeDados.question(' Digite o primeiro valor: ', function(valor2){
            console.log('O valor 2 é: '+ valor2) 
            
            entradaDeDados.question(' Digite o primeiro valor: ', function(valor3){
                console.log('O valor 3 é: '+ valor3) 
                
                let soma = Number(valor1) + Number(valor2) + Number(valor3)
                console.log('o valor da soma é igual á: '+ soma)
            })
        })
    })
})


    
 