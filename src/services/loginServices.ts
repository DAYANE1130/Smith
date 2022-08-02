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