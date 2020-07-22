const express = require('express');
const db = require('./config/db')

const app = express();

db();

//Middleware initialisation
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({ message: "Welcome to AfroChat"}));

app.use('/api/users', require('./routes/users'));
app.use('/api/friends', require('./routes/friends'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/authorisation', require('./routes/authorisation'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))