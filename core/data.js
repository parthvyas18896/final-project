// const pool = require('./pool');
// const bcrypt = require('bcrypt');
// const { result } = require('lodash');


// function User(){};

// User.prototype ={
//     find: function(user = null,callback)
//     {
//         if(user)
//         {
//             var field = Number.isInteger(user) ? 'id':'username';
//         }
//         let sql = 'SELECT * FROM user_details WHERE ${field} =?';
//         pool.query(sql,user,function(err,result){
//             if(err) throw err;
//             callback(result);
//         });
//     },
//     create : function (body, callback)
//     {
//         let pwd = body.password;
//         body.password = bcrypt.hashSync(pwd,10);

//         var bind = [];

//         for(prop in body){
//             bind.push(prop);
//         }

//         let sql = 'INSERT INTO user_details(user_name, user_email, user_password, user_conpassword, user_loginhistory) VALUES (1, 1, 1, 1, 1)';

//         pool.query(sql, bind, function(err, lastID){
//             if(err) console.error(err);
//             callback(lastID);
//         });
//     },
//     login : function(username,password,callback)
//     {
//         this.find(username,function(user){
//             if(user){
//                 if(bcrypt.compareSync(password,user.password)){
//                     callback(user);
//                     return;
//                 }
//             }
//             callback(null);
//         })
//     }
// }
// module.exports =User;