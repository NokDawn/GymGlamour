import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/DB.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';

const app = express();

connectDB();

app.get('/', (req, res) => {
	res.send('Alles gut!');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on Port ${PORT} in ${process.env.NODE_ENV} mode`));
