import { AxiosError } from 'axios';
import { inject, injectable } from 'tsyringe';
import { tokens } from '@di/tokens';
import { Enviroment } from '@config/Enviroment';
import { IUser } from '@shared/providers/user/types/IUser';
import { AxiosConfig } from '@shared/providers/http/AxiosConfig';

@injectable()
export class UserProvider  {
  constructor(
    @inject(tokens.Enviroment)
    private env: Enviroment,

    @inject(tokens.HTTPProvider)
    private http: AxiosConfig
  ) {
    this.http.init(this.env.gets.userURL);
  }

  async listUsers(): Promise<IUser> {
    try {
      const response = await this.http.get('/pokemon/?limit=20');
      return response as IUser;
    } catch (e) {
      const err = e as AxiosError;
      throw new Error(err.message);
    }
  }
}
