const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');
const User = require('./User');
const Booking = require('./Booking');

const AuditLog = sequelize.define('AuditLog',
    {
        log_id: {
            types: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        action: {
            type: DataTypes.STRING(100)
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'user_id'
            }
        },
        booking_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Booking,
                key: 'booking_id'
            }
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: 'audit_log',
        timestamps: false
    }
);

module.exports = AuditLog;