import { IHTTPOptions } from '@shared/providers/http/types/IHTTPOptions';

export interface IHTTPProvider {
  init(baseURL: string, headers?: unknown, timeout?: number): void;

  get<T>(path: string, options?: IHTTPOptions): Promise<T>;
  post<T>(path: string, options?: IHTTPOptions, hasError?: boolean): Promise<T>;
  put<T>(path: string, options?: IHTTPOptions): Promise<T>;
  patch<T>(path: string, options?: IHTTPOptions): Promise<T>;
  delete<T>(path: string, options?: IHTTPOptions): Promise<T>;
}
