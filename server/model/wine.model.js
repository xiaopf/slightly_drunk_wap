
var mongoose = require('mongoose');

var wineSchema = require('../schema/wine.schema.js');

var wineModel = mongoose.model('wineModel',wineSchema)


module.exports = wineModel;