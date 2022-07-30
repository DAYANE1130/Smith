import { Pool } from 'mysql2/promise';
import Iorders from '../interfaces/ordersInterface';

export default class OrdersModels {
  public connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Iorders[]> {
    const query = 'SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) as productsIds'
    + ' FROM Trybesmith.Orders as orders'
    + ' INNER JOIN Trybesmith.Products as products'
    + ' ON orders.id = products.orderId'
    + ' GROUP BY orders.id ORDER BY orders.userId'; // dica Antonio Carlos usar orderby do userId
    const [rows] = await this.connection.execute(query);
    return rows as Iorders[];
  }
}