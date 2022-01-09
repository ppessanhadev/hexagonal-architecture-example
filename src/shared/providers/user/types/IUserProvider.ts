export interface IUserProvider {
  listUsers: () => Promise<any>;
}
