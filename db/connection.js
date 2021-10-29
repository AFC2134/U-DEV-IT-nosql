const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username,
        user: 'root',
        // password
        password: 'Coon3y21',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;