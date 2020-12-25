import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Nav from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Nav />
			<Switch>
				<Route path="/" component={HomePage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
