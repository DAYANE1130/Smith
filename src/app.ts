import express from 'express';
import productsRouter from './routers/productsRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

export default app;
