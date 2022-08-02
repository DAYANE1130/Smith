import LoginModels from '../models/loginModels'; 
import UsersModels from '../models/usersModels';
import connection from '../models/connection';
import jwtService from './jwtService';

export default class LoginServices {
  public models: LoginModels;
 
  public userModel: UsersModels;
  
  constructor() {
    this.models = new LoginModels(connection);
    this.userModel = new UsersModels(connection);
  }

  // public async create(username:string, password:string) {
  //   const newUser = await this.models.create(username, password);
  //   const getAllUser = await this.userModel.getAll();
  //   const findUsername = getAllUser.some((item) => item.username === username);
  //   const findPassword = getAllUser.some((item) => item.password === password);
  //   if (!findUsername) return false;
  //   if (!findPassword) return true;
  //   const token = jwtService.createToken(username, newUser.id);
  //   return { token };
  // }
  public async makeLogin(username:string, password:string) {
    const getUsername = await this.models.makeLogin(username, password);
    const name = getUsername.find((i) => i.username === username);
    const pass = getUsername.find((i) => i.password === password);
    if (!name) return false;
    if (!pass) return true;
    const arr = getUsername.map((i) => i.id); 
    const token = jwtService.createToken(username, arr[0]);
    return { token };
  }
}