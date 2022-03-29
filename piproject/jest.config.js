/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  verbose: true,
  testMatch: ['<rootDir>/tests/*.{js,ts}'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      isolatedModules: false,
    }
  }
};
