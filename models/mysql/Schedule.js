const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');
const User = require('./User');
const Sport = require('./Sport');
const Venue = require('./Venue');

const Schedule = sequelize.define('Schedule', 
    {
        schedule_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        coach_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'user_id'
            }
        },
        sport_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Sport,
                key: 'sport_id'
            }
        },
        date: {
            type: DataTypes.DATEONLY
        },
        time_slot: {
            type: DataTypes.STRING(50)
        },
        type: {
            type: DataTypes.ENUM('Practice', 'Match'),
            defaultValue: 'Pending'
        },
        venue_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Venue,
                key: 'venue_id'
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
        tableName: 'schedules',
        timestamps: false
    }
);

module.exports = Schedule;