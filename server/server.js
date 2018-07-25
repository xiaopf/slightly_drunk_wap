var express = require('express');
var app = express();


var userRouter = require('./route/userRouter');
var drinkRouter = require('./route/drinkRouter');
var pageRouter = require('./route/pageRouter');


var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var utility = require('utility');

app.use(cookieParser());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/dk';
mongoose.connect(dbUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('数据库连接成功！')});



var UserController = require('./controller/drink.controller.js');

app.get('/list',UserController.getList);





app.use('/user',userRouter);
app.use('/edit',drinkRouter);
app.use('/',pageRouter);




app.listen(8080,function(){
	console.log("后端挂载8080端口");
});

