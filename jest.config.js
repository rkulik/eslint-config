/** @type {import('ts-jest').JestConfigWithTsJest} **/

// eslint-disable-next-line import-x/no-default-export
export default {
  extensionsToTreatAsEsm: ['.ts'],
  roots: ['<rootDir>/tests'],
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', { useESM: true }],
  },
};
