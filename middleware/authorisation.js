let webtoken = require('jsonwebtoken');
let config = require('config');

const authenticate = (req, res, next) => {
    // retrieve token
    const token = req.header('x-auth-token');

    // token available?
    if(!token) {
        return res.status(401).json({ message: 'Unauthorised.' })
    }

    //if token available
    try {
        const withToken = webtoken.verify(token, config.get('jwtSecret'));
        
        req.user = withToken.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Invalid token.' })
    }
}

module.exports = authenticate;