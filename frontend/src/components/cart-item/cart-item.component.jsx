import { useDispatch } from 'react-redux';
import { changeQty, removeFromCart } from '../../redux/cart/cart.actions';

import './cart-item.styles.scss';

const CartItem = ({ image, name, size, price, countInStock, qty, id }) => {
	const dispatch = useDispatch();

	return (
		<div className="cart-item">
			<div className="image-container">
				<img src={image} alt="zdjęcie produktu" width="40px" height="60px" />
			</div>
			<div className="cart-item__product">
				<span className="cart-item__product-name">{name}</span>
				<span className="cart-item__product-size">Rozmiar: {size}</span>
				<input
					className="cart-item__product-qty"
					type="number"
					min="1"
					max={countInStock}
					placeholder={qty}
					onChange={(e) => dispatch(changeQty(id, size, e.target.value))}
				/>
			</div>
			<div className="cart-item__info">
				<span className="cart-item__info-delete" onClick={() => dispatch(removeFromCart(`${id}${size}`))}>
					&#10005;
				</span>
				<span className="cart-item__info-price">{price} zł</span>
			</div>
		</div>
	);
};

export default CartItem;
