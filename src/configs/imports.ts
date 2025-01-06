import { eslintImportPlugin } from '../plugins';
import type { Config } from '../types';

export const imports: Config[] = [
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      import: eslintImportPlugin,
    },
    rules: {
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
    },
  },
];
