const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Expense = sequelize.define('expense', {
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    date_amount:{
        type :DataTypes.DATE,
        allowNull:false
    },
    

});

module.exports = Expense;