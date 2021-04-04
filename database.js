const mysql = require ('mysql');
var conn = mysql.createConnection( {
	
	  host: "localhost",
	  port: 3306,
	  user: "root",
	  password: "password",
	  database: "202101-im215-planetgreen",
	});
    conn.connect(function(err) {
        if (err) throw err;
        console.log('Database is connected successfully !');
      });
      module.exports = conn;