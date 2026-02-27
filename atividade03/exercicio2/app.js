/*********************************************************************************************************************************
 * Objetivo: sistema que gerencie as médias escolares
 * Data: 27/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
 ***********************************************************************************************************************************/
const entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    entradaDeDados.question('Digite Nome do aluno;: ', function (nome) {
        let nomeAluno = p
        entradaDeDados.question('Digite o Nome do professor;: ', function (nome2) {
            let nomeProfessor = nome2
            entradaDeDados.question('Digite o Nome do curso;: ', function (nome3) {
                let nomeCurso = nome3
                entradaDeDados.question(' Digite o Nome da diciplina', function (nome4) {
                    let nomeDisciplina = nome4
                    entradaDeDados.question('Digite nota 1: ', function (notaA) {
                        let nota1 = notaA
                        entradaDeDados.question('Digite nota 1: ', function (notaB) {
                            let nota2 = notaB
                            entradaDeDados.question('Digite nota 1: ', function (notaC) {
                                let nota3 = notaC

                                
                            })
                        })
                    })
                })
            })
        })
    })