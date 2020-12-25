import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.png';

import './logo.styles.scss';

const Logo = () => {
	return (
		<div className="logo-container">
			<Link to="/">
				<img src={LogoImage} alt="logo strony" />
			</Link>
		</div>
	);
};

export default Logo;
