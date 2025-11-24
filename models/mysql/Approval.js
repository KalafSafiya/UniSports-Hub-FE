const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');
const Booking = require('./Booking');
const User = require('./User');

const Approval = sequelize.define('Approval',
    {
        approval_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        booking_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Booking,
                key: 'booking_id'
            }
        },
        approved_by: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'user_id'
            }
        },
        approval_status: {
            type: DataTypes.ENUM('Approved', 'Rejected'),
            allowNull: false
        },
        remarks: {
            type: DataTypes.TEXT,
        },
        approval_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: 'approvals',
        timestamps: false
    }
);

module.exports = Approval;