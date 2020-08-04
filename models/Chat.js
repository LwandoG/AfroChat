const mongoose = require('mongoose');
const ChatSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    senderName: {
        type: String
    },
    receipientName: {
        type: String
    }, 
    receipient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    
    messageList: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('chat', ChatSchema);