const { DataTypes } = require('sequelize');
const sequelize = require("../config/databases/postgres");

const Sales = sequelize.define('sales', {
    product: { type: DataTypes.STRING(50), allowNull: false },
    requested_amount: { type: DataTypes.NUMERIC(12, 0), allowNull: false },
    franchise: { type: DataTypes.STRING(20), allowNull: true },  
    rate: { type: DataTypes.NUMERIC(4, 2), allowNull: true },  
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    created_by_user_id: { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' }, allowNull: false },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_by_user_id: { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' }, allowNull: true }
});

module.exports = Sales;
