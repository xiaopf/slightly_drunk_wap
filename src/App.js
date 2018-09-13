import React, { Component } from 'react';

import {
  Route,
  Switch
} from 'react-router-dom';

import TableBar from './pages/TableBar';
import SignIn from './pages/frontend/sign/SignIn';
import SignUp from './pages/frontend/sign/SignUp';
import BackPage from './pages/backend/BackPage';

import DrinkDetail from './pages/frontend/drinklist/DrinkDetail';
import GoodsDetail from './pages/frontend/shop/GoodsDetail';
import WineCatagory from './pages/frontend/material/WineCatagory';
import WineDetail from './pages/frontend/material/WineDetail';

import ShopCart from './pages/frontend/shop/ShopCart';
import ShopMore from './pages/frontend/shop/ShopMore';

import AddAddress from './pages/frontend/my/AddAddress';
import MyAddress from './pages/frontend/my/MyAddress';
import MyInfo from './pages/frontend/my/MyInfo';
import MyComponent from './pages/frontend/my/MyComponent';
import ComingSoon from './pages/ComingSoon';



class App extends Component {
  
  constructor(props){
     super(props);
     this.state={
       hasErr : false
     }
  }

  componentDidCatch(){
    this.setState({
      hasErr:true
    })
  }

  render() {



    return (
      this.hasErr ? 
      
      <p>页面出错！！！</p>
      
      :

      <React.Fragment>

        <Switch>

          

          <Route exact path='/signin' component={ SignIn }></Route>
          <Route path='/signup' component={ SignUp }></Route>
          
          <Route path='/index' component={TableBar}></Route>
        
          <Route  path='/drink/:id' component={ DrinkDetail }></Route>

          <Route path='/wine/catagory/:id' component={WineCatagory}></Route>
          <Route path='/wines/:id' component={WineDetail}></Route>

          <Route path='/shopCart' component={ShopCart}></Route>
          <Route path='/goods/:id' component={ GoodsDetail }></Route>
          <Route path='/shopMore/:id' component={ShopMore}></Route>
 
          <Route path='/myInfo' component={MyInfo}></Route>
          <Route path='/myMaterial' component={MyComponent}></Route>
          <Route path='/myLike' component={MyComponent}></Route>
          <Route path='/address/myAddress' component={MyAddress}></Route>
          <Route path='/myaddress/addAddress/:id' component={AddAddress}></Route>
          <Route path='/myaddress/addAddress' component={AddAddress}></Route>
          <Route path='/myOrder' component={ComingSoon}></Route>
          <Route path='/invite' component={ComingSoon}></Route>
          <Route path='/mySale' component={ComingSoon}></Route>
          <Route path='/myProduction' component={ComingSoon}></Route>

          <Route path='/edit' component={BackPage}></Route>

        </Switch>

      </React.Fragment>
    );
  }

}







export default App;
