import { Enviroment } from '@config/Enviroment';
import 'dotenv/config';

const enviroment = new Enviroment();

describe('Enviroment', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('should return enviroment values', () => {
    process.env.PORT = '4002';
    process.env.BASE_API = '/path/test';

    expect(enviroment.gets.port).toBe(4002);
    expect(enviroment.gets.baseAPI).toBe('/path/test');
  });

  it('should return default enviroment values', () => {
    expect(enviroment.gets.port).toBe(8004);
    expect(enviroment.gets.baseAPI).toBe('/api/v1');
  });

  it('should match with snapshot', () => {
    expect(enviroment.gets).toMatchSnapshot();
  });
});
