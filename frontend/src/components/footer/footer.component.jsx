import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import './footer.styles.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container center">
				<div className="footer__col footer__col-1">
					<span>Kategorie</span>
					<Link to="/">Leginsy</Link>
					<Link to="/">Topy</Link>
					<Link to="/">Rashguardy</Link>
					<Link to="/">Spodenki</Link>
					<Link to="/">Dresy</Link>
					<Link to="/">Plecaki</Link>
					<Link to="/">Kolekcja 2021</Link>
				</div>
				<div className="footer__col footer__col-2">
					<span>Obsługa klienta</span>
					<Link to="/">Tabela wymiarów</Link>
					<Link to="/">Dostawa - formy i koszty</Link>
					<Link to="/">Regulamin</Link>
					<Link to="/">Dane kontaktowe</Link>
					<Link to="/">Zwroty</Link>
					<Link to="/">Reklamacje</Link>
					<Link to="/">Polityka prywatności</Link>
				</div>
				<div className="footer__col footer__col-3">
					<span>Polub nas</span>
					<div className="footer__icons">
						<span className="icon">
							<FaFacebookF />
						</span>
						<span className="icon">
							<FaInstagram />
						</span>
					</div>
					<span className="copyright">COPYRIGHT © 2020 GYM GLAMOUR.</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
