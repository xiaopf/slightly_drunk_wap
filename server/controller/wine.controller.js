var wineModel = require('../model/wine.model.js');
var userModel = require('../model/user.model.js');

exports.getWineList = function (req, res, next) {

    var cookies = req.cookies;
    var search = req.query.search;
    var _id = req.query._id;




    if (cookies.userId) {
        userModel.findOne({ _id: cookies.userId }, function (err, user) {
            if (err) { console.log(err); }
            user = user.toObject();//修改mongoose返回值问题

            console.log('winelist')

            if (search && !_id) {
                wineModel.find({
                    $or: [{ 'name': new RegExp('.*' + search + '.*', 'i') }, { 'describes': new RegExp('.*' + search + '.*', 'i') }]
                }).exec(function (err, wine) {
                    if (err) { console.log(err); }
                    if (wine[0]) {
                        res.json({ code: 5, msg: '拉取wine成功！', 'searchWine': wine, ...user, password: '', __v: '' })
                    } else {
                        res.json({ code: 4, msg: '未找到结果...', password: '', __v: '' })
                    }
                })
            } else if (!search && _id) {
                wineModel.findById({ _id }).exec(function (err, singleDrink) {

                    if (err) { console.log(err); }

                    if (singleDrink._id) {
                        res.json({ code: 6, msg: '拉取singledrink成功！', 'singleDrink': singleDrink, ...user, password: '', __v: '' })
                    } else {
                        res.json({ code: 3, msg: '服务器出现故障...', password: '', __v: '' })
                    }

                })
            } else if (!search && !_id) {
                wineModel.find({}).exec(function (err, data) {

                    if (err) { console.log(err); }
                    if (data[0]) {
                        res.json({ code: 6, msg: '拉取winelist成功！', 'wineList': data, ...user, password: '', __v: '' })
                    } else {
                        res.json({ code: 3, msg: '服务器出现故障...', password: '', __v: '' })
                    }

                })
            }

        })

    } else {
        res.json({ code: 0, msg: '未登录！' })
    }




}




