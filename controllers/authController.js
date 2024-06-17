const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
    const { email, password } = req.body;
    User.create(email, password, (err, userId) => {
        if (err) {
            return res.render('register', { error: 'Error creating user' });
        }
        req.session.userId = userId;
        res.redirect('/songs');
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, (err, user) => {
        if (err || !user) {
            return res.render('login', { error: 'Invalid email or password' });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (isMatch) {
                req.session.userId = user.id;
                res.redirect('/songs');
            } else {
                res.render('login', { error: 'Invalid email or password' });
            }
        });
    });
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login');
};
