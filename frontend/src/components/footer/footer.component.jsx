import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import './footer.styles.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container center">
				<div className="footer__col footer__col-1">
					<span>Kategorie</span>
					<Link to="/kategoria/leginsy">Leginsy</Link>
					<Link to="/kategoria/topy">Topy</Link>
					<Link to="/kategoria/rashguardy">Rashguardy</Link>
					<Link to="/kategoria/spodenki">Spodenki</Link>
					<Link to="/kategoria/dresy">Dresy</Link>
					<Link to="/kategoria/plecaki">Plecaki</Link>
					<Link to="/kategoria/kolekcja2021">Kolekcja 2021</Link>
				</div>
				<div className="footer__col footer__col-2">
					<span>Obsługa klienta</span>
					<Link to="/strona/tabele-rozmiarow">Tabela wymiarów</Link>
					<Link to="/strona/dostawa">Dostawa - formy i koszty</Link>
					<Link to="/strona/regulamin">Regulamin</Link>
					<Link to="/strona/kontakt">Dane kontaktowe</Link>
					<Link to="/strona/zwroty-wymiany">Zwroty</Link>
					<Link to="/strona/reklamacje">Reklamacje</Link>
					<Link to="/strona/polityka_prywatnosci">Polityka prywatności</Link>
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
