import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import products from './data/products.js';
import Product from './models/productModel.js';
import connectDB from './config/DB.js';

dotenv.config();

connectDB();

const deleteData = async () => {
	try {
		await Product.deleteMany();

		console.log('Data has been successfully deleted'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(error.red.underline);
		process.exit(1);
	}
};

const importData = async () => {
	try {
		await Product.insertMany(products);

		console.log('Data has been successfully imported to the DB'.green.inverse);
		process.exit();
	} catch (error) {
		console.log(error.red.underline);
		process.exit(1);
	}
};

if (process.argv[2] === '-delete') {
	deleteData();
} else if (process.argv[2] === '-import') {
	importData();
}
