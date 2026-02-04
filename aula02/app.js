/*********************************************************************************************************************************
 * Objetivo: Calcular media escolar
 * Data: 29/01/2026
 * Autor: Juan Fonseca
 * Versão: 1.0.1.26
 ***********************************************************************************************************************************/
                        /*Conversão de tipo de Dados:

                        parseInt -> permite converter uma string opra numero INTEIRO
                        parseFloat -> permite converter uma string para numero DECIMAL
                        Number -> permite converte uma strig para numero NUMERO (INT OU FLOAT)
                        String -> permite converter um conteúdo para STRING
                        Boolean -> Permite converte um  conteúdO para BOOLEAN
                        TYPEOF -> Permite verificar o tipo de dados de uma variavel

                        */
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

                   
                    //Validação de entrada vazia
                    if(nomeAluno == '' || nota1  == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('Erro: é obrigatorio o preenchimento de todos os dados!!!')
                    //Validação de entrada de 0 a 100   
                    }else if( nota1 <0 || nota1 >100 || nota2 <0 || nota2 >100 || nota3 <0 || nota3 >100 || nota4 <0 || nota4 >100  ){
                        console.log('Erro: é obrigatorio o valor de notas valida!!!')
                    //Validação de entrada de letras
                    // isNan() -> Permite validar se o conteúdo da variavel tem algum caracter ao inves de número.
                    }else if(isNaN(nota1) || isNaN(nota2)  || isNaN(nota3)  || isNaN(nota4)){
                        console.log(' ERRO: Não é possivel calcular a media com a esntrada e letra nas notas do aluno!!! ')
                        
                    //Calculo e Validação de media  
                    }else{
                        let statusAluno
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/ 4
                        
                        //Validação do Status de aprovação do aluno
                        if(media >= 70){
                            statusAluno = 'Aprovado'
                        }else if(media >= 50 && media < 70 ){
                            statusAluno = 'Recuperação'
                        }else{
                            statusAluno = 'Reprovado'  
                        }
                        // Saída da Média
                        console.log(`O aluno(a) ${nomeAluno} ficou com média ${media.toFixed(2)} e esta: ${statusAluno}`)
                    }
                })
            })
        })
    })
})

