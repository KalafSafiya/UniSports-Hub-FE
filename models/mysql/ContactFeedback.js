const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const ContactFeedback = sequelize.define('ContactFeedback',
    {
        feedback_id: {
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
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('Student', 'Coach', 'Staff'),
            defaultValue: 'Student'
        },
        university_id: {
            type: DataTypes.STRING(50)
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT
        },
        attachment_path: {
            type: DataTypes.STRING(255)
        },
        submitted_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: 'contact_feedbacks',
        timestamps: false
    }
);

module.exports = ContactFeedback;