import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
