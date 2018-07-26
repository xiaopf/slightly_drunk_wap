
var bannerModel = require('../model/banner.model.js');
let fs =  require('fs');
let path = require('path');



exports.updateBanner = function(req,res,next){


   console.log(req.body);
    
    let banners = req.body.banners;

    let len = banners.length;
    var i = 0;

    for(i; i < len; i++){

    	let { _id, banner_image, banner_link } = banners[i];


    	bannerModel.remove({},function(err,data){
    		if(err){console.log(err)};


    		let banner = new bannerModel( {banner_image,banner_link});


			banner.save(function(err){
				if(err){console.log(err)};
			})


    	})


    	// if(_id){
    	// 	bannerModel.findOne({_id},function(err,banner){
    	// 		if(err){console.log(err)};

    	// 		if(banner_image && banner_link){
	    // 			bannerModel.update({_id},{banner_image,banner_link},function(err,banner){
		   //  			if(err){console.log(err)};
	    // 			})
    	// 		}else{
	    // 			bannerModel.remove({_id},function(err,banner){
		   //  			if(err){console.log(err)};
	    // 			})
    	// 		}

    	// 	})
    	// }else{

    	// 	let banner = new bannerModel( {banner_image,banner_link});



    	// 	if(banner_image && banner_link){
    	// 		banner.save(function(err){
    	// 			if(err){console.log(err)};
    	// 		})
    	// 	}else{

    	// 	}



    	// }


    }


    if(i == len){
    	res.json({code:6,'msg':'更新成功！'})
    }

}


