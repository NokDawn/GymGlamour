import './custom-button.styles.scss';

const CustomButton = ({ children, green, ...otherButtonProps }) => {
	return (
		<button className={`${green ? 'green' : ''} custom-button`} {...otherButtonProps}>
			{children}
		</button>
	);
};

export default CustomButton;
