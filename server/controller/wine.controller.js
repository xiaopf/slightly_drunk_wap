var wineModel = require('../model/wine.model.js');
var userModel = require('../model/user.model.js');

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




