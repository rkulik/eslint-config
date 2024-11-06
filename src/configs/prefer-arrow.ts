import { preferArrowPlugin } from '../plugins';
import type { Config } from '../types';

export const preferArrowConfigs: Config[] = [
  {
    plugins: {
      'prefer-arrow': preferArrowPlugin,
    },
    rules: {
      'prefer-arrow/prefer-arrow-functions': 'error',
    },
  },
];
