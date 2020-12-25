import './product-home.styles.scss';

const ProductHome = ({ imageUrl, name, price }) => {
	return (
		<div className="product-home">
			<div className="image-container">
				<img src={imageUrl} alt="zdjecie modelki" />
			</div>
			<div className="product-home__bottom">
				<span className="product-home__bottom-title">{name}</span>
				<span className="product-home__bottom-price">{price} zł</span>
			</div>
		</div>
	);
};

export default ProductHome;
