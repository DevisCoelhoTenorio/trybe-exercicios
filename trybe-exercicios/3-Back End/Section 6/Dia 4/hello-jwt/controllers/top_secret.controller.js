const topSecret = async (req, res) => {
    const { user } = req;
    console.log('user', user);
    // console.log(res.locals.payload);
    if (user.admin) {
        return res.status(200).json({ message: 'parparaprara foi!' });
    }
    return res.status(666).json({ message: 'no kEY OK Bro' });
};

module.exports = topSecret;
