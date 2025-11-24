const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');
const Sport = require('./Sport');
const Venue = require('./Venue');

const Booking = sequelize.define('Booking',
    {
        booking_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('Student', 'Coach', 'Staff'),
            defaultValue: 'Student',
        },
        university_id: {
            type: DataTypes.STRING(50)
        },
        team: {
            type: DataTypes.STRING(100)
        },
        sport_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Sport,
                key: 'sport_id'
            }
        },
        venue_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Venue,
                key: 'venue_id'
            }
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        time_slot: {
            type: DataTypes.STRING(50),
            aloowNull: false
        },
        purpose: {
            type: DataTypes.STRING(255),
        },
        additional_notes: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
            defaultValue: 'Pending',
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: 'bookings',
        timestamps: false
    }
);

module.exports = Booking;