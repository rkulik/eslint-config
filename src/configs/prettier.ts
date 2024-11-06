import prettierConfig from 'eslint-config-prettier';

import { prettierPlugin } from '../plugins';
import type { Config } from '../types';

export const prettierConfigs: Config[] = [
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
