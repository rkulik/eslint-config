import { eslintImportXPlugin } from '../plugins';
import type { Config } from '../types';

export const imports: Config[] = [
  {
    plugins: {
      'import-x': eslintImportXPlugin,
    },
    rules: {
      'import-x/no-default-export': 'error',
      'import-x/order': [
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
    },
  },
];
