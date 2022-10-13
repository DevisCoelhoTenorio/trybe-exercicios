const Joi = require('joi');
const JWT = require('jsonwebtoken');

const { JTW_SECRET } = process.env;

const login = (body) => Joi.object({
            username: Joi.string().min(5).alphanum().required()
            .messages({
                'string.min': 'User min error',
                'string.require': 'User is require',
            }),
            password: Joi.string().min(5).required().messages({
                'string.min': 'Password min error',
                'string.require': 'Password is require',
            }),
        }).validate(body);

const registerLogin = async (req, res, next) => {
    const { error } = login(req.body);
    const { username } = req.body;

    if (error) {
       return next(error);
    }
    const payload = { 
        username,
        admin: username === 'admin',
    };
    const token = JWT.sign(payload, JTW_SECRET, { expiresIn: '1h', algorithm: 'HS256' });
    return res.status(200).json({ token });
};

module.exports = registerLogin;
