const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const songRoutes = require('./routes/song');
const homeRoutes = require('./routes/home'); // Import home routes
const User = require('./models/user');
const userMiddleware = require('./middleware/userMiddleware'); // Import the middleware

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'chords-sharing-platform',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
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
        next();
    }
});

app.use(userMiddleware); // Use the middleware

app.use(homeRoutes); // Use home routes
app.use(authRoutes);
app.use(songRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
