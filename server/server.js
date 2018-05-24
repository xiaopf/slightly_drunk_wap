var express = require('express');
var app = express();
var drink_list = require('../drink.json');

app.get('/list',function(req,res){
	res.json(drink_list);
});

app.listen(8080,function(){
	console.log("后端挂载8080端口");
});