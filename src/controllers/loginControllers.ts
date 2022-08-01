import { Request, Response } from 'express';
import LoginServices from '../services/loginServices';

export default class LoginControllers {
  public service:LoginServices;

  constructor() {
    this.service = new LoginServices();
  }

  public create = async (req:Request, res:Response) => {
    const { username, password } = req.body;
    const user = await this.service.create(username, password);
    if (user === false || user === true) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    return res.status(200).json(user);
  };
}