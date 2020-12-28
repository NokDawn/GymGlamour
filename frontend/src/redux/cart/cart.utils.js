export const addItemToCart = (cartItems, itemToAdd) => {
	const existItem = cartItems.find((cartItem) => cartItem.id === itemToAdd.id && cartItem.size === itemToAdd.size);

	if (existItem) {
		return cartItems.map(
			(cartItem) =>
				cartItem.id === itemToAdd.id && cartItem.size === itemToAdd.size
					? { ...cartItem, qty: cartItem.qty + 1 }
					: cartItem
		);
	}

	return [ ...cartItems, { ...itemToAdd, qty: 1 } ];
};
