import ProductsModels from '../models/productsModels'; 
import { Iproducts, IcreateProduct } from '../interfaces/productInterface';
import connection from '../models/connection';

export default class ProductsServices {
  public models: ProductsModels; 
  
  constructor() {
    this.models = new ProductsModels(connection);
  }

  public async getAll(): Promise<Iproducts[]> {
    const products = await this.models.getAll();
    console.log(products);
    return products;
  }

  public async create(product:IcreateProduct): Promise<IcreateProduct> {
    const newProduct = await this.models.create(product);
    return newProduct;
  }
}