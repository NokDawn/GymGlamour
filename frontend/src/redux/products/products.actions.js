import { ProductsTypes } from './products.types';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
	try {
		dispatch({
			type: ProductsTypes.PRODUCTS_REQUEST
		});

		const { data } = await axios.get('/api/products');

		dispatch({
			type: ProductsTypes.PRODUCTS_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: ProductsTypes.PRODUCTS_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};
