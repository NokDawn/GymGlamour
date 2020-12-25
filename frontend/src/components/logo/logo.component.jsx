import LogoImage from '../../assets/logo.png';

import './logo.styles.scss';

const Logo = () => {
	return (
		<div className="logo-container">
			<img src={LogoImage} alt="logo strony" />
		</div>
	);
};

export default Logo;
