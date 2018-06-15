var express = require('express');
var DrinkController = require('../controller/drink.controller.js');
var multiparty=require('connect-multiparty')();
var Router = express.Router();

Router.post('/addItem',multiparty,DrinkController.addDrink)


module.exports = Router;