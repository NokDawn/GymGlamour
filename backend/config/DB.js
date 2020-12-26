import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
	try {
		const mongoUri = process.env.MONGO_URI.replace('<password>', process.env.MONGO_PASSWORD);

		const conn = await mongoose.connect(mongoUri, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`.green.underline);
	} catch (error) {
		console.error(`Error: ${error.message}`.red.inverse);
		process.exit(1);
	}
};

export default connectDB;
