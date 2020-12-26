import Slider from '../../components/slider/slider.component';
import ProductHome from '../../components/product-home/product-home.component';

import products from '../../products';

import './homepage.styles.scss';

const HomePage = () => {
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
