import { IUser } from '@shared/providers/user/types/IUser';

export interface IUserProvider {
  listUsers: () => Promise<IUser>;
}
