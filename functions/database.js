const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const {
    mysqlHost,
    mysqlUser,
    mysqlPass,
    mysqlDB,
    mysqlPort
} = process.env;

const pool = mysql.createPool({
    host: mysqlHost,
    user: mysqlUser,
    database: mysqlDB,
    password: mysqlPass,
    port: mysqlPort
  });

exports.pool = pool;