var wineModel = require('../model/wine.model.js');
var userModel = require('../model/user.model.js');
var fs = require('fs');
var path = require('path');

exports.getWineList = function (req, res, next) {
    
    var u_id = req.cookies.userId;
    var search = req.query.search;
    var _id = req.query._id;
    console.log(u_id)
    if (u_id) { 
       
        if (search && !_id) {
            wineModel.find({
                $or: [{ 'name': new RegExp('.*' + search + '.*', 'i') }, { 'describes': new RegExp('.*' + search + '.*', 'i') }]
            }).exec(function (err, wine) {
                if (err) { console.log(err); }
                if (wine[0]) {
                    res.json({ code: 6, msg: '拉取wine成功！', 'searchWine': wine, })
                } else {
                    res.json({ code: 404, msg: '未找到结果...' })
                }
            })
        } else if (!search && _id) {
            wineModel.findById({ _id }).exec(function (err, singleWine) {

                if (err) { console.log(err); }

                if (singleWine._id) {
                    res.json({ code: 6, msg: '拉取singlewine成功！', 'singleWine': singleWine, })
                } else {
                    res.json({ code: 3, msg: '服务器出现故障...' })
                }

            })
        } else if (!search && !_id) {
            wineModel.find({}).exec(function (err, data) {
                console.log(11)
                if (err) { console.log(err); }
                if (data[0]) {
                    res.json({ code: 6, msg: '拉取winelist成功！', 'wineList': data, })
                } else {
                    res.json({ code: 3, msg: '服务器出现故障...' })
                }

            })
        }



    } else {
        res.json({ code: 0, msg: '未登录！' })
    }




}


exports.saveImg = function(req,res,next){

    console.log(req.files)
    var u_id = req.cookies.userId;
    let upImg = req.files.uploads;
    let len = upImg.length;
    let nameArr=[];

    if (upImg instanceof Array){
        upImg.map((img,index)=>{
            let filePath = img.path;
            let date = new Date();
            let imgName = u_id + date.getTime() + index + ".jpg";
            nameArr.push(imgName);
            let newPath = path.join(__dirname, '../../', '/public/upload/images/upWine/' + imgName);

            fs.readFile(filePath, function (err, data) {

                if (err) { console.log(err); };

                fs.writeFile(newPath, data, function (err) {
                    if (err) { console.log(err); };
                    
                    if(index === len - 1){
                        res.json({ nameArr });
                    }
                    
                });
            });
        })


    }else{

        let filePath = upImg.path;
        let date = new Date();
        let imgName = u_id + date.getTime() + ".jpg";
        nameArr.push(imgName);
        let newPath = path.join(__dirname, '../../', '/public/upload/images/upWine/' + imgName);

        fs.readFile(filePath, function (err, data) {

            if (err) { console.log(err); };

            fs.writeFile(newPath, data, function (err) {
                if (err) { console.log(err); };
                res.json({ nameArr});
            });
        });
    }


    
} 



exports.updateWine = function (req, res, next) {


    var u_id = req.cookies.userId;
    let { _id } = req.body;


    if (u_id) {
        wineModel.update({ _id }, req.body , function (err, result) {
            if (err) { console.log(err); }

            if (result.ok) {
                wineModel.find({}, function (err, data) {
                    if (err) { console.log(err); }
                    if (data) {
                        let wineList = data[0];
                        res.json({ code: 6, msg: '更新wine成功！', wineList })
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
