import React from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware,compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import './reset.css';

import App from './App';

import { getData } from './redux/list.redux.js';
import { sign } from './redux/user.redux.js';
import { drink } from './redux/drink.redux.js';
import { banner } from './redux/banner.redux.js';





import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({
	userMsg : sign,
	resData : getData,
	drink,
	banner,
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


