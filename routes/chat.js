const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authenticate = require('../middleware/authorisation')
const User = require('../models/User')
const Friend = require('../models/Friend')
const Message = require('../models/Message')
const Chat = require('../models/Chat')


router.get('/', authenticate, async (req, res) => {
    try {
        const chats = await Chat.find({ $or: [{ sender: req.user.id }, {receipient: req.user.id}]  });
        res.json(chats)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

router.post('/', [authenticate, [
    check('message', 'Message is required.').not().isEmpty()
]], async (req, res, next) => {const errors = validationResult(req)
    let { message, username } = req.body
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    try {
        let receipient = await User.findOne({username});
        if(!receipient) return res.status(404).json({msg: "Friend not found."})

        /*if(friend.id  !== req.user.id){
            return res.status(401).json({msg: 'Unauthorised'})
        }*/

        const sender = await req.user.id;
        let senderObj = await User.findById(sender)
        //const senderObj = await User.findOne({sender});
        const senderName = senderObj.name
        const receipientName = receipient.name
        console.log(sender)
        

        let chat = await Chat.find({ $or: [{ sender: req.user.id }, {receipient: req.user.id}]  })
        
            const newMessage = new Message({
                sender,
                senderName,
                receipientName,
                receipient,
                message,
                date: Date.now()
        })

        chat = await Chat.findOneAndUpdate({sender, receipient}, {$push: {messageList: newMessage}, $set: {receipientName: receipientName}}, {upsert: true, new: true})
       // chat.messageList.push(newMessage)
        
           res.json(await chat.save())
        

        
        
    } catch (error) {
        console.error(error)
        res.status(500).send('Server error.');
        
    }
})

module.exports = router;