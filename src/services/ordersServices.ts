import Iorders from '../interfaces/ordersInterface';
import connection from '../models/connection';
import OrdersModels from '../models/ordersModels'; 

export default class OrderServices {
  public models: OrdersModels;

  constructor() {
    this.models = new OrdersModels(connection);
  }

  public async getAll(): Promise<Iorders[]> {
    const products = await this.models.getAll();
    return products;
  }
}