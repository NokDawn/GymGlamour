import { useSelector } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import './cart-modal.styles.scss';

const CartModal = () => {
	const cart = useSelector((state) => state.cart);
	const { cartHidden } = cart;

	return (
		<div className="cart-modal" style={{ transform: `translateX(${cartHidden ? '320px' : '0'})` }}>
			<div className="cart-modal__container">
				<div className="cart-modal__top">
					<span className="cart-modal__top-title">Koszyk</span>
					<span className="cart-modal__top-close">&#10005;</span>
				</div>
				<div className="cart-modal__products">produkty</div>
				<div className="cart-modal__total">
					<span className="cart-modal__total-title">Zakupy razem:</span>
					<span className="cart-modal__total-price">159.99 zł</span>
				</div>
				<div className="cart-modal__bottom">
					<span className="cart-modal__bottom-continue">Kontynnuj zakupy</span>
					<CustomButton green>Zamawiam &#8594;</CustomButton>
				</div>
			</div>
		</div>
	);
};

export default CartModal;
