import React from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware,compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from "axios";
import { Toast } from "antd-mobile";
import './index.css';
import './reset.css';

import App from './App';

import { wine } from './redux/wine.redux.js';
import { sign } from './redux/user.redux.js';
import { drink } from './redux/drink.redux.js';
import { banner } from './redux/banner.redux.js';
import registerServiceWorker from './registerServiceWorker';

// 拦截器~
axios.interceptors.request.use(function(config){
	Toast.loading('loading',0);
	return config;
})

axios.interceptors.response.use(function (config) {
	Toast.hide();
	return config;
})

const reducers = combineReducers({
	sign,
	wine,
	drink,
	banner
})


const store = createStore(reducers,compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension():f=>f
 
));


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();


