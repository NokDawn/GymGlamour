import products from '../../products';

import ProductHome from '../product-home/product-home.component';

import './product-directory.styles.scss';

const ProductDirectory = () => {
	return (
		<div className="product-directory center">
			{products.map(({ id, ...otherProductProps }) => <ProductHome key={id} id={id} {...otherProductProps} />)}
		</div>
	);
};

export default ProductDirectory;
