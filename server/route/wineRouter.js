var express = require('express');
var WineController = require('../controller/wine.controller.js');


var Router = express.Router();





Router.get('/wineList', WineController.getWineList)



module.exports = Router;