
var mongoose = require('mongoose');

var drinkSchema = require('../schema/drink.schema.js');

var drinkModel = mongoose.model('drinkModel',drinkSchema)


module.exports = drinkModel;