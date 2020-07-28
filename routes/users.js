const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs')

const User = require('../models/User');

router.get('/', (req, res) => {res.send("Get users")});

router.put('/')

router.post('/', [
    check('name', 'Please enter name')
    .not().isEmpty(),
    check('username', 'Please enter name')
    .not().isEmpty(),
    check('email', 'Please enter email')
    .isEmail(),
    check('password', 'Please enter a password')
    .not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {name, username, email, password} = req.body;
    try {
        let user = await User.findOne({ username });
        if(user) return res.status(400).json({ msg: 'Username already taken.' })

        const hashedPass = await bcrypt.hash(password, 10);
        user = new User({
            name,
            username,
            email,
            password: hashedPass
        });

        await user.save();

        jwt.sign({user: { id: user.id }}, config.get('jwtSecret'),  (error, token) => {
            if(error) throw error;
            res.json({ token });
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error.');
    }
})

module.exports = router;