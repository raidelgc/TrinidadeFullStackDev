const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurando o body-parser para lidar com JSON
app.use(bodyParser.json());

// Importando as rotas de usuários
const usersRoutes = require('./routes/users');

// Definindo a rota raiz da API
app.get('/', (req, res) => {
  res.send('Bem-vindo(a) à API de usuários!');
});

// Usando as rotas de usuários
app.use('/users', usersRoutes);

// Iniciando o servidor
app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333!');
});


// instalar o pacote npm install body-parser antes de executar o código.
