import { Router } from 'express';
import UsersControllers from '../controllers/ordersControllers';

const ordersRouter = Router();
const usersControllers = new UsersControllers();

ordersRouter.get('/', usersControllers);

export default ordersRouter; 