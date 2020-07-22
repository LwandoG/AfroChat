const mongoose = require('mongoose');
const ChatSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    
    receipient: {
        type: String,
        required: true
    },
    messageList: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('chat', ChatSchema);