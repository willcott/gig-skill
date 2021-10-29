const secondsToMillis = (n) => 1000 * n;

module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/__tests__', '<rootDir>/integration-tests', '<rootDir>/__mocks__'],
  testMatch: ['**/*.test.js', '**/*.test.ts'],
  testPathIgnorePatterns: ['node_modules/', 'dist/', '__utils__/', 'test/'],
  collectCoverage: true,
  coverageDirectory: 'coverage/',
  collectCoverageFrom: ['skill/**/*.js', 'skill/**/*.ts', '!jestTest/**'],
  coverageReporters: ['text', 'json-summary'],
  setupFilesAfterEnv: ['@bbc/alexa-jest-matchers'],
  testTimeout: secondsToMillis(10),
  transformIgnorePatterns: [],
};
