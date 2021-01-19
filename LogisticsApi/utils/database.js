const mysql = require('mysql2');
const config = require('../utils/config.json');

const pool = mysql.createPool({
    host: config.db.host,
    database: config.db.database,
    user: config.db.user,
    password: config.db.password
});

module.exports = pool.promise();