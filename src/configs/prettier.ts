import prettierConfig from 'eslint-config-prettier';

import { pluginPrettier } from '../plugins';
import type { Config } from '../types';

export const prettier: Config[] = [
  prettierConfig,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
