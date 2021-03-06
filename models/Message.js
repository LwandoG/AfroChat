const mongoose = require('mongoose');
const MessageSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    senderName: {
        type: String,
        ref: 'users'
    },
    receipientName: {
        type: String,
        ref: 'users'
    },
    
    receipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
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