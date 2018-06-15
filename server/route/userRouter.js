var express = require('express');
var UserController = require('../controller/user.controller.js');

var Router = express.Router();

Router.post('/signup',UserController.signUp)
Router.post('/signin',UserController.signIn)

module.exports = Router;