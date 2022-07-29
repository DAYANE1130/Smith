import { Pool } from 'mysql2/promise';
import { Iproducts } from '../interfaces/productInterface';

export default class ProductsModels {
  public connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }
  
  public async getAll(): Promise<Iproducts[]> {
    const query = 'SELECT * FROM Trybesmith.Products;';
    const [products] = await this.connection.execute(query);
    return products as Iproducts[];
  }

  // public async create(product:IcreateProduct)
}