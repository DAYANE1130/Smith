import { Request, Response } from 'express';
import ProductsServices from '../services/productsServices';

export default class ProductsControllers {
  public service : ProductsServices;

  constructor() {
    this.service = new ProductsServices();
  }
  
  public getAll = async (req: Request, res: Response) => {
    const products = await this.service.getAll();
    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.service.create(product);
    res.status(201).json(newProduct);
  };
}