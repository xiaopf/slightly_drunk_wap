var express = require('express');
var DrinkController = require('../controller/drink.controller.js');

var BannerController = require('../controller/banner.controller.js');


var multiparty=require('connect-multiparty')();
var Router = express.Router();

Router.post('/updateItem',DrinkController.updateDrink)
Router.post('/deleteItem',DrinkController.deleteDrink)
Router.post('/addItem',DrinkController.addDrink)
Router.post('/updateBanner',BannerController.updateBanner)


module.exports = Router;




