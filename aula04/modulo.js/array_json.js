/*******************************************************************************************************************************************************
 * Objetivo: Manipular dados usando Array e Json
 * Data: 05/03/2026
 * Autor: Juan
 *  Versão: 0.1
 *******************************************************************************************************************************************************/

/*
    [] -> representa um objeto do tipo ARRAY
    {} -> representa um objeto do tipo JSON

    ARRAY -> È um bjeto na memoória que ´permite rabalhar com varios valores
    em um único objeto 

        let nome = "joao"
        let nome1 = "Juan"
        let nome2 = "Ana"

               indice:   0       1     2
        let nome  =  ["joao", "Juan","Ana" ]
    
    JSON -> È um objeto que na memoria que permite trabalhar com CHAVE e VALOR

        let nome        = 'José' 
        let telefone    = '12345698'
        let email       = 'jose@gmail.com' 

        let nome = {'nome':'José' 
                    'telefone':'12345698'
                    'email':'jose@gmail.com' 
                    }
*/

// Formas de criar um ARRAY (Permite todos os tipos de dados juntos)
const listaDeNomes          = ['Jose','Maria','João','Andre','Alex','Carlos','Ana','Bruna','Jake','jose', 'JOSE'] 
const listaDeClientes       = []
const listaDefornecedores   = []

const exibirDados= function(){
    
    //Exibir o objeto array e seu conteúdo
    console.log(listaDeNomes)

    //Exibe o objeto array em formato de tabela com seus indices
    console.table(listaDeNomes)

    //Exibe o conteúdo solicitado []
    console.log(listaDeNomes[0])

    //Exibe tipo de dados 
    console.log(typeof(listaDeNomes[3]))

    //
    console.log(`o nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[4]}`)

    //Estruturas de repetição: 

    //While
    console.log('********WHILE************')
    let cont = 0 
    while(cont <= 4){
        console.log(`o nome do cliente é: ${listaDeNomes[cont]}`)
        cont+=1
    }

    //For
    console.log('********FOR************')
    for(let contador = 0; contador <= 4; contador++){
        console.log(`o nome do cliente é: ${listaDeNomes[contador]}`)
    }
/*---------------------------------------------------------------------------------------- MAIS USADO: -------------------------------------------------------------------------------------------------*/
    //RETORNA O CONTEÚDO DE CADA ELEMENTO ATRAVEZ DE UM CALL BACK
    console.log('********FOR EACH**********')
    listaDeNomes.forEach(function(cliente){
        console.log(`o nome do cliente é: ${cliente}`)
   })


    //For In (devolve indice)
    //For Each (para cada) -> percorre array.
    // EX: listaDeNomes[item]
    // Praticamente igual ao FOR e WHILE
   console.log('********FOR IN**********')
   for(cliente in listaDeNomes)
    console.log(`o nome do cliente é: ${cliente}`)

   //For In (devolve Conteúdo)
    console.log('********FOR IN**********')
   for(item in listaDeNomes)
    console.log(`o nome do cliente é: ${listaDeNomes[item]}`)


   //For In (devolve Conteúdo)
   //Percorre o array e retorna somente o conteúdo de cada indice, sendo muito parecido
   //com o ForEach
   console.log('********FOR OF**********')
   for(cliente of listaDeNomes)
    console.log(`o nome do cliente é: ${cliente}`)

   //Quantidade de elementos
   console.log(listaDeNomes.length) 
}
//exibirDados()

const manipularDados = function(){
    
    //Adicionando valores novos no ARRAY através de indice
    listaDeClientes[0] = 'Jose da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'Joao da Silva'

    console.log(listaDeClientes)

    //Adicionar novos valores no ARRAY, sempre no final da lista
    listaDefornecedores.push('LUIZ DA SILVA')
    listaDefornecedores.push('zezinho da siva')
    listaDefornecedores.push('Huguinho da Silva')
    listaDefornecedores.push('Luizinhoda silva', 'Andre da Silva','Carlos da Silva') // inclementar valores direto.

    console.table(listaDefornecedores)

    //Permite adicionar novos elementos no ARRAY sempre no INICIO.
    listaDefornecedores.unshift('Ana Carolina')
    
    console.table(listaDefornecedores)

    //Permite remover elementos do FINAL da lista.
    listaDefornecedores.pop()
    console.table(listaDefornecedores)

    //Permite Remover elementos do inicio da lista.
    listaDefornecedores.shift()
    console.table(listaDefornecedores)
    
    //Permite remover elemento baseado no indice da lista -> splice.(indice, qtde. de elementos)
    listaDefornecedores.splice(2,1)
    console.table(listaDefornecedores)
}

//manipularDados( )

const removerItem = function(nome){

    //Retorna o indice de um elemento fazendo a busca pelo valor
    //Se o indexof não encontra p conteúdo ele devolv -1
    let indice = listaDeNomes.indexOf(nome)

    if(indice != -1){
    listaDeNomes.splice(indice,1)
    return true
}else{
    return false
}
    //Percorre a lista retorna o indice solicitado
    //for(indice in listaDeNomes){
    //    if(listaDeNomes[indice] == nome ){
    //      listaDeNomes.splice(indice,1)
    //    }
    //}
}

const verificarItem = function(nome){
    //Verifica a existencia de um conteúdo dentro de uma lista (true/false)
    return listaDeNomes.includes(nome)
    
}

const quantidadeDeItens = function(nome){
    let cont = 0
    listaDeNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont +=1
        
    })
    return cont
}

console.log(quantidadeDeItens('Jose'))

// verificarItem('Maria')




// console.table(listaDeNomes)
// let resposta = removerItem('Maria')
// if(resposta){
// console.log('Item removido com sucesso')
// }else{ 
// console.log('Item não removido')
// }
// console.table(listaDeNomes)

