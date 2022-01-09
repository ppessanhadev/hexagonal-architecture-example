import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { IHTTPProvider } from '@shared/providers/http/types/IHTTPProvider';
import { injectable } from 'tsyringe';

@injectable()
export class AxiosConfig implements IHTTPProvider {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({ timeout: 15000, responseType: 'json' });
  }

  init(baseURL: string, headers = {}, timeout = 15000) {
    this.http = axios.create({
      baseURL,
      timeout,
      headers,
      responseType: 'json',
    });
  }

  protected handleError<T>(error: AxiosError<T>, hasError?: boolean): T {
    if (error.isAxiosError && !hasError) {
      throw error.response?.data || new Error(error.message);
    } else {
      throw error;
    }
  }

  async get<T>(path: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.http.get<T>(path, options);
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return this.handleError<T>(err);
    }
  }

  async post<T>(path: string, options?: AxiosRequestConfig, hasError?: boolean): Promise<T> {
    try {
      const response = await this.http.post(path, options?.data, options);
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return this.handleError<T>(err, hasError);
    }
  }

  async put<T>(path: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.http.put(path, options?.data, options);
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return this.handleError<T>(err);
    }
  }

  async patch<T>(path: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.http.patch(path, options?.data, options);
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return this.handleError<T>(err);
    }
  }

  async delete<T>(path: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.http.delete(path, options);
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return this.handleError<T>(err);
    }
  }
}
