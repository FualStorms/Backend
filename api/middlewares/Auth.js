const {User} =- require('../models/UserModel');

function Auth(req, res, next) {
    let token = req.header("Authorization");

    if (!token) {

        return res.status(400).json({
            sucess: false,
            message: "No valid token provided"
        });
    }
    User.findByToken(token, (err, user) => {
        if (err) {
            throw err;
        }

        if (!user) {
            return res.status(400).json({
                sucess: false,
                message: "No valid token provided"
            });
        }

        req.token = token;
        req.user = user;

        next();

    });

}

module.exports = {Auth} ;