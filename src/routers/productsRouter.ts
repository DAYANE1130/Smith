import { Router } from 'express';
import ProductsControllers from '../controllers/productsControllers';

const productsRouter = Router();
const productsControllers = new ProductsControllers();

productsRouter.get('/', productsControllers.getAll);
productsRouter.post('/', productsControllers.create);

export default productsRouter; 