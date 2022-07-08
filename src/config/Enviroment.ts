import { injectable } from 'tsyringe';
import 'dotenv/config';

@injectable()
export class Enviroment {
  get gets() {
    return {
      port: Number(process.env.PORT) || 8004,
      baseAPI: process.env.BASE_API || '/api/v1',
      userURL: process.env.USER_URL || 'https://pokeapi.co/api/v2',
    };
  }
}
