import React from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware,compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import './reset.css';
import App from './App';

import { getData } from './redux';
import { sign } from './redux/user.redux.js';


import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({
	userMsg:sign,
	resData:getData
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


