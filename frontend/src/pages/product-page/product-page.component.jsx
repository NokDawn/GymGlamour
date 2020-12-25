import { Link } from 'react-router-dom';
import { FaBoxOpen } from 'react-icons/fa';

import CustomButton from '../../components/custom-button/custom-button.component';

import products from '../../products';

import './product-page.styles.scss';

const ProductPage = ({ match }) => {
	const product = products.find((product) => product.id === Number(match.params.id));

	console.log(product);

	return (
		<div className="product-page">
			<div className="product-page__container center">
				<div className="product-page__col product-page__col-1">
					<img src={product.imageUrl} alt="male zdjecie modelki" width="54px" height="80px" />
					<img src={product.imageUrl} alt="male zdjecie modelki" width="54px" height="80px" />
					<img src={product.imageUrl} alt="male zdjecie modelki" width="54px" height="80px" />
					<img src={product.imageUrl} alt="male zdjecie modelki" width="54px" height="80px" />
				</div>
				<div className="image-container product-page__col-2">
					<img src={product.imageUrl} alt="zdjecie modelki" />
				</div>
				<div className="product-page__col product-page__col-3">
					<div className="product-page__breadcrumbs">
						<Link to="/">GYM GLAMOUR</Link> /{' '}
						<Link to={`/kategoria/${match.params.category}`}>{match.params.category}</Link> /{' '}
						<span>{product.name}</span>
					</div>
					<h2 className="heading-secondary">{product.name}</h2>
					<span className="product-page__price">{product.price} zł</span>
					<span className="product-page__size">Rozmiar</span>
					<div className="product-page__sizes">
						<select name="sizes">
							{product.sizes.map((size) => <option value={size}>{size}</option>)}
						</select>
						<CustomButton green>Do koszyka &#8594;</CustomButton>
					</div>
					<div className="product-page__delivery">
						<FaBoxOpen className="product-page__delivery-icon" />
						<span className="product-page__delivery-title">CZAS DOSTAWY: 24H</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
