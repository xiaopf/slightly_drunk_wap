var wineModel = require('../model/wine.model.js');
var bannerModel = require('../model/banner.model.js');
let drinkModel = require('../model/drink.model.js');
var userModel = require('../model/user.model.js');

var wineList = require('./data/wine.json');
var bannerList = require('./data/banner.json');
var drinkList = require('./data/drink.json');

exports.allInDb = function(req,res,next){

    let msgArr = [];
   
    let wineArray = Array.from([...Object.values(wineList)])
    let w_len = wineArray.length;
    for( let i = 0; i < w_len ;i ++){

        let drink = new wineModel({ ...wineArray[i]});

        drink.save(function(err,data){
            if(err){console.log(err)}
        })

        if (i == w_len-1) {
            msgArr.push('wine')
        }
    }



    let bannerArray = Array.from([...Object.values(bannerList)])
    let b_len = bannerArray.length;
    for (let i = 0; i < b_len; i++) {

        let banner = new bannerModel({ ...bannerArray[i] });

        banner.save(function (err, data) {
            if (err) { console.log(err) }
        })

        if (i == b_len - 1) {
            msgArr.push('banner')
        }
    }


    let drinkArray = Array.from([...Object.values(drinkList)])
    let d_len = drinkArray.length;
    for (let i = 0; i < d_len; i++) {

        let drink = new drinkModel({ ...drinkArray[i] });

        drink.save(function (err, data) {
            if (err) { console.log(err) }
        })

        if (i == d_len - 1) {
            msgArr.push('drink')

            res.json({'msg':`${msgArr}录入完成！`})
        }
    }

    

}





  