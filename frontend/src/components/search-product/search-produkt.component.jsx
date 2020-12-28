import { withRouter } from 'react-router-dom';

import './search-produkt.styles.scss';

const SearchProduct = ({ imageUrls, name, price, slug, category, history, closeSearch }) => {
	return (
		<div
			className="search-product"
			onClick={() => {
				history.push(`${category}/${slug}`);
				closeSearch(false);
			}}
		>
			<img src={imageUrls[0]} alt="małe zdjęcie produktu" width="23px" height="35px" />
			<span className="search-product__name">{name}</span>
			<span className="search-product__price">{price} zł</span>
		</div>
	);
};

export default withRouter(SearchProduct);
