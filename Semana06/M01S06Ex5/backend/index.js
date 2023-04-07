/* Crie uma rota HTTP com express para simular o envio de um objeto pelo corpo da requisição e como resposta retorne esse objeto no formato json padrão.
OBS: utilize a plataforma de API que você preferir. */

// Importando o módulo express
const express = require('express');

// Criando a instância do aplicativo express
const app = express();

// Definindo uma rota com o método GET
app.get("/list-users", (req, res) => {
  res.send([{name:"rai"},{name:"yan"}]); // envia uma resposta com um array de objetos representando usuários
});

// Adicionando middleware para analisar o corpo das solicitações como JSON
app.use(express.json());

// Definindo uma rota com o método POST para criar um novo usuário
app.post('/create',(req,res)=>{
  console.log(req.body); // exibe o corpo da solicitação no console
  res.send("Usuário criado com sucesso"); // envia uma resposta confirmando que o usuário foi criado
});

// Iniciando o servidor e escutando solicitações na porta 3333
app.listen(3333, () => {
  console.log("servidor online"); // exibe uma mensagem no console para indicar que o servidor está online
}); 

