import { combineReducers } from 'redux';

import productsReducer from './products/products.reducer';

const rootReducer = combineReducers({
	productsList: productsReducer
});

export default rootReducer;
