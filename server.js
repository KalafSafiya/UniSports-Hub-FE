const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import database connections
require('./config/mysql');
require('./config/mongo');

// Import routers
const announcementRouter = require('./routers/announcementRouter');
const approvalRouter = require('./routers/approvalRouter');
const auditLogRouter = require('./routers/auditLogRouter');
const bookingRouter = require('./routers/bookingRouter');
const contactFeedbackRouter = require('./routers/contactFeedbackRouter');
const newsRouter = require('./routers/newsRouter');
const scheduleRouter = require('./routers/scheduleRouter');
const sportRouter = require('./routers/sportRouter');
const teamMemberRouter = require('./routers/teamMemberRouter');
const teamRouter = require('./routers/teamRouter');
const userRouter = require('./routers/userRouter');
const venueRouter = require('./routers/venueRouter');
// Add other routers as needed

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/announcements', announcementRouter);
app.use('/api/approvals', approvalRouter);
app.use('/api/audit-logs', auditLogRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/contact-feedbacks', contactFeedbackRouter);
app.use('/api/news', newsRouter);
app.use('/api/schedules', scheduleRouter);
app.use('/api/sports', sportRouter);
app.use('/api/team-members', teamMemberRouter);
app.use('/api/teams', teamRouter);
app.use('/api/users', userRouter);
app.use('/api/venues', venueRouter);
// Add other routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));