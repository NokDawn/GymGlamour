import Logo from '../logo/logo.component';
import CustomButton from '../custom-button/custom-button.component';
import CartModal from '../cart-modal/cart-modal.component';

import { withRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../../redux/cart/cart.actions';

import { FaShoppingBasket, FaSearch } from 'react-icons/fa';

import './header.styles.scss';

const Header = ({ history }) => {
	const dispatch = useDispatch();

	const cartHandler = () => {
		dispatch(showCart());
	};

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	return (
		<header className="header">
			<div className="header__container center">
				<Logo />
				<div className="header__nav">
					<CustomButton onClick={() => history.push('/konto/logowanie')}>Zaloguj się</CustomButton>
					<div className="header__icons">
						<FaSearch className="search" />
						<div className="header__icons-basket" onClick={cartHandler}>
							<FaShoppingBasket />
							<span className="header__icons-count">
								{cartItems.length > 0 ? cartItems.reduce((acc, val) => acc + Number(val.qty), 0) : 0}
							</span>
						</div>
					</div>
				</div>
			</div>
			<CartModal />
		</header>
	);
};

export default withRouter(Header);
