import { Pool, ResultSetHeader } from 'mysql2/promise';
import Iusers from '../interfaces/usersInterface';

export default class ProductsModels {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: Iusers):Promise<Iusers> {
    const { username, classe, level, password } = user;
    const query = 'INSERT INTO Trybesmith.Users(username, classe, level, password)VALUES(?,?,?,?);';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [
      username,
      classe,
      level,
      password,
    ]); // retorna resultSETHeader
    return { id: insertId, username, classe, level, password };
  }
}
