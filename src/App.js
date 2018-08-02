import React, { Component } from 'react';


import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import './App.less';
import Index from './pages/index';
import Detail from './pages/detail';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import backPage from './pages/backPage';
import ShopCart from './pages/ShopCart';
import AddAddress from './pages/AddAddress';

import MyAddress from './pages/MyAddress';



class App extends Component {

  constructor(props) {
    super(props);

  }


  render() {



    return (
      <BrowserRouter>
        <div>
          <Route exact path='/signin' component={ SignIn }></Route>
          <Route path='/signup' component={ SignUp }></Route>
          <Route  path='/index' component={ Index }></Route>
          <Route path='/drink/:id' component={ Detail }></Route>
          <Route path='/shop/:id' component={ Detail }></Route>
          <Route path='/shop/ShopCart' component={ShopCart}></Route>


          <Route path='/edit' component={ backPage }></Route>
          <Route path ='/shopCart' component = {ShopCart}></Route>

          <Route path='/address/myAddress' component={MyAddress}></Route>

          <Route path='/myaddress/addAddress' component={ AddAddress }></Route>
        </div>

      </BrowserRouter>
    );
  }

}







export default App;
