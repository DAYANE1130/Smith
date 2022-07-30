import { Router } from 'express';
import UsersControllers from '../controllers/usersControllers';

const ordersRouter = Router();
const usersControllers = new UsersControllers();

ordersRouter.post('/', usersControllers.create);

export default ordersRouter; 