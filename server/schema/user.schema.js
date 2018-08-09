var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	'userName':{ type : 'String' , require : true , unique : true},
	'password':{ type : 'String' , require : true},
	'image': { type: 'String', default: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'},
	'cart': {},
	'order':{},
	'address':{}
});


module.exports = userSchema;