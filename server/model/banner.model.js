
var mongoose = require('mongoose');

var bannerSchema = require('../schema/banner.schema.js');

var bannerModel = mongoose.model('bannerModel',bannerSchema)


module.exports = bannerModel;