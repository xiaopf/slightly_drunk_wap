import React from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import './reset.css';
import App from './App';

import { getData } from './redux';

import registerServiceWorker from './registerServiceWorker';


const store = createStore(getData,compose(
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


