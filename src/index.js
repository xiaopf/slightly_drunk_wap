import React from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from "axios";
import { Toast } from "antd-mobile";
import './index.css';
import './reset.css';

import App from './App';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';

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




const store = createStore(reducers,compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension():f=>f
 
));


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
				<App />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();


