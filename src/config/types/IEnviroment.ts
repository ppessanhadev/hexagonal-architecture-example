export type TEnviroment = {
  port: number;
  baseAPI: string;
  userURL: string;
};

export interface IEnviroment {
  readonly gets: TEnviroment;
}
