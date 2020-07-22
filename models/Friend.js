const mongoose = require('mongoose');
const FriendSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    
    username: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('friends', FriendSchema);