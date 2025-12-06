const sequelize = require('../../config/mysql');

// Import models
const User = require('./User');
const Booking = require('./Booking');
const Sport = require('./Sport');
const Venue = require('./Venue');
const Team = require('./Team');
const TeamMember = require('./TeamMember');
const Schedule = require('./Schedule');
const Approval = require('./Approval');
const AuditLog = require('./Audit');

// -----------------------
// Define associations
// -----------------------

// User -> Booking
User.hasMany(Booking, { foreignKey: 'user_id', as: 'bookings' });
Booking.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// User -> Schedule (as coach)
User.hasMany(Schedule, { foreignKey: 'coach_id', as: 'schedules' });
Schedule.belongsTo(User, { foreignKey: 'coach_id', as: 'coach' });

// User -> Team (as coach)
User.hasMany(Team, { foreignKey: 'coach_id', as: 'teams' });
Team.belongsTo(User, { foreignKey: 'coach_id', as: 'coach' });

// User -> Approval (approved_by)
User.hasMany(Approval, { foreignKey: 'approved_by', as: 'approvals' });
Approval.belongsTo(User, { foreignKey: 'approved_by', as: 'approver' });

// User -> AuditLog
User.hasMany(AuditLog, { foreignKey: 'user_id', as: 'auditLogs' });
AuditLog.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// Booking -> Approval
Booking.hasMany(Approval, { foreignKey: 'booking_id', as: 'approvals' });
Approval.belongsTo(Booking, { foreignKey: 'booking_id', as: 'booking' });

// Booking -> AuditLog
Booking.hasMany(AuditLog, { foreignKey: 'booking_id', as: 'auditLogs' });
AuditLog.belongsTo(Booking, { foreignKey: 'booking_id', as: 'booking' });

// Sport -> Booking
Sport.hasMany(Booking, { foreignKey: 'sport_id', as: 'bookings' });
Booking.belongsTo(Sport, { foreignKey: 'sport_id', as: 'sport' });

// Venue -> Booking
Venue.hasMany(Booking, { foreignKey: 'venue_id', as: 'bookings' });
Booking.belongsTo(Venue, { foreignKey: 'venue_id', as: 'venue' });

// Sport -> Team
Sport.hasMany(Team, { foreignKey: 'sport_id', as: 'teams' });
Team.belongsTo(Sport, { foreignKey: 'sport_id', as: 'sport' });

// Team -> TeamMember
Team.hasMany(TeamMember, { foreignKey: 'team_id', as: 'members' });
TeamMember.belongsTo(Team, { foreignKey: 'team_id', as: 'team' });

// Sport -> Schedule
Sport.hasMany(Schedule, { foreignKey: 'sport_id', as: 'schedules' });
Schedule.belongsTo(Sport, { foreignKey: 'sport_id', as: 'sport' });

// Venue -> Schedule
Venue.hasMany(Schedule, { foreignKey: 'venue_id', as: 'schedules' });
Schedule.belongsTo(Venue, { foreignKey: 'venue_id', as: 'venue' });

// -----------------------
// Sync models
// -----------------------
sequelize.sync({ alter: true })
    .then(() => console.log('All MySQL models synced successfully'))
    .catch(err => console.error('Error syncing MySQL models:', err));

module.exports = {
    sequelize,
    User,
    Booking,
    Sport,
    Venue,
    Team,
    TeamMember,
    Schedule,
    Approval,
    AuditLog
};
