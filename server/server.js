const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());  // Enables CORS
app.use(bodyParser.json());  // Parses JSON body data

// Route to get all articles
app.get("/articles", (req, res) => {
    const sql = "SELECT * FROM articles";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
});

// Route to create a new article
app.post("/articles", (req, res) => {
    const { title, content } = req.body;
    const sql = 'INSERT INTO articles (title, content) VALUES (?,?)';
    db.run(sql, [title, content], function(err) {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "id": this.lastID
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
