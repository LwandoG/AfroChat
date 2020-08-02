const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    friends: [{
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
        default: []
    }]
});

module.exports = mongoose.model('user', UserSchema);