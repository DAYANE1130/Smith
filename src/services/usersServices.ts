import UsersModels from '../models/usersModels'; 
import Iusers from '../interfaces/usersInterface';
import connection from '../models/connection';

export default class UsersServices {
  public models: UsersModels; 
  
  constructor() {
    this.models = new UsersModels(connection);
  }

  public async create(user:Iusers) {
    const newUser = await this.models.create(user);
    return newUser;
  }
}