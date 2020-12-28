import { useSelector, useDispatch } from 'react-redux';
import { showCart } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-modal.styles.scss';

const CartModal = () => {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartHidden, cartItems } = cart;

	return (
		<div className="cart-modal" style={{ transform: `translateX(${cartHidden ? '320px' : '0'})` }}>
			<div className="cart-modal__container">
				<div className="cart-modal__top">
					<span className="cart-modal__top-title">Koszyk</span>
					<span className="cart-modal__top-close" onClick={() => dispatch(showCart())}>
						&#10005;
					</span>
				</div>
				<div className="cart-modal__products">
					{cartItems.length > 0 ? (
						cartItems.map(({ id, ...otherCartProps }) => (
							<CartItem key={`${id}-${otherCartProps.size}`} id={id} {...otherCartProps} />
						))
					) : (
						<p className="cart-modal__products-message">Brak Produktów w Koszyku!</p>
					)}
				</div>
				<div className="cart-modal__total">
					<span className="cart-modal__total-title">Zakupy razem:</span>
					<span className="cart-modal__total-price">
						{cartItems.reduce((acc, curValue) => acc + curValue.qty * curValue.price, 0).toFixed(2)} zł
					</span>
				</div>
				<div className="cart-modal__bottom">
					<span className="cart-modal__bottom-continue" onClick={() => dispatch(showCart())}>
						Kontynnuj zakupy
					</span>
					<CustomButton green>Zamawiam &#8594;</CustomButton>
				</div>
			</div>
		</div>
	);
};

export default CartModal;
