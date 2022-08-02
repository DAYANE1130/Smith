import { Router } from 'express';
import LoginControllers from '../controllers/loginControllers';
import LoginValidate from '../middleware/loginValidate';

const loginRouter = Router();
const loginControllers = new LoginControllers();
const loginValidate = new LoginValidate();

loginRouter.post('/', loginValidate.validateLogin, loginControllers.create);

export default loginRouter; 