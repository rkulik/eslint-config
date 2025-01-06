import eslintJavascriptPlugin from '@eslint/js';

import type { Config } from '../types';

export const javascript: Config[] = [
  eslintJavascriptPlugin.configs.recommended,
  {
    rules: {
      'arrow-body-style': ['error', 'always'],
      'no-console': 'warn',
      'no-else-return': 'error',
    },
  },
];
