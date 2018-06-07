var userSchema = require('../schema/user.schema.js');
var mongoose = require('mongoose');

var userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;