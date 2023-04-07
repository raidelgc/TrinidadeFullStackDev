const Sequelize = require('sequelize');
const sequelize = new Sequelize("Trindade", "postgres", "Yan", {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
});

module.exports = sequelize;