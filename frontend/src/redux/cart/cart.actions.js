import { cartTypes } from './cart.types';

export const showCart = () => ({
	type: cartTypes.SHOW_CART
});

export const addToCart = (item) => ({
	type: cartTypes.ADD_TO_CART,
	payload: item
});

export const removeFromCart = (item) => ({
	type: cartTypes.REMOVE_FROM_CART,
	payload: item
});

export const changeQty = (id, size, value) => ({
	type: cartTypes.CHANGE_QTY,
	id,
	size,
	value
});
