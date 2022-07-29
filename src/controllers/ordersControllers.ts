import { Request, Response } from 'express';
import OrdersServices from '../services/ordersServices';

export default class ProductsControllers {
  public service : OrdersServices;

  constructor() {
    this.service = new OrdersServices();
  }
  
  public getAll = async (req: Request, res: Response) => {
    const products = await this.service.getAll();
    res.status(200).json(products);
  };
}