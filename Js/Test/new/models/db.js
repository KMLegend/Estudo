const Sequelize = require('sequelize')
// Conexão do banco de dados MySql
const sequelize = new Sequelize('test', 'root', 'Ke12345678901', {
    host: "localhost",
    dialect: 'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}