var mongoose = require('mongoose');

var bannerSchema = new mongoose.Schema({
	'banner_image':{ type : 'String' , require : true},
	'banner_link':{ type : 'String' , require : true}
});


module.exports = bannerSchema;