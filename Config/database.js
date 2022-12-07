const mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "api-nodejs",
    port: 8889
});

con.connect();

module.exports = con;