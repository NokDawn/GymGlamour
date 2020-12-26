import { combineReducers } from 'redux';

import productsReducer from './products/products.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
	productsList: productsReducer,
	cart: cartReducer
});

export default rootReducer;
