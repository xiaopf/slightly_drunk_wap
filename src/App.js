import React, { Component } from 'react';


import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import './App.less';
import Index from './pages/index';
import DrinkDetail from './pages/frontend/DrinkDetail';
import GoodsDetail from './pages/frontend/GoodsDetail';
import WineCatagory from './pages/frontend/WineCatagory';
import WineDetail from './pages/frontend/WineDetail';
import SignIn from './pages/frontend/SignIn';
import SignUp from './pages/frontend/SignUp';
import BackPage from './pages/backend/BackPage';
import ShopCart from './pages/frontend/ShopCart';
import AddAddress from './pages/frontend/AddAddress';

import MyAddress from './pages/frontend/MyAddress';
import MyInfo from './pages/frontend/MyInfo';



class App extends Component {


  render() {



    return (
      <BrowserRouter>
        <div>

          <Route exact path='/signin' component={ SignIn }></Route>
          <Route path='/signup' component={ SignUp }></Route>

          <Route  path='/index' component={ Index }></Route>
          <Route  path='/drink/:id' component={ DrinkDetail }></Route>

          <Route path='/myInfo' component={MyInfo}></Route>





          <Route path='/goods/:id' component={ GoodsDetail }></Route>
          <Route path='/wine/catagory/:id' component={WineCatagory}></Route>
          <Route path='/wines/:id' component={ WineDetail }></Route>

          <Route path='/shop/ShopCart' component={ShopCart}></Route>


          <Route path='/edit' component={ BackPage }></Route>
          <Route path ='/shopCart' component = {ShopCart}></Route>

          <Route path='/address/myAddress' component={MyAddress}></Route>

          <Route path='/myaddress/addAddress' component={ AddAddress }></Route>
        </div>

      </BrowserRouter>
    );
  }

}







export default App;
