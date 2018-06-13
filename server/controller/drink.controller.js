var drinkModel = require('../model/drink.model.js');

exports function addDrink () = function(req,res,next){
	var { drinkName } = req.body;

	drinkModel.findOne({drinkName},function(err,drink){
		if(err){console.log(err)}

		if(!drink){
			var drink = new drinkModel( req.body );

			drink.save(function(err){
				if(err){console.log(err)};
				res.json({code:6,msg:'录入成功',drink})
			})
		}
	})
}