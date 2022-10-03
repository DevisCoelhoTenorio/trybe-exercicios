const { authTokenValidation } = require('../utils/JWT');

const userMe = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const validate = await authTokenValidation(authorization);
        if (!validate) return res.status(500).json({ message: 'token RIP' });
        return res.status(200).json({ message: 'Não deu RIP' });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = userMe;
