var express = require('express');
var app = express();





var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var utility = require('utility');

app.use(cookieParser());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/dk';
mongoose.connect(dbUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('数据库连接成功！')});







// //////////////////////
var userRouter = require('./route/userRouter');
var drinkRouter = require('./route/drinkRouter');
var pageRouter = require('./route/pageRouter');


var DrinkController = require('./controller/drink.controller.js');
var BannerController = require('./controller/banner.controller.js');

app.get('/api/indexBannerList', BannerController.getIndexBannerList);

app.get('/api/drinkList', DrinkController.getDrinkList);


// app.get('/detail/:id',DrinkController.getOne);


// 静态资源托管
app.use(express.static('public'))



app.use('/user',userRouter);
app.use('/edit',drinkRouter);
app.use('/', pageRouter);

// 录入数据
var allRouter = require('./route/allRouter');
app.use('/', allRouter);



// /////////////////////










app.listen(8080,function(){
	console.log("后端挂载8080端口");
});

