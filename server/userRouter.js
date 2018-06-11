var express = require('express');
var UserController = require('./controller/user.controller.js');

var Router = express.Router();

Router.post('/signup',UserController.signUp)

module.exports = Router;