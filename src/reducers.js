import { combineReducers } from 'redux';

import { wine } from './redux/wine.redux.js';
import { sign } from './redux/user.redux.js';
import { drink } from './redux/drink.redux.js';
import { banner } from './redux/banner.redux.js';

const reducers = combineReducers({
  sign,
  wine,
  drink,
  banner
})

export default reducers;