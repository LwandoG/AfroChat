const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {res.send("Get Message")});

//Send message
router.post('/', authenticate, (req, res) => {res.send("Post Message")});

module.exports = router;