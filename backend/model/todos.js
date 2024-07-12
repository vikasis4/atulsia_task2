const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

// Three fields are created in columns :- id, text, completed
// None of the columns cannot be empty

const Todos = sequelize.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    text: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = Todos