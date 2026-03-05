/*********************************************************************************************************************************
 * Objetivo: sistema que gerencie as médias escolares
 * Data: 27/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
 ***********************************************************************************************************************************/
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite Nome do aluno(a): ', function (nome) {
    let nomeAluno = nome
    entradaDeDados.question('Digite o Nome do professor(a): ', function (nome2) {
        let nomeProfessor = nome2
        entradaDeDados.question('Digite o Nome do curso: ', function (nome3) {
            let nomeCurso = nome3
            entradaDeDados.question('Digite o Nome da diciplina: ', function (nome4) {
                let nomeDisciplina = nome4
                entradaDeDados.question('Digite nota 1: ', function (notaA) {
                    let nota1 = notaA
                    entradaDeDados.question('Digite nota 2: ', function (notaB) {
                        let nota2 = notaB
                        entradaDeDados.question('Digite nota 3: ', function (notaC) {

                            let nota3 = notaC
                            let app = require('./modulo.js/calculo.js')
                            let valida = app.validaDados(nota1, nota2, nota3, nomeAluno, nomeCurso, nomeDisciplina, nomeProfessor)

                            if (!valida) {
                                console.log('dados invalidos')
                                return
                            }
                            let calculo = app.calculoAprovados(nota1, nota2, nota3)
                            let interpreta = app.interpretarNota(calculo)


                            if (interpreta === 'aluno de recuperação') {
                                entradaDeDados.question('Digite a nota do exame: ', function (notaD) {
                                    let nota4 = Number(notaD)
                                    const recuperacao = app.calculoRecuperacao(calculo, nota4)
                                    console.log(recuperacao)

                                    const interpretaNota = app.interpretarNovaNota(recuperacao, nota4)
                                    if (interpretaNota) {
                                        entradaDeDados.question('Qual sexo do aluno (a) (digite masculino ou feminino): ', function (sexo) {
                                            let sexoAluno = sexo
                                            entradaDeDados.question('Qual sexo do professor (a) (digite masculino ou feminino): ', function (sexo1) {
                                                let sexoProf = sexo1
                                                let mascouFeminino = app.validaSexo(sexoProf, sexoAluno, nomeAluno, nomeProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, interpretaNota, calculo)
                                                console.log(mascouFeminino)
                                            })


                                        })

                                    }
                                })

                            } else if (interpreta === 'Aprovado' && interpreta === 'Reprovado') {
                                entradaDeDados.question('Qual sexo do aluno (a) (digite masculino ou feminino): ', function (sexo) {
                                    let sexoAluno = sexo
                                    entradaDeDados.question('Qual sexo do professor (a) (digite masculino ou feminino): ', function (sexo1) {
                                        let sexoProf = sexo1
                                        let mascouFeminino1 = app.validaSexo2(sexoProf, sexoAluno, nomeAluno, nomeProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, interpreta, calculo)
                                        console.log(mascouFeminino1)
                                    })

                                })

                            }



                        })
                    })
                })
            })
        })
    })
})