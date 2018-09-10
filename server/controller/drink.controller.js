let drinkModel = require('../model/drink.model.js');

exports.getDrinkList = function (req,res,next){
    
	let u_id = req.cookies.userId;
	let search = req.query.search;
	let d_id = req.query.d_id;

	if(u_id){

		if (search && !d_id){
			drinkModel.find({
				$or: [{ 'drinkName': new RegExp('.*' + search + '.*', 'i') }, { 'engName': new RegExp('.*' + search + '.*', 'i') },{ 'describes': new RegExp('.*' + search + '.*', 'i') }]
			}).exec(function (err, drink) {
				if (err) { console.log(err); }
				if (drink[0]) {
					res.json({ code: 5, msg: '搜索drink成功！', 'searchDrink': drink })
				} else{
					res.json({ code: 404, msg: '未找到结果...' })
				}
			})
		} else if (!search && d_id) {
			drinkModel.findById({ _id: d_id}).exec(function (err, singleDrink) {

				if (err) { console.log(err); }

				if (singleDrink._id) {	
					res.json({ code: 6, msg: '拉取singledrink成功！', 'singleDrink': singleDrink })
				} else {
					res.json({ code: 3, msg: '服务器出现故障!' })
				}

			})
		} else if (!search && !d_id){
			drinkModel.find({}).exec(function (err, data) {

				if (err) { console.log(err); }
				if (data[0]) {
					res.json({ code: 6, msg: '拉取drink成功！', 'drinkList': data })
				}else{
					res.json({ code: 3, msg: '服务器出现故障...' })
				}

			})
		}

	}else{
		res.json({code:0,msg:'未登录！'})
	}
}

exports.deleteDrink = function(req,res,next){
	let u_id = req.cookies.userId;
	let { _id }  = req.body; 
	if(u_id){
		if(_id){
			drinkModel.remove({_id},function(err,data){
				if(err){console.log(err)};
				res.json({code:6,msg:"酒单删除成功！"})
			})
		}	
    }else{
		res.json({code:0,msg:'未登录！'})
	}
}





exports.addDrink = function(req,res,next){


    let item = req.body;
    delete item._id;

    if(item){

   	    let drink = new drinkModel(item);

   	    drink.save(function(err){
			if(err){console.log(err)};
			res.json({code:6,msg:"酒单添加成功！"})
		})

    }
}


















exports.updateDrink = function(req,res,next){



    let drink = req.body;
    
    let { _id } = req.body;
    
    delete drink._id;

    
    if(_id){

   	    drinkModel.update({_id},drink,function(err,data){
			if(err){console.log(err)};
			res.json({code:6,msg:"酒单更新成功！"})
		})

    }


}




