import { Request, Response } from 'express';
import UserServices from '../services/usersServices';

export default class UsersControllers {
  public service:UserServices;

  constructor() {
    this.service = new UserServices();
  }

  public create = async (req:Request, res:Response) => {
    const payloadUser = req.body;
    const user = await this.service.create(payloadUser);
    return res.status(201).json(user);
  };
}