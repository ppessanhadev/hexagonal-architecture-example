jest.mock('axios');

import { tokens } from '@di/tokens';
import { container } from '@di/container';
import { IEnviroment } from '@config/types/IEnviroment';
import { UserProvider } from '@shared/providers/user/UserProvider';
import { IHTTPProvider } from '@shared/providers/http/types/IHTTPProvider';

const axios = container.resolve(tokens.HTTPProvider) as IHTTPProvider;

class UserProviderTest extends UserProvider {
  constructor() {
    const mockEnv = {
      gets: {
        userURL: 'mockedURL',
      },
    } as IEnviroment;
    super(mockEnv, axios);
  }
}

describe('UserProvider', () => {
  describe('constructor()', () => {
    it('should init http with url from enviroment', () => {
      const spy = jest.spyOn(axios, 'init');
      new UserProviderTest();

      expect(spy).toHaveBeenCalledWith('mockedURL');
    });
  });

  describe('listUsers()', () => {
    it('should fetch the correct endpoint', async () => {
      const stub = {
        count: 1118,
        next: 'https://pokeapi.co/api/v2/pokemon/?offset=5&limit=20',
        previous: null,
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
          {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
          },
          {
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon/3/',
          },
          {
            name: 'charmander',
            url: 'https://pokeapi.co/api/v2/pokemon/4/',
          },
          {
            name: 'charmeleon',
            url: 'https://pokeapi.co/api/v2/pokemon/5/',
          },
        ],
      };
      const spy = jest.spyOn(axios, 'get').mockResolvedValueOnce(stub);
      const userProvider = new UserProviderTest();
      const result = await userProvider.listUsers();

      expect(result).toEqual(stub);
      expect(spy).toHaveBeenCalledWith('/pokemon/?limit=20');
    });
  });
});
