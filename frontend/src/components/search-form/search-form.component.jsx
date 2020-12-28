import CustomButton from '../custom-button/custom-button.component';
import SearchProduct from '../search-product/search-produkt.component';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import './search-form.styles.scss';

const SearchForm = ({ closeSearch, showSearch }) => {
	// const [ searchProducts, setSearchProducts ] = useState([]);
	const [ searchInput, setSearchInput ] = useState('');

	const productList = useSelector((state) => state.productsList);
	const { products } = productList;

	// setSearchProducts(products);

	return (
		<div className="search-form" style={{ transform: `translateY(${showSearch ? '0' : '-600px'})` }}>
			<div className="search-form__container">
				<span className="search-form-title">Szukaj</span>
				<div className="search-form__labels">
					<input
						type="search"
						placeholder="Szukaj"
						onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
					/>
					<CustomButton green>Szukaj</CustomButton>
				</div>
				{searchInput ? (
					<div className="search-form__products">
						{products
							.filter((pro) => pro.name.toLowerCase().includes(searchInput))
							.map(({ id, ...otherProductProps }) => (
								<SearchProduct key={id} closeSearch={closeSearch} {...otherProductProps} />
							))}
					</div>
				) : null}
			</div>
			<span className="search-form__close" onClick={() => closeSearch(false)}>
				&#10005;
			</span>
		</div>
	);
};

export default SearchForm;
