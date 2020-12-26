import express from 'express';

import products from '../data/products.js';

const router = express.Router();

router.get('/', (req, res) => {
	res.json(products);
});

router.get('/:id', (req, res) => {
	// console.log(req.params);
	const product = products.find((p) => p.id === Number(req.params.id));

	if (product) {
		res.status(200).json({
			status: 'success',
			data: product
		});
	} else {
		res.status(404).json({
			status: 'fail',
			message: 'The product is not found!'
		});
	}
});

export default router;
