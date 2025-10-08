// models/note.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model"); // import User model

const Note = sequelize.define(
  "Note",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // table name
        key: "id",
      },
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Associations
Note.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Note, { foreignKey: "userId", as: "notes" });

module.exports = Note;
