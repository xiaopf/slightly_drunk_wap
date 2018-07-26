let drinkModel = require('../model/drink.model.js');
var userModel = require('../model/user.model.js');
var bannerModel = require('../model/banner.model.js');
let fs =  require('fs');
let path = require('path');


exports.getList = function (req,res,next){
    
  var cookies = req.cookies;


	if(cookies.userId){

		drinkModel.find({}).limit(10).exec(function(err,data){
			if(err){console.log(err);}
			userModel.findOne({_id:cookies.userId},function(err,user){
				if(err){console.log(err);}

				bannerModel.find({},function(err,banners){
					if(err){console.log(err);}
					if(data && user && banners){
						user.password = ' ';
						res.json({code:6,msg:'拉取成功！','drinkList':data,'user':user,'banners':banners})
					}

				})
			})	
		})


	}else{
		res.json({code:0,msg:'未登录！',drinkList:[]})
	}

}

exports.getOne = function (req,res,next){
    
  var _id = req.params.id;

	if(_id){

		drinkModel.find({_id},function(err,drink){
			if(err){console.log(err);}
			
			if(drink){
				user.password = ' ';
				res.json({code:6,msg:'详情页拉取成功！','drink':drink})
			}

		})


	}else{
		res.json({code:0,msg:'未拉取成功！','drink':[]})
	}

}





// var drinkList = require('./drink.json');




exports.addDrink = function(req,res,next){
	// let { drinkName } = req.body;

	// let img_local_url = req.body.img_local_url;
    




	// let values = Object.values(drinkList)
    
 //    var i = 0;

 //    var timer = setInterval(function(){

 //    	let img_url = values[i].img_url;
 //    	let drinkName = values[i].nameCn;
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

    
    // let banner = [
	   //  {
	   //  	'banner_image' : 'http://www.legacy.com.tw/uploads/banner/82948278366846233585.jpg',
	   //  	'banner_link' : 'http://localhost:3000/drink/11'
	   //  },
	   //  {
	   //  	'banner_image' : 'http://www.legacy.com.tw/uploads/banner/02085761131675905627.jpg',
	   //  	'banner_link' : 'http://localhost:3000/drink/11'
	   //  },
	   //  {
	   //  	'banner_image' : 'http://www.legacy.com.tw/uploads/banner/16619379388884103244.jpg',
	   //  	'banner_link' : 'http://localhost:3000/drink/11'
	   //  }
    // ];

 	// let values = Object.values(banner);
     
  //    var i = 0;

  //    var timer = setInterval(function(){

  //    	let banner_image = values[i].banner_image;
  //    	let banner_link = values[i].banner_link;



  //    	bannerModel.findOne({banner_image},function(err,banner){
  //    		if(err){console.log(err)}

  //    		if(!banner){
  //    			let banner = new bannerModel( {banner_image,banner_link});

  //    			banner.save(function(err){
  //    				if(err){console.log(err)};
  //    			})
  //    		}
  //    	})

  //        i++;

  //        if(i == 3){
  //        	clearInterval(timer);
  //        }

  //    },100)





			


}




