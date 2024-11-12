/** @type {import('ts-jest').JestConfigWithTsJest} **/

// eslint-disable-next-line import/no-default-export
export default {
  roots: ['<rootDir>/tests'],
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
