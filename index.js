const express = require('express');

const path = require('path');
var session = require('express-session');

// var bodyParser = require('body-parser');


//const morgan = require('morgan');
const multer = require('multer');

var upload = multer();

const app = express();
// app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
//app.use(morgan('dev'))
app.use(express.static('Public'));
app.use(upload.array());
app.use(express.json())

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(cookieParser())
app.set('view engine','ejs');
// app.set('views','views');
// app.set('views',path.join(__dirname,'views'));

var usersRouter = require('./routes/user');
var loginRouter = require('./routes/login-route');
var dashboardRouter = require('./routes/dashboard-route');
var logoutRouter = require('./routes/logout-route');

app.get('/', (req, res) => {
	res.render('index');
});

app.use('/user', usersRouter);
app.use('/',loginRouter);
app.use('/', dashboardRouter);
app.use('/', logoutRouter);


// // //link static files





// app.get('/', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/views/users'));
// });
// app.get('/',(req,res)=>{
// 	res.render('signup', {
// 		"title":"SignUp"
// 	})
// });

// app.post('/login', function(request, response) {
// 	const connection = getNewConnection();
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	if (username && password) {
// 		connection.query('SELECT * FROM user_details WHERE user_name = ? AND user_password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('./Public/index.html');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });
// app.post('/signup', function(request, response) {
// 	var username = request.body.username;
//     var email = request.body.email;
// 	var password = request.body.password;
//     var conpassword = request.body.conpassword;

// 	if (username && email && password && conpassword) {
// 		connection.query('SELECT * FROM user_details WHERE user_name = ? AND user_email = ? AND user_password =? AND user_conpassword =?', [username, email,password,conpassword], function(error, results, fields) {
// 			if (results.length > 0 && password === conpassword) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('./Public/index.html');
// 			} 
//             else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter valid Username and Password!');
// 		response.end();
// 	}
// });

// app.post('/', (request,response, next) =>{
// 	console.log("hi");
// 	const connection = getNewConnection();
// 	let postupdate = {username: req.body.username, email: req.body.email, password: req.body.password};
// 	  let sql = "INSERT INTO user_details SET ?";
  
	
	  
// 	  //const {username,email,password,conpassword} = request.body
// 	  //users.push({username,email,password,conpassword});
// 	  connection.query(sql,postupdate, function (err, res) {
// 		if (err) {
// 			console.log("data not submitted");
// 		}
// 		// if there are no errors send an OK message.
// 		console.log('Saved succesfully');
// 	  });
  
// 	  next();
//   } )
  



// app.use('/',pageRouter);

// app.use((req,res,next)=> {
//     var err = new Error('page not found');
//     err.status = 404;
//     next(err);
// })

// app.use((err,req,res,next)=> {
//     res.status(err.status || 500);
//     res.send(err.message);
// })

app.listen(3331,() => {
    console.log('The server is up and listening on port 3331');
});
module.exports = app;