const JWT = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
};

const { JTW_SECRET } = process.env;

const generateToken = (payload) => {
    JWT.sign(payload, JTW_SECRET, jwtConfig);
};

const authTokenValidation = (token) => {
    if (!token) {
        const error = new Error('sem TOKEN');
        error.status = 401;
        throw error;
    }

    try {
        const verification = JWT.verify(token, JTW_SECRET);
        console.log(verification);
        return verification;
    } catch (error) {
        console.log(error);
        // const erro = new Error('JWT RIP');
        // error.status = 401;
        throw error;
    }
};

module.exports = {
    generateToken,
    authTokenValidation,
};