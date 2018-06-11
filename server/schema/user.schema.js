var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	'userName':{ type : 'String' , require : true , unique : true},
	'password':{ type : 'String' , require : true},
	'image' : { type : 'String' , default : 'http://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg'}
});


module.exports = userSchema;