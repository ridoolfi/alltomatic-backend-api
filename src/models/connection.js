const mysql = require('mysql2/promise')
require('dotenv').config()


const connection = mysql.createPool({
    host: '186.235.2.225',
    user: 'root',
    password: "root",
    database: 'root' 
})

module.exports = connection
