const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Res_Jwt'; // Use the same secret as used in your authentication

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    // Check if bearer is undefined
    if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

    // Remove Bearer from string
    //const formattedToken = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        // if everything good, save to request for use in other routes
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;
