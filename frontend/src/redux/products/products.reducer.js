import { ProductsTypes } from './products.types';

const INITIAL_STATE = {
	products: [],
	loading: false,
	error: ''
};

const productsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProductsTypes.PRODUCTS_REQUEST:
			return {
				...state,
				loading: true
			};
		case ProductsTypes.PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload
			};
		case ProductsTypes.PRODUCTS_FAIL:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

export default productsReducer;
