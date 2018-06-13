var express = require('express');
var UserController = require('./controller/user.controller.js');

var userRouter = express.Router();

userRouter.post('/signup',UserController.signUp)
userRouter.post('/signin',UserController.signIn)

module.exports = userRouter;