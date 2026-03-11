/*********************************************************************************************************************************
 * Objetivo: Exercicio Back-and - Atividade 2
 * Data: 13/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
***********************************************************************************************************************************/
function calculoAprovados(notaA,notaB,notaC){

    let nota1 = Number(notaA)
    let nota2 = Number(notaB)
    let nota3 = Number(notaC)
    let media

    media = ((nota1 + nota2 + nota3) / (3))
    return media.toFixed(2)
    
}

function interpretarNota(resultado){
    let media = Number(resultado)

    if(media > 70){
        return'Aprovado'
    }else if(media < 50){
        return'Reprovado'
    }else if( media > 50 || media <= 69 ){
        return 'aluno de recuperação'
        
    }else{
        return true
    }
}  

function calculoRecuperacao(resultado,notaD){

    let nota4 = Number(notaD)
    let media = Number(resultado) 
    let novaMedia

    novaMedia = (media + nota4) / (2)
    console.log(novaMedia.toFixed(1))
}

function interpretarNovaNota(resultado){
    let media = Number(resultado)

    if(media < 60){
        return 'Reprovado' 
    }else{
        return 'Aprovado'
    }
} 

/*function validaSexo(sexo,sexo1){

    let aluno = sexo1 
    let prof = sexo 
    
    if(aluno == 'masculino' ){
       aluno = 'aluno'
    }else if(aluno == 'feminino' ){
        aluno = 'feminino'
    }else if(prof == 'masculino' ){
        prof = 'Professor'
    }else if(prof == 'feminino' ){
        prof = 'Professora'
    }
    console.log(` O ${Aluno} ${nomeAluno} foi ${resultado} na disciplina ${disciplina}.\n
        Curso: ${curso}\n
        ${sexoprof}: ${nomeProf}\n
        Notas do ${sexoAluno}: ${nota1}, ${nota2}, ${nota3}, ${nota4}, Nota do ${resultado}\n
        Média Final: ${resultado}\n
        Média final do Exame: ${resultado}`)
}*/

function validaSexo(sexoProf, sexoAluno,nomeAluno, nomeProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3,nota4,resultado,mediaFinal){

    let aluno
    let prof

    if(sexoAluno == 'masculino'){
        aluno = 'O Aluno'
    }else if(sexoAluno == 'feminino'){
        aluno = 'A Aluna'
    }

    if(sexoProf == 'masculino'){
        prof = 'Professor'
    }else if(sexoProf == 'feminino'){
        prof = 'Professora'
    }

    console.log(`${aluno} ${nomeAluno} foi ${resultado} na disciplina ${nomeDisciplina}.

Curso: ${nomeCurso}

${prof}: ${nomeProfessor}

Notas do ${aluno}: ${nota1}, ${nota2}, ${nota3}, ${nota4}

Média Final: ${mediaFinal}

Média final do Exame: ${resultado}`)
}
function validaDados(nota1,nota2,nota3,nome1,nome2,nome3,nome4){
    let notaA = Number(nota1)
    let notaB = Number(nota2)
    let notaC = Number(nota3)
    
    if( 
        notaA == '' || notaB == '' || notaC == '' || 
        nome1 == '' || nome2 == '' || nome3 == '' || nome4 == ''){
        console.log('ERRO: Valores digitados estão vazios')
        return false
    }else if(
        isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ){
        console.log('ERRO: Valores digitados devem ser numeros')
        return false
    }else if ( 
        nota1 < 0 || nota1 > 100 ||  
        nota2 < 0  || nota2  > 100 ||  
        nota3 < 0 || nota3 > 100){
        console.log('ERRO: Valores digitados são invalidados')
        return false
    }else{
        return true
    }
    
} 

function validaSexo2(sexoProf, sexoAluno,nomeAluno, nomeProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3,resultado,mediaFinal){

    let aluno
    let prof

    if(sexoAluno == 'masculino'){
        aluno = 'O Aluno'
    }else if(sexoAluno == 'feminino'){
        aluno = 'A Aluna'
    }

    if(sexoProf == 'masculino'){
        prof = 'Professor'
    }else if(sexoProf == 'feminino'){
        prof = 'Professora'
    }

    console.log(`${aluno} ${nomeAluno} foi ${resultado} na disciplina ${nomeDisciplina}.

Curso: ${nomeCurso}

${prof}: ${nomeProfessor}

Notas do ${aluno}: ${nota1}, ${nota2}, ${nota3}

Média Final: ${mediaFinal}

Média final do Exame: ${resultado}`)
}


function validaDados(nota1,nota2,nota3,nome1,nome2,nome3,nome4){
    let notaA = Number(nota1)
    let notaB = Number(nota2)
    let notaC = Number(nota3)
    
    if( 
        notaA == '' || notaB == '' || notaC == '' || 
        nome1 == '' || nome2 == '' || nome3 == '' || nome4 == ''){
        console.log('ERRO: Valores digitados estão vazios')
        return false
    }else if(
        isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ){
        console.log('ERRO: Valores digitados devem ser numeros')
        return false
    }else if ( 
        nota1 < 0 || nota1 > 100 ||  
        nota2 < 0  || nota2  > 100 ||  
        nota3 < 0 || nota3 > 100){
        console.log('ERRO: Valores digitados são invalidados')
        return false
    }else{
        return true
    }
    
} 

module.exports = {
    calculoAprovados,
    calculoRecuperacao,
    interpretarNota,
    interpretarNovaNota,
    validaSexo,
    validaSexo2,
    validaDados}


// Teste das funções
//interpretarNota(65)
//calculoRecuperação(59,70)
//calculoAprovados(50,50,70)

