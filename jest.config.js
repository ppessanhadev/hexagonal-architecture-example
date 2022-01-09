module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src',
  testMatch: ['<rootDir>/**/**/*.test.ts'],
  automock: false,
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/../jest.setup.ts'],
  moduleNameMapper: {
    '^@config/(.*)$': '<rootDir>/config/$1',
    '^@di/(.*)$': '<rootDir>/di/$1',
    '^@presentation/(.*)$': '<rootDir>/presentation/$1',
    '^@domain/(.*)$': '<rootDir>/domain/$1',
    '^@shared/(.*)$': '<rootDir>/shared/$1',
  },
};
