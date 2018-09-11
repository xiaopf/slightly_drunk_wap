import express from 'express';
import UserController from '../controller/user.controller.js';

const SignRouter = express.Router();

SignRouter.post('/signup',UserController.signUp)
SignRouter.post('/signin', UserController.signIn)

module.exports = SignRouter;




