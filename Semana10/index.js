const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const connection = require('./src/database');
const Place = require('./src/models/place'); // Importa o modelo Sequelize "Place"
const User = require('./src/models/users'); // Importa o modelo Sequelize "User"
const Routes = require('./src/controllers/users/createRoute'); // Importa as rotas
const validateToken = require('./src/middlewares/validate-token');
const validateNewUser = require('./src/middlewares/validateNewUser');
const createRoute = require('./src/controllers/users/createRoute');
const createUser = require('./src/controllers/users/createUser');
const createPlaces = require('./src/controllers/places/createPlaces');
const deletePlaces = require('./src/controllers/places/deletePlaces');
const findPlaces = require('./src/controllers/places/findPlaces');
const updatePlaces = require('./src/controllers/places/updatePlaces');


const app = express();
app.use(express.json()); // Configura o servidor para aceitar requisições com corpo em JSON

connection.authenticate()
connection.sync({alter: true})
console.log('Connection has been established successfully.');

app.get('/', (request, response) => {
  console.log("Entrei aqui")
  response.json({ messagem: "Bem vindo" })
})

app.post('/places', validateToken, createPlaces)
app.get('/places', validateToken, findPlaces)
app.delete('/places/:id', validateToken, deletePlaces)
app.put('/places/:id', validateToken, updatePlaces)

app.post('/users', validateNewUser, createUser)
app.post('/users/login', validateNewUser, createRoute)

app.listen(3333, () => {
    console.log('Servidor iniciado na porta 3333');
});
  