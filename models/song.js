const db = require('./database');

const Song = {
    create: (name, artist, album, length, text, youtube_link, userid, callback) => {
        db.run(`
      INSERT INTO songs (name, artist, album, length, text, youtube_link, userid)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [name, artist, album, length, text, youtube_link, userid], function (err) {
            if (err) return callback(err);
            callback(null, this.lastID);
        });
    },

    findAll: (callback) => {
        db.all(`SELECT * FROM songs`, [], (err, rows) => {
            callback(err, rows);
        });
    },

    findById: (id, callback) => {
        db.get(`SELECT * FROM songs WHERE id = ?`, [id], (err, row) => {
            callback(err, row);
        });
    }
};

module.exports = Song;
