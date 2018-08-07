var express = require('express');
var AllController = require('../controller/all.controller.js');
var Router = express.Router();


Router.post('/entering', AllController.allInDb)

module.exports = Router;




