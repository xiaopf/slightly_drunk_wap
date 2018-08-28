var express = require('express');
var WineController = require('../controller/wine.controller.js');
var multiparty = require('connect-multiparty')();

var Router = express.Router();





Router.get('/wineList', WineController.getWineList)
Router.post('/winner', multiparty, WineController.test)



module.exports = Router;