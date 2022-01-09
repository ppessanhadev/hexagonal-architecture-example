import { AxiosError } from 'axios';
import { inject, injectable } from 'tsyringe';
import { tokens } from '@di/tokens';
import { IEnviroment } from '@config/types/IEnviroment';
import { IUser } from '@shared/providers/user/types/IUser';
import { IUserProvider } from '@shared/providers/user/types/IUserProvider';
import { IHTTPProvider } from '@shared/providers/http/types/IHTTPProvider';

@injectable()
export class UserProvider implements IUserProvider {
  constructor(
    @inject(tokens.Enviroment)
    private env: IEnviroment,

    @inject(tokens.HTTPProvider)
    private http: IHTTPProvider
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
