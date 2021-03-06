import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProduct, getProducts } from '../../redux/products/products.actions';
import { addToCart } from '../../redux/cart/cart.actions';
import { showCart } from '../../redux/cart/cart.actions';

import { Link } from 'react-router-dom';
import { FaBoxOpen } from 'react-icons/fa';

import CustomButton from '../../components/custom-button/custom-button.component';
import ProductHome from '../../components/product-home/product-home.component';

import './product-page.styles.scss';

const ProductPage = ({ match }) => {
	const dispatch = useDispatch();
	const [ photoId, setPhotoId ] = useState(0);
	const [ size, setSize ] = useState('XS');

	useEffect(
		() => {
			dispatch(getProduct(match.params.id));
			dispatch(getProducts());
		},
		[ dispatch, match ]
	);

	const productList = useSelector((state) => state.productsList);
	const { products, product, loading, error } = productList;

	const cart = useSelector((state) => state.cart);
	const { cartHidden } = cart;

	const productToCart = {
		id: product._id,
		image: product.imageUrls[0],
		name: product.name,
		price: product.price,
		countInStock: product.countInStock,
		size,
		qty: product.qty ? product.qty : 1
	};

	const openCart = () => {
		if (cartHidden === true) {
			dispatch(showCart());
		}
	};

	return (
		<div className="product-page">
			<div className="center">
				<div className="product-page__container">
					<div className="product-page__col product-page__col-1">
						<img
							src={product.imageUrls[0]}
							alt="male zdjecie modelki"
							width="54px"
							height="80px"
							onClick={() => setPhotoId(0)}
						/>
						<img
							src={product.imageUrls[1]}
							alt="male zdjecie modelki"
							width="54px"
							height="80px"
							onClick={() => setPhotoId(1)}
						/>
						<img
							src={product.imageUrls[2]}
							alt="male zdjecie onClick={() => photoHandler(0)}modelki"
							width="54px"
							height="80px"
							onClick={() => setPhotoId(2)}
						/>
						<img
							src={product.imageUrls[3]}
							alt="male zdjecie modelki"
							width="54px"
							height="80px"
							onClick={() => setPhotoId(3)}
						/>
					</div>
					<div className="image-container product-page__col-2">
						<img src={product.imageUrls[photoId]} alt="zdjecie modelki" width="400px" height="550px" />
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
							<select
								name="sizes"
								onClick={(e) => {
									setSize(e.target.value);
								}}
							>
								{product.sizes.map((size, idx) => (
									<option value={size} key={idx}>
										{size}
									</option>
								))}
							</select>
							<CustomButton
								green
								onClick={() => {
									dispatch(addToCart(productToCart));
									dispatch(openCart);
								}}
							>
								Do koszyka &#8594;
							</CustomButton>
						</div>
						<div className="product-page__delivery">
							<FaBoxOpen className="product-page__delivery-icon" />
							<span className="product-page__delivery-title">CZAS DOSTAWY: 24H</span>
						</div>
						<div className="product-page__info">
							<div className="product-page__info-top">
								<span className="product-page__info-top-1">Opis</span>
								<span className="product-page__info-top-1">Pranie</span>
								<span className="product-page__info-top-1">Wymiary</span>
								<span className="product-page__info-top-1">Detale</span>
							</div>
							<div className="product-page__info-bottom">
								<p className="paragraph">
									Leginsy bezszwowe w kolorze czarnym. Pierwsze takie, wyprodukowane w Polsce leginsy
									bezszwowe. Ozdobione tzw. lanymi dziurkami. Tworząc je, wykorzystaliśmy nasze
									doświadczenia, wynikające z pracy nad wszystkimi dotychczasowymi modelami. Ulepszone
									sploty podnoszące i modelujące pośladki. Jeszcze lepszy pas. Elastyczny, ale też
									trzymający brzuch i świetnie modelujący talię. Przyjemny w dotyku, miękki materiał.
									Świetnie nadaje się do ćwiczeń. Oczywiście nie prześwitują. Nasza ambasadorka na
									zdjęciu ma rozmiar S. Leginsy na długość są bardzo rozciągliwe i dopasowują się do
									wzrostu. XS może nosić zarówno kobieta o wzroście 156 cm jak i 170 cm UWAGA:
									rozmiarówka różni się od innych produktów!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="product-page__collection">
					<h4 className="heading-tertiary">Nasza najnowsza kolekcja</h4>
					<div className="product-page__collection-products">
						{products
							.filter((p, idx) => idx < 4)
							.map(({ _id, ...otherProductProps }) => (
								<ProductHome key={_id} id={_id} {...otherProductProps} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
