/*********************************************************************************************************************************
 * Objetivo: Funções da API Whatsapp 
 * Data: 13/04/2026
 * Autor: Juan Fonseca
 * Versão: 1.0
 ***********************************************************************************************************************************/
const InfoContatos = require('./contatos')

// função que retorna todos os dados. 
function listaDadosUsuario(){
    let resultados = []

    InfoContatos.contatos['whats-users'].forEach(function(dados) {
        resultados.push(dados)
    })
    
    return resultados
    
}
// console.log(listaDadosUsuario()) -> teste realizado


function listaDadosConta(number){
    let resultado = null
    

    InfoContatos.contatos['whats-users'].forEach(function(user){
        if (user.number === number) {
            resultado = {
                account: user.account,
                nickname: user.nickname,
                profileImage: user["profile-image"],
                number: user.number,
                background: user.background,
                start: user["created-since"].start,
                end: user["created-since"].end
            }
        }
    })
    return resultado
}
//  console.log(listaDadosConta(2)) -> teste realizado

function dadosContatoParaUsuario(number){
    let resultado = null

    InfoContatos.contatos['whats-users'].forEach(function(user){
        if (user.number === number){
            resultado = user.contacts
        }
    })

    return resultado
}
 //console.log(dadosContatoParaUsuario('11966578996'))

    function buscarTodasMensagens(number){
        let resultado = []
    
        InfoContatos.contatos['whats-users'].forEach(function(user){
            if (user.number === number){ // único if necessário
                user.contacts.forEach(function(contato){
                    contato.messages.forEach(function(msg){
                        resultado.push(msg)
                    })
                })
            }
        })
    
        return resultado
    }
//console.log(buscarTodasMensagens('11966578996'))

// function listaConversar(){} -> number 

// function filtroDePesquisa(){} -> number, palavra chave








// Numero de telefone tudo via parametro. 