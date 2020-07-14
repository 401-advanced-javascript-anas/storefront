import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import product  from './actions';
import cart from './cart';


let reducers = combineReducers({ product, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();