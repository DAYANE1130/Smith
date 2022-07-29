import { Pool } from 'mysql2/promise';
import Products from '../interfaces/productInterface';

export default class OrdersModels {
  public connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }
  
  public async getAll(): Promise<Orders[]> {
    const query = 'SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) as products'
   + ' FROM Trybesmith.Orders as orders'
    + 'INNER JOIN Trybesmith.Products as products'
    + 'ON orders.id = products.orderId'
    + 'GROUP BY orders.id ORDER BY orders.userId;';
    const [products] = await this.connection.execute(query);
    return products as Orders[];
  }
}