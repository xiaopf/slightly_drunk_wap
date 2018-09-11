import express from 'express';
import connect_multiparty from 'connect-multiparty';
import AllController from '../controller/all.controller.js';
import UserController from '../controller/user.controller.js';
import DrinkController from '../controller/drink.controller.js';
import BannerController from '../controller/banner.controller.js';
import WineController from '../controller/wine.controller.js';

const APIRouter = express.Router();
const multiparty = connect_multiparty();


APIRouter.get('/banner', BannerController.getBannerList);// 获取banner数据
APIRouter.get('/drink', DrinkController.getDrinkList);// 获取drink数据
APIRouter.get('/wine', WineController.getWineList)// 获取wine数据


APIRouter.get('/user/info', UserController.getUserInfo)// 获取user数据
APIRouter.post('/user/info', UserController.UpdateUserInfo)// 更新user信息（name和password）
APIRouter.post('/user/image', multiparty, UserController.UpdateUserImage)// 更新user的image
APIRouter.post('/user/addr', UserController.UpdateUserAddr)//更新user的addr
APIRouter.post('/user/own', UserController.UpdateUserOwn)//更新user的own
APIRouter.post('/user/cart', UserController.UpdateUserCart)//更新user的cart

// ////////////////////////////////

APIRouter.post('/wine/saveImg', multiparty, WineController.saveImg)//保存wine图片
APIRouter.post('/wine/updateWine', multiparty, WineController.updateWine)//更新wine的数据


// //////////////////////////////////////

APIRouter.post('/edit/updateItem', DrinkController.updateDrink)// 更新drink数据
APIRouter.delete('/edit/list', DrinkController.deleteDrink)// 更新drink数据
APIRouter.post('/edit/addItem', DrinkController.addDrink)// 更新drink数据
APIRouter.post('/edit/updateBanner', BannerController.updateBanner)// 更新banner数据


APIRouter.post('/entering', AllController.allInDb)// 初始化录入所有数据




module.exports = APIRouter;




