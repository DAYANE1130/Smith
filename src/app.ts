import express from 'express';
import ordersRouter from './routers/ordersRouter';
import productsRouter from './routers/productsRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

export default app;
