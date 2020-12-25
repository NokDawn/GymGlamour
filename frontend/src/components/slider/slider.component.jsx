import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

import Photo1 from '../../assets/banner1.png';
import Photo2 from '../../assets/banner2.png';

import 'react-slideshow-image/dist/styles.css';
import './slider.styles.scss';

const Slider = () => {
	const properties = {
		easing: 'ease',
		pauseOnHover: false,
		prevArrow: (
			<div style={{ width: '30px', marginRight: '-30px', backgroundColor: 'transparent', cursor: 'pointer' }}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#C3B677">
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: '30px', marginLeft: '-30px', backgroundColor: 'transparent', cursor: 'pointer' }}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#C3B677">
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		)
	};

	return (
		<div className="slider">
			<Slide {...properties}>
				<div className="slider__each">
					<Link to="/">
						<div style={{ backgroundImage: `url(${Photo1})` }} />
					</Link>
				</div>
				<div className="slider__each">
					<Link to="/">
						<div style={{ backgroundImage: `url(${Photo2})` }} />
					</Link>
				</div>
			</Slide>
		</div>
	);
};

export default Slider;
