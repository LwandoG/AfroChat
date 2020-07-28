const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authenticate = require('../middleware/authorisation')
const User = require('../models/User')
const Friend = require('../models/Friend')
const Message = require('../models/Message')

router.get('/:username', authenticate, (req, res) => {res.send("Get Chat object")});

router.post('/', [authenticate, [
    check('message', 'Message is required.').not().isEmpty()
]], async (req, res) => {const errors = validationResult(req)
    let { message, username } = req.body
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    try {
        let friend = await User.findOne({username});
        if(!friend) return res.status(404).json({msg: "Friend not found."})

        console.log(friend.id)
        console.log(req.user.id)
        /*if(friend.id  !== req.user.id){
            return res.status(401).json({msg: 'Unauthorised'})
        }*/

        const sender = await req.user.id;
        const receipient = friend

        const newMessage = new Message({
            sender,
            receipient,
            message,
            date: Date.now()
    })
        await newMessage.save();
        res.json(newMessage)
        
    } catch (error) {
        console.error(error)
        res.status(500).send('Server error.');
        
    }
})

module.exports = router;