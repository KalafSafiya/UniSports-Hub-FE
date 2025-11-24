const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        created_by: Number,
        created_at: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('Announcement', announcementSchema);