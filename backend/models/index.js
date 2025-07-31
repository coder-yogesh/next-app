const sequelize = require('../config/db.config');
const User = require('./user.model');
const Note = require('./note.model');

// Add associations here if needed in future

module.exports = {
  sequelize,
  User,
  Note
};
