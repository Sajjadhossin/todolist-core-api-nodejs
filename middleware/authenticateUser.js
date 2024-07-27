const User = require("../model/userModel");

const authenticateUser = async (req, res, next) => {
    const username = req.headers['username'];

    if (!username) {
        return res.status(401).send('Authorization failed: Username header missing');
    }

    try {
        const user = await User.findOne({ userName: username });

        if (!user) {
            return res.status(401).send('Authorization failed: Invalid username');
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = authenticateUser;
