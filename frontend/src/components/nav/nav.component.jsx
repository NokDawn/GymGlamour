import { Link } from 'react-router-dom';

import './nav.styles.scss';

const Nav = () => {
	return (
		<nav className="nav">
			<ul className="nav__list center">
				<li className="nav__item">
					<Link to="/">Leginsy</Link>
				</li>
				<li className="nav__item">
					<Link to="/">Topy</Link>
				</li>
				<li className="nav__item">
					<Link to="/">Rashguardy</Link>
				</li>
				<li className="nav__item">
					<Link to="/">Spodenki</Link>
				</li>
				<li className="nav__item">
					<Link to="/">Dresy</Link>
				</li>
				<li className="nav__item">
					<Link to="/">Plecaki</Link>
				</li>
				<li className="nav__item">
					<Link to="/">Kolekcja 2021</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
