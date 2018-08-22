var bannerModel = require('../model/banner.model.js');

exports.getBannerList = function (req, res, next) {
	var _id = req.cookies.userId;
	if (_id) {
		bannerModel.find({}, function (err, banners) {
			if (err) { console.log(err); }
			if (banners) {
				let { _id, indexBannerList,shopBannerList} = banners[0];
				res.json({code: 6, msg: '拉取bannerList成功！', _id, indexBannerList,shopBannerList})
			}else{
				res.json({ code: 500, msg: '服务器故障！' })
			}
		})
	}else{
		res.json({ code: 0, msg: '未登录！' })
	}
}


exports.updateBanner = function(req,res,next){


	var u_id = req.cookies.userId;
	let {_id ,banners,which} = req.body;

	console.log({ [which]: banners })
   

	if (u_id) {
		bannerModel.update({ _id }, {[which]:banners}, function (err, result) {
			if (err) { console.log(err); }

			if (result.ok) {
				bannerModel.find({}, function (err, banners) {
					if (err) { console.log(err); }
					if (banners) {
						let { _id, indexBannerList, shopBannerList } = banners[0];
						res.json({code: 6, msg: '更新bannerList成功！', _id, indexBannerList, shopBannerList})
					} else {
						res.json({ code: 500, msg: '服务器故障！' })
					}
				})
			}

		})
	} else {
		res.json({ code: 0, msg: '未登录！' })
	}



}

	




