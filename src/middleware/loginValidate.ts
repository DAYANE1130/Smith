import { NextFunction, Request, Response } from 'express';

const errors = {
  usernameRequired: '"username" is required', 
  passwordRequired: '"password" is required',
};

export default class LoginValidate {
  public validateLogin = async (req:Request, res:Response, next: NextFunction) => {
    const { username, password } = req.body;
   
    if (!username) {
      return res.status(400).json({ message: errors.usernameRequired });
    }
    if (!password) {
      return res.status(400).json({ message: errors.passwordRequired });
    }
    next();
  };
}