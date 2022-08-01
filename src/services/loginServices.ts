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

  public async create(username:string, password:string) {
    const newUser = await this.models.create(username, password);
    const getAllUser = await this.userModel.getAll();
    const findUsername = getAllUser.some((item) => item.username === username);
    const findPassword = getAllUser.some((item) => item.password === password);
    if (!findUsername) return false;
    if (!findPassword) return true;
    const token = jwtService.createToken(username, newUser.id);
    return { token };
  }
}