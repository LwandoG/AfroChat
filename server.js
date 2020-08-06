const express = require('express');
const db = require('./config/db');
const path = require('path');

const app = express();

db();

//Middleware initialisation
app.use(express.json({ extended: false }))

app.use('/api/users', require('./routes/users'));
app.use('/api/friends', require('./routes/friends'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/authorisation', require('./routes/authorisation'));

app.use(express.static(path.join(__dirname, "client/build")));
app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
