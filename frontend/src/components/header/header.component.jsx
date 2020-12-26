import Logo from '../logo/logo.component';
import CustomButton from '../custom-button/custom-button.component';
import CartModal from '../cart-modal/cart-modal.component';

import { FaShoppingBasket, FaSearch } from 'react-icons/fa';

import './header.styles.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header__container center">
				<Logo />
				<div className="header__nav">
					<CustomButton>Zaloguj się</CustomButton>
					<div className="header__icons">
						<FaSearch className="search" />
						<div className="header__icons-basket">
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
