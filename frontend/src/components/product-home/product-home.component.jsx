import { Link } from 'react-router-dom';

import './product-home.styles.scss';

const ProductHome = ({ imageUrls, name, price, id, category }) => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className="product-home">
			<Link to={`${category}/${id}`} onClick={scrollToTop}>
				<div className="image-container">
					<img src={imageUrls[0]} alt="zdjecie modelki" />
				</div>
			</Link>
			<div className="product-home__bottom">
				<span className="product-home__bottom-title">{name}</span>
				<span className="product-home__bottom-price">{price} zł</span>
			</div>
		</div>
	);
};

export default ProductHome;
