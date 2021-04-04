var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/login', function(req, res){
    var username = req.body.usernameemail;
    var password = req.body.password;
    var sql="SELECT * FROM `users_details` WHERE `user_name`='"+username+"' and user_password = '"+password+"'";
    db.query(sql, [username, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.username= username;
            res.redirect('userprofile');
        }else{
            res.render('userprofile',{alertMsg:"Your Email Address or password is wrong"});
        }
    })
})
module.exports = router;