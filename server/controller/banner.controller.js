
var bannerModel = require('../model/banner.model.js');
var userModel = require('../model/user.model.js');











exports.getIndexBannerList = function (req, res, next) {

	var cookies = req.cookies;

	if (cookies.userId) {

		userModel.findOne({ _id: cookies.userId }, function (err, user) {
			if (err) { console.log(err); }
			bannerModel.find({}, function (err, banners) {
				if (err) { console.log(err); }
				if (user && banners) {
					user = user.toObject();//修改mongoose返回值问题
					res.json({ code: 6, msg: '拉取indexBannerList成功！', 'indexBannerList': banners, ...user, password: '', _v: '' })
				}

			})
		})

	}else{
		res.json({ code: 0, msg: '未登录！' })
	}
}



















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

                if(i == len){

                    bannerModel.find({},function(err,banners){
                        if(err){console.log(err)};
                        res.json({code:6,'msg':'更新成功！',banners})
                    })

                }


                
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




}


