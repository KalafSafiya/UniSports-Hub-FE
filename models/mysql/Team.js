const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');
const Sport = require('./Sport');
const User = require('./User');

const Team = sequelize.define('Team',
    {
        team_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        team_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        sport_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Sport,
                key: 'sport_id'
            }
        },
        coach_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'user_id'
            }
        },
        status: {
            type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
            defaultValue: 'Pending'
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: 'teams',
        timestamps: false
    }
);

module.exports = Team;