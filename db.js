// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hiokjb.py',
    database: 'auth_demo'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

module.exports = connection;
