import { config } from '@config/.';

describe('config', () => {
  it('should match snapshot', () => {
    expect(config).toMatchSnapshot();
  });
});
