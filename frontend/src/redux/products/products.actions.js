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

export const getProduct = (slug) => async (dispatch) => {
	try {
		dispatch({
			type: ProductsTypes.PRODUCT_REQUEST
		});

		const { data } = await axios.get(`/api/products/${slug}`);

		dispatch({
			type: ProductsTypes.PRODUCT_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: ProductsTypes.PRODUCT_FAIL,
			payload: error.resposen && error.response.data.message ? error.response.data.message : error.message
		});
	}
};
