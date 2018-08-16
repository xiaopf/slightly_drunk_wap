var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	'userName':{ type : 'String' , require : true , unique : true},
	'password':{ type : 'String' , require : true},
	'image': { type: 'String', default: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'},
	'cart': {},
	'order':{},
	'address': [],
	'own':[{
		type: Schema.Types.ObjectId,
		ref: 'wine'
	}],
	'chooseAddr': { type: 'Number', require: true, default:0},
});


module.exports = userSchema;