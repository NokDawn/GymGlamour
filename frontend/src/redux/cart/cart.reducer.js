import { cartTypes } from './cart.types';

import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
	cartHidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartTypes.SHOW_CART:
			return {
				...state,
				cartHidden: !state.cartHidden
			};
		case cartTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case cartTypes.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter((cartItem) => `${cartItem.id}${cartItem.size}` !== action.payload)
			};
		case cartTypes.CHANGE_QTY:
			return {
				...state,
				cartItems: state.cartItems.map(
					(cartItem) =>
						cartItem.id === action.id && cartItem.size === action.size
							? { ...cartItem, qty: action.value }
							: cartItem
				)
			};
		default:
			return state;
	}
};

export default cartReducer;
