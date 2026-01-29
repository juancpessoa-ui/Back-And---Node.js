//Comentario e linha 
/* 
comentario em bloco
*/

console.log(' testando o print do console') // print a variavel no console

// var para variavel
var nome = 'Juan'

console.log(nome)

//formas de concatenar as variaveis
console.log('nome do usario é: ' + nome)
console.log(`nome do usario é:  ${nome}`)

//import = require para captar entrada de dados via terminal
var readline = require('readline')

// Cria uma interface para entrada e saida de dados para o terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    outpu: process.stdout
})


// Função para retornar o nome digitado no terminal 
    //o método question após a digitação chama a sua função de "call back"
    //para entregar o que foi digitado no terminal, atraves do argumento
    //nomeDousuario
entradaDeDados.question('Favor digitar o seu nome:',function(nomeUsurio){
    console.log('O nome do usuario é: ' + nomeUsurio)
    //Entrada de dados para o Email
    entradaDeDados.question('Favor digitar o seu email: ',function(emailUsuaio){
        console.log(`O emil informado é:  ${emailUsuaio}`)
    })
    
})




