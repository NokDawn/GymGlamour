import { useState, useEffect } from 'react';

import axios from 'axios';

import Slider from '../../components/slider/slider.component';
import ProductHome from '../../components/product-home/product-home.component';

import './homepage.styles.scss';

const HomePage = () => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios.get('/api/products');

			console.log(data);
			setProducts(data);
		};

		getProducts();
	}, []);

	return (
		<div className="homepage">
			<Slider />
			<h2 className="heading-tertiary">Nowości i bestsellery</h2>
			<div className="homepage__products center">
				{products
					.filter((p, idx) => idx < 15)
					.map(({ id, ...otherProductProps }) => <ProductHome key={id} id={id} {...otherProductProps} />)}
			</div>
		</div>
	);
};

export default HomePage;
