var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2458696357",
    database: "mydb"
});

module.exports = con