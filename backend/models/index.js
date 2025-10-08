const sequelize = require('../config/db.config');
const User = require('./user.model');
const Note = require('./note.model');

// Add associations here if needed in future
sequelize.sync({alter: true})
  .then(() => console.log('Datebase sync'))
  .catch((err) => console.error('Error sync', err))

module.exports = {
  sequelize,
  User,
  Note
};
