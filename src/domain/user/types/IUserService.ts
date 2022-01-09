import { IUser } from '@shared/providers/user/types/IUser';

export interface IUserService {
  getUsers: () => Promise<IUser>;
}
