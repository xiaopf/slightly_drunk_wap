var userModel = require('../model/user.model.js');
var utility = require('utility');

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

	console.log(req.body)

    userModel.findOne({userName},function(err,data){
    	if(err){console.log(err);}

    	if(!data){
            res.json({ code:1, msg:'用户不存在！'})
    	}else{
            res.cookie('userId',data._id);
    		res.json({ code:6, msg:'', data})
    	}
    	
    })
}