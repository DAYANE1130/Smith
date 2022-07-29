import { Router } from 'express';
import OrdersControllers from '../controllers/ordersControllers';

const ordersRouter = Router();
const ordersControllers = new OrdersControllers();

ordersRouter.get('/', ordersControllers.getAll);

export default ordersRouter; 