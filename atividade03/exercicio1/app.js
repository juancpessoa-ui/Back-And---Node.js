/**************************************************************************************************************************************************************************
 * Objetivo: Desenvolver uma aplicação para a empresa Cálculos SA
 * Data: 27/02/2026 
 * Autor: Juan
 * Versão: 1.0
 ************************************************************************************************************************************************************************/
//importa Função

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de Dados
entradaDeDados.question('Digite o peso do paciente: ', function(p){
    let peso = p 
    entradaDeDados.question('Digite a altura do paciente em metros: ', function(h){
        let altura = h
        
        let app = require('./moduloApp/calculos')
        let validar = app.validaDados(peso, altura)
        if(validar == true){
            let calculo = app.calculoImc(peso,altura)
            let interpretar = app.interpretarIMC(calculo)
            console.log(interpretar)
        }
    })
})