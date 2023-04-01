const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: 'Yan',
    database: 'place_database',
    define: {
        timestamps: true,
        underscores: true,
        endercoresAll: true,
    },

})


module.exports = connection;