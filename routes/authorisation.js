const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authorisation');

const User = require('../models/User');

//Get logged in user
router.get('/', authenticate, async (req, res) => {
    try {
        id = req.user.id
        const user = await User.findById(id);
        console.log(user)
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Could not reach server.');
    }
});

//Authorise login
router.post('/', [
    check('username', 'Please enter name')
    .not().isEmpty(),
    check('password', 'Please enter password')
    .not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
    const { username, password } = req.body;

    try {
        let user = await User.findOne({ username });
        if(!user) return res.status(400).json({ msg: 'Username not registered.' })

        if(!bcrypt.compare(password, user.password)) return res.status(400).json({ msg: 'Invalid password.' })

        jwt.sign({user: { id: user.id }}, config.get('jwtSecret'), {
        }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        })

    } catch (err) {
        console.error(err);
        res.status(500).send('Could not reach server.');
    }
});

module.exports = router;