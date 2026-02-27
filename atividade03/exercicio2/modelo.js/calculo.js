/*********************************************************************************************************************************
 * Objetivo: Exercicio Back-and - Atividade 2
 * Data: 13/02/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
 ***********************************************************************************************************************************/
function calculoAprovados(notaA,notaB,notaC){

    let nota1 = Number(notaA)
    let nota2 = Number(notaB)
    let nota3 = Number(notac)
    let media

    media = nota1 + nota2 + nota3 / 3
}

function interpretarNota(resultado){
    let media = Number(resultado)

    if(media > 70){
        console.log('Aprovado')
    }else if(media < 50){
        console.log('Reprovado;')
    }else if( media > 50 && meida <= 69 ){

    }else{
        return true
    }
}  

function calculoRecuperação(resultado,notaD){

    let notaD = nota4
    let media = resultado 
    let novaMedia

    novaMedia = media + nota4 / 2
}

function interpretarNovaNota(resultado){
    let media = Number(resultado)

    if(media > 60){
        console.log('Aprovado')
    }else{
        console.log('Reprovado;')
    }
}  

module.exports{
    calculoAprovados,
    calculoRecuperação,
    interpretarNota,
    interpretarNovaNota
}