const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const Chat = require('../models/Chat')

router.get('/', (req, res) => {res.send("Get Message")});

//Send message
router.post('/', [authenticate, [
    check('username', 'Username is required.').not().isEmpty(),
    check('message', 'Message is required')
]], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const { username, message } = req.body

    try {
        
    } catch (error) {
        
    }

    res.send("Post Message")});

module.exports = router;