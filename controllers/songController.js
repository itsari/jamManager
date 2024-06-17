const Song = require('../models/song');
const parseLyrics = require("../helper/parseLyrics");

exports.list = (req, res) => {
    Song.findAll((err, songs) => {
        if (err) {
            return res.status(500).send('Error retrieving songs');
        }
        res.render('songs', { songs });
    });
};

exports.new = (req, res) => {
    res.render('addSong');
};

// Route to add a new song
exports.create = (req, res) => {
    const { name, artist, album, tempo, text, youtube_link } = req.body;
    const userId = req.session.userId;

    Song.create(name, artist, album, tempo, text, youtube_link, userId, (err, songId) => {
        if (err) {
            return res.status(500).send('Error adding song');
        }
        res.redirect('/songs');
    });
};

exports.show = (req, res) => {
    const songId = req.params.id;
    Song.findById(songId, (err, song) => {
        if (err || !song) {
            return res.status(404).send('Song not found');
        }
        const parsedLyrics = parseLyrics(song.text);
        res.render('song', { song, parsedLyrics });
    });
};
//delete song by iy

exports.delete = (req, res) => {
    const songId = req.params.id;
    Song.deleteById(songId, (err) => {
        if (err) {
            return res.status(500).send('Error deleting song');
        }
        res.redirect('/songs');
    });
};
