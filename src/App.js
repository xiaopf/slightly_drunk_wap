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
import editerWine from './pages/signUp';





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
           <Route path='/edite/:id' component={ editerWine }></Route>
         </div>

      </BrowserRouter>
    );
  }

}







export default App;
