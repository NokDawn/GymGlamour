import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showCart } from './redux/cart/cart.actions';

import Header from './components/header/header.component';
import Nav from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import ProductPage from './pages/product-page/product-page.component';
import LoginPage from './pages/login-page/login-page.component';
import SizesPage from './pages/sizes-page/sizes-page.component';

import './App.css';

function App() {
	// const dispatch = useDispatch();
	// const cart = useSelector((state) => state.cart);
	// const { cartHidden } = cart;

	// const hideModal = (e) => {
	// 	if (cartHidden === false && window.innerWidth - e.clientX >= 340) {
	// 		dispatch(showCart());
	// 	}
	// };

	return (
		<div>
			<Header />
			<Nav />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/kategoria/:category/:id" component={ProductPage} />
				<Route exact path="/konto/logowanie" component={LoginPage} />
				<Route exact path="/strona/tabele-rozmiarow" component={SizesPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
