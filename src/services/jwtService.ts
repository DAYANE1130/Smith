import jwt, { SignOptions } from 'jsonwebtoken';

const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '30d',
};
const jwtService = {
  createToken: (username:string, id:number) => {
    const token = jwt.sign({ username, id }, 'my-secret', options);
    return token;
  },
};
export default jwtService;
