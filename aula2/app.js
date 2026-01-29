/*********************************************************************************************************************************
 * Objetivo: Calcular media escolar
 * Data: 29/01/2026
 * Autor: Juan Fonseca
 * Versão: 1.0.1.26
 ***********************************************************************************************************************************/

/* 
    Exitem 3 formas de criação de variavel
    
        var -> Permite a criação de um espaço na memoria do tipo 
                variavel (Mais antigo, projetos antigos e menos usado).
                Recomendação: Criação de variaveis globais(Inicio do codigo).
        
        let ->  Permite a criação de um espaço na memoria do tipo variavel.
                a ultilização deste padão é para a criação dentro de blocos 
                de programação{}. Essa variável nasce e morre no bloco,
                Não é recomendado a sua ultilização em escopo global.
        
        const -> Permite a criação de um espaço na memoria onde não sofrera 
                alteração durante o codigo. A const pode ser ultilizado dentro
                e fora do bloco {}.
                Recomendação: Caso voce queira diferenciar uma const, um var
                ou let: A const pode ser criada com letra MAIUSCULA.
*/
// import
const readline = require('readline')
//Cria Objeto para entrada
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entradas: 
entradaDeDados.question('digite o nome do aluno: ', function(nome){
    let nomeAluno = nome // copia da variavel 

    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1
        
        entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2

            entradaDeDados.question('Digite a nota 3: ', function(valor3){
                let nota3 = valor3

                entradaDeDados.question('Digite a nota 4: ',function(valor4){
                    let nota4 = valor4

                    /* 
                        Operadores de Comparação: 
                            == -> Permite comparar a igualdade de duas conteúdos.
                            <  -> Permite comparar valores menores.
                            >  -> Permite comparar valores maiores.
                            >= -> Permite comparar valores maiores ou iguais. 
                            <= -> Permite comparar valores menor ou iguais.
                            != -> Permite comparar a diferença entre conteúdos.
                            === -> Permite comparar a igualdade de conteúdo e a tipagem de dados.
                            !== -> Permite comparar a diferença de conteúdos e a igualdadede tipos de dados.
                            ==! -> Permite comparar a igualdade de conteúdos e a diferença de tipos de dados.
                            !=! -> permite comparar a diferença de conteúdos e a diferença de de tipos de dados.

                        Operadores Logicos:
                            E   -> AND -> &&
                            OU  -> OR  -> ||
                            NÃO -> NOT  -> !
                    */
                    //Validação de entrada vazia
                    if(nomeAluno == '' || nota1  == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('Erro: é obrigatorio o preenchimento de todos os dados!!!')
                        
                    }else if( nota1 <0 || nota1 >100 || nota2 <0 || nota2 >100 || nota3 <0 || nota3 >100 || nota4 <0 || nota4 >100  ){
                        console.log('Erro: é obrigatorio o valor de notas valida!!!')
                    }else{
                        // calcular media
                    }


                })
            })
        })
    })
})

