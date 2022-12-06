const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.jwtSecret);
        next();
    }
    catch (err) {
        res.status(500).json(err.message);
    }
};

exports.Auth = Auth;