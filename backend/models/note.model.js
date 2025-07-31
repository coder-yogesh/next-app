const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Note = sequelize.define('Note', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
    timestamps: true, // Adds createdAt and updatedAt
});

module.exports = Note;