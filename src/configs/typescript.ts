import { pluginTypeScript } from '../plugins';
import type { Config } from '../types';

export const typescript: Config[] = [
  ...pluginTypeScript.configs.recommended,
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
