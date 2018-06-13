var express = require('express');
var app = express();
var drink_list = require('../drink.json');

var userRouter = require('./userRouter');
var drinkRouter = require('./drinkRouter');


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




app.get('/list',function(req,res){
	res.json(drink_list);
});





app.use('/user',userRouter);
app.use('/user',drinkRouter);


app.listen(8080,function(){
	console.log("后端挂载8080端口");
});

