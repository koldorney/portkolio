const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "blog.db";

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            content TEXT
        )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                const insert = 'INSERT INTO articles (title, content) VALUES (?,?)';
                db.run(insert, ["First article", "This is the first post's content"]);
                db.run(insert, ["Second article", "This is the second post's content"]);
            }
        });
    }
});

module.exports = db;
