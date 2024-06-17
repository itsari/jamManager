const Song = require('../models/song');

exports.list = (req, res) => {
    Song.findAll((err, songs) => {
        if (err) return res.sendStatus(500);
        res.render('songs', { songs });
    });
};

exports.show = (req, res) => {
    const { id } = req.params;
    Song.findById(id, (err, song) => {
        if (err) return res.sendStatus(500);
        res.render('song', { song });
    });
};

exports.create = (req, res) => {
    const { name, artist, album, length, text, youtube_link } = req.body;
    const userid = req.session.userId;
    Song.create(name, artist, album, length, text, youtube_link, userid, (err) => {
        if (err) return res.sendStatus(500);
        res.redirect('/songs');
    });
};
