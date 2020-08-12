const mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "songster_db"
  });

  connection.connect();

  module.exports = connection;