import { Pool } from 'mysql2/promise';
import Ilogin from '../interfaces/loginInterface';

export default class Login {
  public connection:Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  public async makeLogin(username:string, password:string):Promise<Ilogin[]> {
    const queryUsername = 'SELECT * FROM Trybesmith.Users;';
    const [findusername] = await this.connection.execute(queryUsername, [username, password]);
    return findusername as Ilogin[];
  }
}