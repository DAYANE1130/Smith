import ProductsModels from '../models/productsModels'; 
import Products from '../interfaces/productInterface';
import connection from '../models/connection';

export default class ProductsServices {
  public models: ProductsModels; 
  
  constructor() {
    this.models = new ProductsModels(connection);
  }

  public async getAll(): Promise<Products[]> {
    const products = await this.models.getAll();
    return products;
  }
}