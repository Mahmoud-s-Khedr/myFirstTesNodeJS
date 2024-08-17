const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'temp',
    database: 'totest'
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('database connected');
    }
});
module.exports = db;
