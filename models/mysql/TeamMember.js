const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');
const Team = require('./Team');

const TeamMember = sequelize.define('TeamMember', 
    {
        member_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        team_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Team,
                key: 'team_id'
            }
        },
        member_name: {
            type: DataTypes.STRING(100)
        },
        university_id: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        role: {
            type: DataTypes.ENUM('Captain', 'Vice Captain', 'Player'),
            defaultValue: 'Player'
        },
        faculty: {
            type: DataTypes.ENUM(
                'Faculty of Applied Sciences',
                'Faculty of Business Studies',
                'Faculty of Technology Studies',
            ),
            allowNull: false
        },
        year: {
            type: DataTypes.ENUM('1st Year', '2nd Year', '3rd Year', '4th Year'),
            allowNull: false
        }
    },
    {
        tableName: 'team_members',
        timestamps: false
    }
);

module.exports = TeamMember;