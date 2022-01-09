type User = {
  name: string;
  url: string;
};

export interface IUser {
  count: number;
  next: string;
  previous: string | null;
  result: User[];
}
