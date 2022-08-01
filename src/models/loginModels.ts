import { Pool, ResultSetHeader } from 'mysql2/promise';
// import Ilogin from '../interfaces/loginInterface';
// import Ilogin from '../interfaces/loginInterface';
// import { IuserLogin } from '../interfaces/usersInterface';

export default class Login {
  public connection:Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  public async create(username:string, password:string) {
    // const { username, password } = login;
    const query = 'INSERT INTO Trybesmith.Users(username,password)VALUES(?,?);';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [
      username, password,
    ]); // retorna resultSETHeader

    return { id: insertId, username, password }; // cria uma 
  }
  // public async findUsername(username:string, password:string):Promise<IuserLogin> {
  //   const queryUsername = 'SELECT * FROM Trybesmith.Users WHERE username=?;';
  //   const queryPassword = 'SELECT * FROM Trybesmith.Users WHERE password=?;';
  //   const [findusername] = await this.connection.execute(queryUsername, [username]);
  //   const [findpassword] = await this.connection.execute(queryPassword, [password]);
  //   const [resultUsername] = 
  // }
}
// public async getById(id: number): Promise<InterfaceRestaurants> {
//   const query = 'SELECT * FROM TypeScriptExpress.Restaurants WHERE id=?;';
//   const [result] = await this.connection.execute(query, [id]);
//   const [restaurant] = result as InterfaceRestaurants[]; // tirando o primeiro de todo o array ? é isso?
//   return restaurant;
// }