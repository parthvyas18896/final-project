var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) { 
res.render('users'); 
});
router.post('/form', function(req, res, next) {
  console.log('inside');
  console.log(req.body);
  // store all the user input data
  const {name, email, password}=req.body;
 
  // insert user data into users table
  var sql = `INSERT INTO user_details (user_name, user_email, user_password) VALUES ('${name}', '${email}', '${password}')`;
  db.query(sql,function (err, data, field) { 
      if (err) {console.log(err);} else {
    console.log("User dat is inserted successfully "); 
    res.redirect('userprofile');
}
  });  // redirect to user form page after inserting the data
}); 
module.exports = router;


// const express = require("express");
// const User = require('../core/data')
// const router = express.Router();
// const mysql = require("mysql");

// const user = new User();


// // const users = [
// //   { user_name: "Parth", user_email: "Vyas@gmail.com", user_password: "12345",user_conpassword:"12345" },
// //   { user_name: "test", user_email: "test@gmail.com", user_password: "12345",user_conpassword:"12345" },
// // ];

// router.get('/', (req,res,next) => {
//     res.render('index',{title:"Planet Green"})
// });

// router.post('/login', (req,res,next) => {
//     user.login(req.body.username, req.body.password, function(result){
//         if(result){
//             res.send('LOgged in as :'+ result.username);
//         }
//         else{
//             res.send('username/password invalid');
//         }
//     })
// });


// // router.post('/signup', (req,res,next) => {
// //     let userInput = {
// //         user_name: req.body.username,
// //         user_email:req.body.email,
// //         user_password:req.body.password,
// //         user_conpassword:req.body.conpassword
// //     };
// //     user.create(userInput,function(lastID){
// //         if(lastID){
// //             res.send('Welcome'+ userInput.username);
// //         }
// //         else{
// //             console.log('error creating a new user...');
// //         }
// //     })
// // });

// // router.get("/user", (request, response) => {
// //   const connection = getNewConnection();
// //   const queryString = "Select * FROM user_details";
// //   connection.query(queryString, (err, rows, fields) => {
// //     if (err != null) {
// //       console.error(err);
// //       response.sendStatus(500);
// //     } else {
// //       console.log("Connected");
// //       response.json(rows);
// //     }
// //   });
// // });

// // // response.json(users);
// // // response.status(501).json({
// // //     msg:'Not implemented',
// // //     display: 'alert-error',}
// // //     )
// // //});
// // // router.get('/user/:id', (request, response) => {
// // //     console.log(request.params)
// // //     const {id} = request.params;
// // //     response.json(users[id]);
// // // });
// router.post('/signup', (request,response, next) =>{
//   const connection = getNewConnection();
//   let postupdate = {username: req.body.username, email: req.body.email, password: req.body.password, conpassword: req.body.conpassword};
// 	let sql = "INSERT INTO user_details SET ?";

  
    
//     //const {username,email,password,conpassword} = request.body
//     //users.push({username,email,password,conpassword});
//     connection.query(sql,postupdate, function (err, res) {
//       if (err) {
//           console.log("data not submitted");
//       }
//       // if there are no errors send an OK message.
//       console.log('Saved succesfully');
//     });

//     next();
// } )



// // // router.delete('/user/:id', (request, response) => {
// // //     console.log(request.params)
// // //     const {id} = request.params;
// // //     users.splice(id,1);
// // //     response.json(users[id]);
// // // });

// // module.exports = router;
