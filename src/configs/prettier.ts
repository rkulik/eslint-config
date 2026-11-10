import eslintPrettierConfig from 'eslint-config-prettier';

import { eslintPrettierPlugin } from '../plugins';
import type { Config } from '../types';

export const prettier: Config[] = [
  {
    plugins: {
      prettier: eslintPrettierPlugin,
    },
    rules: {
      ...eslintPrettierConfig.rules,
      curly: ['error', 'all'],
      'prettier/prettier': 'error',
    },
  },
];
