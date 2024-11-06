import { configs } from './dist/index.js';

// eslint-disable-next-line import/no-default-export
export default [
  {
    ignores: ['**/dist'],
  },
  ...configs.destructuring,
  ...configs.eslint,
  ...configs.import,
  ...configs.preferArrow,
  ...configs.prettier,
  ...configs.typescript,
];
