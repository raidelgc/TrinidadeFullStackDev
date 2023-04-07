const connection = require('../database');
const { Sequelize } = require('sequelize');

const User = connection.define('user', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [8, 100] // senha deve ter no mínimo 8 caracteres
    }
  }
});

// Cria a tabela 'Users' no banco de dados
User.sync();

// Exporta o modelo 'User' para ser utilizado em outras partes do código
module.exports = User;
