var express = require('express');


var Router = express.Router();

Router.get('/index',function(req,res,next){
	console.log(req.cookie);
})


module.exports = Router;