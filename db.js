// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'sampledk-server.mysql.database.azure.com',
    user: 'vvqiriduzg',
    password: 'ZJrziMhYe50st$JT',
    database: 'auth_demo'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

module.exports = connection;
