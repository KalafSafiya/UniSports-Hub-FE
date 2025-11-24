const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const Sport = sequelize.define('Sport',
    {
        sport_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sport_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        }
    },
    {
        tableName: 'sports',
        timestamps: false
    }
);

module.exports = Sport;