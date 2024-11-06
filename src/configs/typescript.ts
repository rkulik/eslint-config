import typeScriptConfig from 'typescript-eslint';

import { importPlugin, preferArrowPlugin } from '../plugins';
import type { Config } from '../types';

export const typescriptConfigs: Config[] = [
  ...typeScriptConfig.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      'prefer-arrow': preferArrowPlugin,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/no-default-export': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [
            ['external', 'internal'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      'prefer-arrow/prefer-arrow-functions': 'error',
    },
  },
];
