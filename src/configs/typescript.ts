import typeScriptConfig from 'typescript-eslint';

import { preferArrowPlugin } from '../plugins';
import type { Config } from '../types';

export const typescriptConfigs: Config[] = [
  ...typeScriptConfig.configs.recommended,
  {
    plugins: {
      'prefer-arrow': preferArrowPlugin,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'prefer-arrow/prefer-arrow-functions': 'error',
    },
  },
];
