import express from 'express';
import asyncHandler from 'express-async-handler';

import Product from '../models/productModel.js';

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});

		res.json(products);
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		console.log(req.params.id);
		const product = await Product.findOne({ slug: req.params.id });

		if (product) {
			res.status(200).json(product);
		} else {
			res.status(404).json({
				status: 'fail',
				message: 'The product is not found!'
			});
		}
	})
);

export default router;
