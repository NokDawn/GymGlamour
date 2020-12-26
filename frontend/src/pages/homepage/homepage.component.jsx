import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../redux/products/products.actions';

import Slider from '../../components/slider/slider.component';
import ProductHome from '../../components/product-home/product-home.component';

import './homepage.styles.scss';

const HomePage = () => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getProducts());
		},
		[ dispatch ]
	);

	const productsList = useSelector((state) => state.productsList);
	const { products, loading, error } = productsList;

	return (
		<div className="homepage">
			<Slider />
			<h2 className="heading-tertiary">Nowości i bestsellery</h2>
			<div className="homepage__products center">
				{products
					.filter((p, idx) => idx < 15)
					.map(({ _id, ...otherProductProps }) => <ProductHome key={_id} id={_id} {...otherProductProps} />)}
			</div>
		</div>
	);
};

export default HomePage;
