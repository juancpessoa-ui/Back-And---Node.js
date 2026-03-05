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
const listaDeNomes = ['Jose','Maria','João','Andre','Alex'] 
const listaDeClientes = []
const listaDefornecedores = []

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
    listaDefornecedores.push('Luizinhoda silva', 'Andre da Silva','CArlos da Silva') // inclementar valores direto.

    console.log(listaDefornecedores)
}
manipularDados()