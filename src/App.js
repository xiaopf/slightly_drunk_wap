import React, { Component } from 'react';


import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import './App.less';
import Index from './pages/index';
import Detail from './pages/detail';






class App extends Component {

  constructor(props) {
    super(props);

  }


  render() {



    return (
      <BrowserRouter>
         <div>
           <Route exact path='/' component={ Index }></Route>
           <Route path='/:id' component={ Detail }></Route>
         </div>

      </BrowserRouter>
    );
  }

}







export default App;
