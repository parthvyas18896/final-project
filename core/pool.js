
// const mysql = require('mysql');

// const pool = mysql.createPool({
//     connectLimit:10,
//     host: "localhost",
//          port: 3306,
//          user: "root",
//          password: "password",
//        database: "202101-im215-planetgreen",
// })

// pool.getConnection((err,connection)=> {
//     if(err)
//     console.error("Something went wrong");

//     if(connection)
//      connection.release();
//      return;
// });

// // pool.query = util.promisify(pool.query);

// module.exports = pool;