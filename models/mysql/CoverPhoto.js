const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');
const User = require('./User');

const CoverPhoto = sequelize.define('CoverPhoto', 
    {
        photo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(100)
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        uploaded_by: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'user_id'
            }
        },
        category: {
            type: DataTypes.ENUM('Sport', 'Venues', 'News', 'Announcements'),
            allowNull: false,
            defaultValue: 'Sport'
        },
        uploaded_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: 'cover_photos',
        timestamps: false
    }
);

module.exports = CoverPhoto;