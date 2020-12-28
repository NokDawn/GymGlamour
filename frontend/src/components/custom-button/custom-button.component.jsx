import './custom-button.styles.scss';

const CustomButton = ({ children, green, blue, ...otherButtonProps }) => {
	return (
		<button className={`${green ? 'green' : ''} ${blue ? 'blue' : ''} custom-button`} {...otherButtonProps}>
			{children}
		</button>
	);
};

export default CustomButton;
