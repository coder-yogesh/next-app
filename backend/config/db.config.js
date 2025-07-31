const { Sequelize } = require('sequelize');

// Set up connection
const sequelize = new Sequelize('postgres', 'postgres', 'test1234', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports = sequelize;
