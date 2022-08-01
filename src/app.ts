import express from 'express';
import ordersRouter from './routers/ordersRouter';
import productsRouter from './routers/productsRouter';
import usersRouter from './routers/usersRouter';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

export default app;
