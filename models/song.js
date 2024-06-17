const db = require('./database');

const Song = {
    create: (name, artist, album, length, text, youtube_link, userId, callback) => {
        const sql = `
            INSERT INTO songs (name, artist, album, length, text, youtube_link, userid)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [name, artist, album, length, text, youtube_link, userId];

        db.run(sql, values, function (err) {
            if (err) {
                return callback(err);
            }
            callback(null, this.lastID);
        });
    },

    findAll: (callback) => {
        const sql = 'SELECT * FROM songs';
        db.all(sql, [], (err, rows) => {
            callback(err, rows);
        });
    },

    findById: (id, callback) => {
        const sql = 'SELECT * FROM songs WHERE id = ?';
        db.get(sql, [id], (err, row) => {
            callback(err, row);
        });
    }
};

module.exports = Song;
