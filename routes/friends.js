const express = require('express');
const router = express.Router();


//Get friends list
router.get('/', (req, res) => {res.send("Get friends")});

//Add friend
router.post('/', (req, res) => {res.send("Add Friend")})

module.exports = router;