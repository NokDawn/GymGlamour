import Logo from '../logo/logo.component';
import CustomButton from '../custom-button/custom-button.component';
import CartModal from '../cart-modal/cart-modal.component';

import { useDispatch } from 'react-redux';
import { showCart } from '../../redux/cart/cart.actions';

import { FaShoppingBasket, FaSearch } from 'react-icons/fa';

import './header.styles.scss';

const Header = () => {
	const dispatch = useDispatch();

	const cartHandler = () => {
		dispatch(showCart());
	};

	return (
		<header className="header">
			<div className="header__container center">
				<Logo />
				<div className="header__nav">
					<CustomButton>Zaloguj się</CustomButton>
					<div className="header__icons">
						<FaSearch className="search" />
						<div className="header__icons-basket" onClick={cartHandler}>
							<FaShoppingBasket />
							<span className="header__icons-count">0</span>
						</div>
					</div>
				</div>
			</div>
			<CartModal />
		</header>
	);
};

export default Header;
