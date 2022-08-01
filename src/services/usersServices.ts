import UsersModels from '../models/usersModels'; 
import { Iusers } from '../interfaces/usersInterface';
import connection from '../models/connection';
import jwtService from './jwtService';

export default class UsersServices {
  public models: UsersModels; 
  
  constructor() {
    this.models = new UsersModels(connection);
  }

  public async create(user:Iusers):Promise<{ token:string }> {
    const { username } = user;
    const newUser = await this.models.create(user);
    const token = jwtService.createToken(username, newUser.id);
    return { token };
  }
}