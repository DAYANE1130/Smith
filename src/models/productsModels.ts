import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IcreateProduct, Iproducts } from '../interfaces/productInterface';

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

  public async create(product:IcreateProduct):Promise<IcreateProduct> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products(name, amount) VALUES(?,?);';
    const newProduct = await this.connection.execute<ResultSetHeader>(query, [name, amount]); // retorna resultSETHeader
    const [dataInsertId] = newProduct; // dentro dele tem o insertId
    const { insertId } = dataInsertId;
    return { id: insertId, ...product }; // cria uma nova chave , add uma nova chave e valor em um obj
  }
}