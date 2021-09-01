const mysql = require("mysql2");

const db_config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

let database = mysql.createPool(db_config);

module.exports = { database, db_config };
