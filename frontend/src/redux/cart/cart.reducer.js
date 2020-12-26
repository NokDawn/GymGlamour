import { cartTypes } from './cart.types';

const INITIAL_STATE = {
	cartHidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartTypes.SHOW_CART:
			return {
				...state,
				cartHidden: !state.cartHidden
			};
		default:
			return state;
	}
};

export default cartReducer;
