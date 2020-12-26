import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [ true, 'Name of the Product is required!' ]
		},
		price: {
			type: Number,
			required: [ true, 'Price of the Product is required!' ]
		},
		imageUrls: [ String ],
		category: {
			type: String,
			default: '/kategorie/nowosci'
		},
		sizes: [ String ],
		countInStock: {
			type: Number,
			required: [ true, 'Quantity of the Product is required!' ]
		}
	},
	{
		timestamps: true
	}
);

const Product = mongoose.model('Product', productSchema);

export default Product;
