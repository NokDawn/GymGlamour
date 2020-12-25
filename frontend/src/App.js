import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Nav from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import ProductPage from './pages/product-page/product-page.component';

import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Nav />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/kategoria/:category/:id" component={ProductPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
