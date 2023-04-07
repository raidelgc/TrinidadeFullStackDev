const Sequelize = require('sequelize');
const database = require('./db.js');
const Clients = database.define('clients',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },

    sobrenome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    idade:Sequelize.DECIMAL,

})

module.exports = Clients;

