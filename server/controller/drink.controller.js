let drinkModel = require('../model/drink.model.js');
var userModel = require('../model/user.model.js');


exports.getDrinkList = function (req,res,next){
    
    var cookies = req.cookies;
	var search = req.query.search;
	var _id = req.query._id;




	if(cookies.userId){
		userModel.findOne({ _id: cookies.userId }, function (err, user) {
			if (err) { console.log(err); }
			user = user.toObject();//修改mongoose返回值问题

			console.log(user)

			if (search && !_id){
				drinkModel.find({
					$or: [{ 'drinkName': new RegExp('.*' + search + '.*', 'i') }, { 'engName': new RegExp('.*' + search + '.*', 'i') },{ 'describes': new RegExp('.*' + search + '.*', 'i') }]
				}).exec(function (err, drink) {
					if (err) { console.log(err); }
					if (drink[0]) {
						res.json({ code: 5, msg: '拉取drink成功！', 'searchDrink': drink, ...user, password: '', __v: '' })
					} else{
						res.json({ code: 4, msg: '未找到结果...', password: '', __v: '' })
					}
				})
			} else if (!search && _id) {
				drinkModel.findById({ _id}).exec(function (err, singleDrink) {

					if (err) { console.log(err); }

					if (singleDrink._id) {	
						res.json({ code: 6, msg: '拉取singledrink成功！', 'singleDrink': singleDrink, ...user, password: '', __v: '' })
					} else {
						res.json({ code: 3, msg: '服务器出现故障...', password: '', __v: '' })
					}

				})
			} else if (!search && !_id){
				drinkModel.find({}).exec(function (err, data) {

					if (err) { console.log(err); }
					if (data[0]) {
						res.json({ code: 6, msg: '拉取drinklist成功！', 'drinkList': data, ...user, password: '', __v: '' })
					}else{
						res.json({ code: 3, msg: '服务器出现故障...', password: '', __v: '' })
					}

				})
			}

		})

	}else{
		res.json({code:0,msg:'未登录！'})
	}




}











exports.deleteDrink = function(req,res,next){


    let { _id }  = req.body;
    
    console.log(_id);
  
    if(_id){

   	    drinkModel.remove({_id},function(err,data){
			if(err){console.log(err)};
			res.json({code:6,msg:"酒单删除成功！"})
		})

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
    console.log(drink)
    let { _id } = req.body;
    
    delete drink._id;

    console.log(drink);
    if(_id){

   	    drinkModel.update({_id},drink,function(err,data){
			if(err){console.log(err)};
			res.json({code:6,msg:"酒单更新成功！"})
		})

    }


}




