import Slider from '../../components/slider/slider.component';

import './homepage.styles.scss';

const HomePage = () => {
	return (
		<div className="homepage">
			<Slider />
			<h2 className="heading-tertiary">Nowości i bestsellery</h2>
		</div>
	);
};

export default HomePage;
