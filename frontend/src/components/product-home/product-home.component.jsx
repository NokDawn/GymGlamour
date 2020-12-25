import { Link } from 'react-router-dom';

import './product-home.styles.scss';

const ProductHome = ({ imageUrl, name, price, id, category }) => {
	return (
		<div className="product-home">
			<Link to={`${category}/${id}`}>
				<div className="image-container">
					<img src={imageUrl} alt="zdjecie modelki" />
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
