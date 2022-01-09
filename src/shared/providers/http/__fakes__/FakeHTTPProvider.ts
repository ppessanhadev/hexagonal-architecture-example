import { injectable } from 'tsyringe';
import { IHTTPProvider } from '@shared/providers/http/types/IHTTPProvider';

@injectable()
export class FakeHTTPProvider implements IHTTPProvider {
  static mocks = {
    init: jest.fn(),
    get: jest.fn().mockResolvedValue({}),
    post: jest.fn().mockResolvedValue({}),
    put: jest.fn().mockResolvedValue({}),
    patch: jest.fn().mockResolvedValue({}),
    delete: jest.fn().mockResolvedValue({}),
  };

  init() {
    FakeHTTPProvider.mocks.init(...arguments);
  }

  get() {
    return FakeHTTPProvider.mocks.get(...arguments);
  }

  post() {
    return FakeHTTPProvider.mocks.post(...arguments);
  }

  put() {
    return FakeHTTPProvider.mocks.put(...arguments);
  }

  patch() {
    return FakeHTTPProvider.mocks.patch(...arguments);
  }

  delete() {
    return FakeHTTPProvider.mocks.delete(...arguments);
  }
}
