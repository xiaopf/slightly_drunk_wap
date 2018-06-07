var express = require('express');
var app = express();
var drink_list = require('../drink.json');
var userRouter = require('./userRouter');
var body-parser = require('body-parser');

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

app.use(body-parser);

app.listen(8080,function(){
	console.log("后端挂载8080端口");
});

