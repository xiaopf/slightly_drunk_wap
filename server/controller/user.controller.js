var userModel = require('../model/user.model.js');
var utility = require('utility');
var fs = require('fs');
var path = require('path');




exports.getUserInfo = function (req,res,next){
	var _id = req.cookies.userId;
	if (_id) {
		userModel.findOne({ _id }, function (err, user) {
			if (err) { console.log(err); }
			user = user.toObject();//修改mongoose返回值问题

			if (user.userName) {
				res.json({ code: 6, msg: '拉取userinfo成功！', ...user, password: '', __v: '' })
			} else {
				res.json({ code: 3, msg: '服务器出现故障...', password: '', __v: '' })
			}

		})
	} else {
		res.json({ code: 0, msg: '未登录！' })
	}
	
}

exports.UpdateUserInfo = function (req, res, next) {
	var _id = req.cookies.userId;

	var chooseAddr = req.body.chooseAddr;
	var userName = req.body.userName;
	var password = req.body.password ? addSalt(password) : '';	
	var updateInfo;


	if(chooseAddr>=0){updateInfo = {chooseAddr}}
	if(userName){updateInfo = {userName}}
	if(password){updateInfo = {password}}

	if (_id) {

		userModel.update({ _id }, updateInfo, function (err, result) {
			if (err) { console.log(err); }
			
			if(result.ok){
				userModel.findOne({ _id }, function (err, user) {
					if (err) { console.log(err); }
					user = user.toObject();//修改mongoose返回值问题
					res.json({ code: 6, msg: 'info更新完成', ...user, password: '', __v: '' })
				})
			}

		})

	} else {
		res.json({ code: 0, msg: '未登录！' })
	}

}


exports.UpdateUserImage = function (req, res, next) {
	var _id = req.cookies.userId;

	var imgData = req.body.image;
	var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
	var dataBuffer = new Buffer(base64Data, 'base64');
	var nPath = `/upload/images/head/${_id}.png`;
	var newPath = path.join(__dirname, '../../', nPath);



	fs.writeFile(newPath, dataBuffer, function (err) {
		if (err) {console.log(err)};
		console.log('保存成功');
		
		if (_id) {

			userModel.update({ _id }, { image: nPath}, function (err, result) {
				if (err) { console.log(err); }

				if (result.ok) {
					userModel.findOne({ _id }, function (err, user) {
						if (err) { console.log(err); }
						user = user.toObject();//修改mongoose返回值问题
						res.json({ code: 6, msg: 'info更新完成', ...user, password: '', __v: '' })
					})
				}

			})

		} else {
			res.json({ code: 0, msg: '未登录！' })
		}



	});




}





exports.UpdateUserAddr = function (req, res, next) {
	var _id = req.cookies.userId;
    var addr = req.body;

	if (_id) {

		userModel.update({ _id }, {address:addr}, function (err, result) {
			if (err) { console.log(err); }

			if (result.ok) {
				userModel.findOne({ _id }, function (err, user) {
					if (err) { console.log(err); }
					user = user.toObject();//修改mongoose返回值问题
					res.json({ code: 7, msg: 'addr更新完成', ...user, password: '', __v: '' })
				})
			}

		})

	} else {
		res.json({ code: 0, msg: '未登录！' })
	}

}


exports.UpdateUserOwn = function (req, res, next) {
	var _id = req.cookies.userId;
	var own = req.body.own;

	if (_id) {

		userModel.update({ _id }, { own }, function (err, result) {
			if (err) { console.log(err); }

			if (result.ok) {
				userModel.findOne({ _id }, function (err, user) {
					if (err) { console.log(err); }
					user = user.toObject();//修改mongoose返回值问题
					res.json({ code: 6, msg: 'own更新完成', ...user, password: '', __v: '' })
				})
			}

		})

	} else {
		res.json({ code: 0, msg: '未登录！' })
	}

}






























exports.signUp = function(req,res,next){

	var {userName,password,image} = req.body;

	password = addSalt(password);//哈希加盐

	image = image === '' ? 'http://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg' : image;

    userModel.findOne({userName},function(err,data){
    	if(err){console.log(err);}

    	if(!data){
    		var user = new userModel({userName,password,image});
    		user.save(function(err,data){
		    	if(err){console.log(err);}
                res.cookie('userId',data._id);
		    	res.json({ code:6, msg:'恭喜您注册成功！', data})
    		});
    	}else{
    		res.json({ code:0, msg:'该用户名已被注册，请更改！'})
    	}
    	
    })
}



function addSalt(password){
	var salt = 'xiaopfaddsomesalt！'
	return utility.md5(utility.md5(password + salt))
}


exports.signIn = function(req,res,next){

	var {userName,password} = req.body;
    password = addSalt(password);//哈希加盐


    userModel.findOne({userName},function(err,data){
    	if(err){console.log(err);}

    	if(!data){
            res.json({ code:1, msg:'用户不存在！'})
    	}else if(data.password === password){
            res.cookie('userId',data._id);
            data.password = "";
            console.log(data)
    		res.json({ code:6, msg:'', data})
    	}else{
            res.json({ code:1, msg:'密码错误！'})
        }
    	
    })
}