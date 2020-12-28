import Logo from '../../components/logo/logo.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { Link } from 'react-router-dom';

import './login-page.styles.scss';

const LoginPage = ({ history }) => {
	return (
		<div className="login-page">
			<div className="login-page__container center">
				<div className="login-page__header">
					<CustomButton onClick={() => history.push('/')}>&#8592; Wróć do sklepu</CustomButton>
					<Logo />
				</div>
				<div className="login-page__form">
					<div className="login-page__form-container">
						<span className="login-page__form-title">Zaloguj się</span>
						<span className="login-page__form-subtitle">Podaj hasło do konta, aby się zalogować</span>
						<input type="email" placeholder="E-Mail" />
						<input type="password" placeholder="Hasło" />
						<CustomButton blue>Zaloguj Się</CustomButton>
						<div className="login-page__form-links">
							<Link to="/konto/odzyskaj">Odzyskaj hasło</Link>
							<Link to="/konto/rejestracja">Nie mam konta</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
