import { Router } from 'express';
import LoginControllers from '../controllers/loginControllers';

const loginRouter = Router();
const loginControllers = new LoginControllers();

loginRouter.post('/', loginControllers.create);

export default loginRouter; 