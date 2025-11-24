const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
    {
        title: String,
        date: Date,
        image_url: String,
        link: String,
        description: String,
        created_by: Number,
        created_at: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('News', newsSchema);