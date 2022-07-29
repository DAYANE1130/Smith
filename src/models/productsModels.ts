import { Pool } from 'mysql2/promise';
import Products from '../interfaces/productInterface';

export default class ProductsModels {
  public connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }
  
  public async getAll(): Promise<Products[]> {
    const query = 'SELECT * FROM Trybesmith.Products;';
    const [products] = await this.connection.execute(query);
    return products as Products[];
  }
}