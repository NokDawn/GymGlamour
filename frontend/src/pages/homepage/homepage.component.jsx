import Slider from '../../components/slider/slider.component';
import ProductDirectory from '../../components/product-directory/product-directory.component';

import './homepage.styles.scss';

const HomePage = () => {
	return (
		<div className="homepage">
			<Slider />
			<h2 className="heading-tertiary">Nowości i bestsellery</h2>
			<ProductDirectory />
		</div>
	);
};

export default HomePage;
