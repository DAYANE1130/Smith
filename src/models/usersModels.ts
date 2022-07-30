import { Pool, ResultSetHeader } from 'mysql2/promise';
import jwt, { SignOptions } from 'jsonwebtoken';
import Iusers from '../interfaces/usersInterface';

export default class ProductsModels {
  public connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }
  
  public async create(user:Iusers) {
    const { username, classe, level, password } = user;
    const query = 'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES(?,?);';
    await this.connection.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    ); // retorna resultSETHeader
   
    const options: SignOptions = {
      algorithm: 'HS256',
      expiresIn: '30d',
    };
    const jwtService = {
      createToken: (usernam:string, id:number) => {
        const token = jwt.sign({ usernam, id }, 'my-secret', options);
        return token;
      },
    };
    return jwtService;
  }
} 
