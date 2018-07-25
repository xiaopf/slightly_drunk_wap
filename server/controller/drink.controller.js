let drinkModel = require('../model/drink.model.js');
let fs =  require('fs');
let path = require('path');


exports.getList = function (req,res,next){
    
    var cookies = req.cookies;
	if(cookies){
		drinkModel.find({},function(err,data){
			if(err){console.log(err);}
	        if(data){
	        	res.json(data)
	        }
			
		})
	}else{
		res.json({code:0,msg:'未登录！'})
	}

}




// var drinkList = require('../drink.json');




exports.addDrink = function(req,res,next){
	// let { drinkName } = req.body;

	// let img_local_url = req.body.img_local_url;
    




	// let values = Object.values(drinkList)
    
 //    var i = 0;

 //    var timer = setInterval(function(){

 //    	let img_url = values[i].img_url;
 //    	let drinkName = values[i].name;
 //    	let engName = values[i].nameEng;
 //    	let describes = values[i].describes;


 //    	drinkModel.findOne({drinkName},function(err,drink){
 //    		if(err){console.log(err)}

 //    		if(!drink){
 //    			let drink = new drinkModel( {img_url,drinkName,engName,describes,steps : [''],stuffs : [{stuff_img_local_url:'',stuff_name:'',stuff_url:''}]});

 //    			drink.save(function(err){
 //    				if(err){console.log(err)};
 //    			})
 //    		}
 //    	})

 //        i++;

 //        if(i == 173){
 //        	clearInterval(timer);
 //        }

 //    },100)








			


}



exports.addBanner = function(req,res,next){
     
     console.log(req.body)
}
