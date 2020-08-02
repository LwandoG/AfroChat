const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authenticate = require('../middleware/authorisation');

const User = require('../models/User');
const Friend = require('../models/Friend');
const { json } = require('express');

//Get friends list
router.get('/', authenticate, async (req, res) => {
    try {
        let friendList = await Friend.find({user: req.user.id})
        console.log(res.json(friendList))
        res.json(friendList)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error')
    }
});

//Add friend
router.post('/', [authenticate, [
    check('username', 'Username is required.').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const { username } = req.body;

    try {
        let result = await User.findOne({ username });
        let invalid = await Friend.findOne({ username })
        if(!result) return res.status(400).json({ msg: 'User not found.' })
        if(invalid) return res.status(422).json({msg: 'Already in friend list.'})

        let friendReq = new Friend({ username, user: req.user.id})


        res.json(await friendReq.save())

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error.');
    }
    
})

//Delete friend
router.delete('/:username', (req, res) => {res.send("Remove Friend")})

module.exports = router;