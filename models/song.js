const db = require('./database');

const Song = {
    create: (name, artist, album, tempo, text, youtube_link, userId, callback) => {
        const sql = `
            INSERT INTO songs (name, artist, album, tempo, text, youtube_link, userid)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [name, artist, album, tempo, text, youtube_link, userId];

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
    },
    //delete song by id
    deleteById: (id, callback) => {
        const sql = 'DELETE FROM songs WHERE id =?';
        db.run(sql, [id], function (err) {
            if (err) {
                return callback(err);
            }
            callback(null, this.lastID);
        });
    },
    //update song by id
    updateById: (id, name, artist, album, tempo, text, youtube_link, callback) => {
        const sql = 'UPDATE songs SET name =?, artist =?, album =?, tempo =?, text =?, youtube_link =? WHERE id =?';
        const values = [name, artist, album, tempo, text, youtube_link, id];
        db.run(sql, values, function (err) {
            if (err) {
                return callback(err);
            }
            callback(null, this.lastID);
        });
    }
};

module.exports = Song;
