let drinkModel = require('../model/drink.model.js');
var userModel = require('../model/user.model.js');




exports.getDrinkList = function (req,res,next){
    
    var cookies = req.cookies;
	var search = req.query.search.trim();

	console.log(search)


	if(cookies.userId){
		userModel.findOne({ _id: cookies.userId }, function (err, user) {
			if (err) { console.log(err); }
			user = user.toObject();//修改mongoose返回值问题

			if (!search){
				console.log('！搜索')
				drinkModel.find({}).exec(function (err, data) {

					if (err) { console.log(err); }

					if (data && user) {
						res.json({ code: 6, msg: '拉取drinklist成功！', 'drinkList': data, ...user, password: '', _v: '' })
					}	
				})
			}else{
				console.log('搜索')
				drinkModel.find({
					$or: [{ 'drinkName': new RegExp('.*' + search + '.*', 'i') }, { 'describes': new RegExp('.*' + search + '.*', 'i') }]
				}).exec(function (err, drink) {
					if (err) { console.log(err); }
					if (drink && user) {
						res.json({ code: 6, msg: '拉取drink成功！', 'searchDrink': drink, ...user, password: '', _v: '' })
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




