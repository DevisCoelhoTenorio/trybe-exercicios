const { authTokenValidation } = require('../utils/JWT');

const authMiddleware = (req, _res, next) => {
    const token = req.headers.authorization;
    const payload = authTokenValidation(token);

    if (!payload) {
        const error = new Error('error na leitura do token');
        error.status = 401;
        throw error;
    }
    req.user = payload;
    // res.locals.payload = payload;
    next();
};

module.exports = authMiddleware;