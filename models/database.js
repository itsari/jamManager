const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./chords.db');

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);

    db.run(`
    CREATE TABLE IF NOT EXISTS songs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      artist TEXT NOT NULL,
      album TEXT NOT NULL,
      length TEXT NOT NULL,
      text TEXT NOT NULL,
      youtube_link TEXT NOT NULL,
      userid INTEGER,
      FOREIGN KEY(userid) REFERENCES users(id)
    )
  `);
});

module.exports = db;
