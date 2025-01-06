import eslintPrettierConfig from 'eslint-config-prettier';

import { eslintPrettierPlugin } from '../plugins';
import type { Config } from '../types';

export const prettier: Config[] = [
  eslintPrettierConfig,
  {
    plugins: {
      prettier: eslintPrettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
