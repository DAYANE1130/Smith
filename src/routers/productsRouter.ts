import { Router } from 'express';
import ProductsControllers from '../controllers/productsControllers';

const productsRouter = Router();
const productsControllers = new ProductsControllers();

productsRouter.get('/', productsControllers.getAll);

export default productsRouter; 