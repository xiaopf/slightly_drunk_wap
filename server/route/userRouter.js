var express = require('express');
var UserController = require('../controller/user.controller.js');
var multiparty = require('connect-multiparty')();

var Router = express.Router();

Router.post('/signup',UserController.signUp)
Router.post('/signin', UserController.signIn)
Router.get('/',UserController.getUserInfo)
Router.post('/',UserController.UpdateUserInfo)

Router.post('/image', multiparty,UserController.UpdateUserImage)
Router.post('/addr', UserController.UpdateUserAddr)
Router.post('/own', UserController.UpdateUserOwn)



module.exports = Router;