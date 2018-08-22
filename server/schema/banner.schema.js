var mongoose = require('mongoose');

var bannerSchema = new mongoose.Schema({
	'indexBannerList':{},
	'shopBannerList':{}
});


module.exports = bannerSchema;