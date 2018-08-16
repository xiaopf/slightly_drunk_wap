var mongoose = require ('mongoose');
var wineSchema = new mongoose.Schema({


    "img_url": { type:'String', require:true},
	"name": { type:'String', require:true},
	"type": { type:'String', require:true},
	"typeEn": { type: 'String', require: true },
	"price": { type:'Number', require:true},
	"stock": { type: 'Number', require: true },
	"from": { type:'String', require:true},
	"capacity":{ type:'String', require:true},
	"material": { type:'String', require:true},
	"proof": { type:'String', require:true},
	"describes": { type:'String', require:true},
	"evaluate": { type:'Array'},
	"pics":{ type:'Array'}

});

module.exports = wineSchema;