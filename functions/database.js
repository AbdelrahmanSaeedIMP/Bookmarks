const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const {
    mysqlHost,
    mysqlUser,
    mysqlPass,
    mysqldbgit 
} = process.env;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'taskimp',
    password: 'mysql@password',
    port: '3306'
  });

exports.pool = pool;