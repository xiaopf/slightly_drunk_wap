var mongoose = require ('mongoose');
var drinkSchema = new mongoose.Schema({
	"drinkName":{ type:'String', require:true},
	"engName":{ type:'String', require:true},
	"img_url":{ type:'String', require:true}
	"describes":{ type:'String', require:true}
	"steps":{ type:'Array'}
	"stuffs":{ type:'Array'}
});

module.exports = drinkSchema;