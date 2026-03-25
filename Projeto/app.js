//Cria a sua aplicação (seu servidor)
const app = express() 

//Permite que sua API entenda JSON no corpo das requisições
app.use(express.json())

//app: É a instância do seu servidor
//.get: É o Método HTTP
// GET:  receber informações
// "/"= rota principal (home)

app.get("/", (req, res) => {
    
  });
// .post() (para enviar dados/criar algo).
// .put() (para atualizar algo).
// .delete() (para apagar algo).