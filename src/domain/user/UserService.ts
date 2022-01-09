import { tokens } from '@di/tokens';
import { UserProvider } from '@shared/providers/user/UserProvider';
import { IUserService } from '@domain/user/types/IUserService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(tokens.UserProvider)
    private userProvider: UserProvider
  ) {}

  async getUsers() {
    return this.userProvider.listUsers();
  }
}
