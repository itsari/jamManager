const User = require('../models/user');

module.exports = (req, res, next) => {
    if (req.session.userId) {
        User.findById(req.session.userId, (err, user) => {
            if (err) {
                next(err);
            } else {
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};
