const mongoose = require('mongoose');
const MessageSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    
    receipient: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('message', MessageSchema);