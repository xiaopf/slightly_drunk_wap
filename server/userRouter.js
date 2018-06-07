var express = require('express');

var Router = express.Router();

Router.post('/signup',function(req,res){
	res.json({code:1});
})

module.exports = Router;