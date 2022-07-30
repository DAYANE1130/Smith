// import { Pool, ResultSetHeader } from 'mysql2/promise';
// // import jwt, { SignOptions } from 'jsonwebtoken';
// import Iusers from '../interfaces/usersInterface';
// import jwtService from '../services/jwtService';

// export default class ProductsModels {
//   public connection: Pool;

//   constructor(connection: Pool) {
//     this.connection = connection;
//   }

//   public async create(user: Iusers):Promise<{ token:string }> {
//     const { username, classe, level, password } = user;
//     const query = 'INSERT INTO Trybesmith.Users(username, classe, level, password)VALUES(?,?,?,?);';
//     const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [
//       username,
//       classe,
//       level,
//       password,
//     ]); // retorna resultSETHeader
//     // const [dataInsertId] = test; // dentro dele tem o insertId
//     // const { insertId } = dataInsertId;
//     const token = jwtService.createToken(username, insertId);

//     // const options: SignOptions = { algorithm: 'HS256', expiresIn: '30d' };
//     // const token = jwt.sign({ id: insertId, username }, 'my-secret', options);
//     return { token };
//   }
// }