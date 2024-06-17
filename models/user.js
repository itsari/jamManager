const db = require('./database');
const bcrypt = require('bcryptjs');

const User = {
    create: (email, password, callback) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return callback(err);
            db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, hash], function (err) {
                if (err) return callback(err);
                callback(null, this.lastID);
            });
        });
    },

    findByEmail: (email, callback) => {
        db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
            callback(err, row);
        });
    },

    findById: (id, callback) => {
        db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
            callback(err, row);
        });
    }
};

module.exports = User;
