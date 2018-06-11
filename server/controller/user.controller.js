var userModel = require('../model/user.model.js');

exports.signUp = function(req,res,next){
	var userName = req.body.name;

	console.log(req.body);



    userModel.findOne({userName},function(err,data){
    	if(err){console.log(err);}

    	if(!data){
    		var user = new userModel(req.body);
    		user.save(function(err,data){
		    	if(err){console.log(err);}
		    	res.json(user)
    		});
    	}
    	
    })
}


exports.signIn = function(req,res,next){
    userModel.find({},function(err,data){
    	if(err){console.log(err);}
    	
    })
}