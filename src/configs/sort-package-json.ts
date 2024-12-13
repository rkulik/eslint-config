import { Config } from '../types';

export const sortPackageJson: Config[] = [
  {
    files: ['**/package.json'],
    rules: {
      'jsonc/sort-array-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^files$',
        },
      ],
      'jsonc/sort-keys': [
        'error',
        {
          order: [
            'name',
            'type',
            'version',
            'private',
            'packageManager',
            'description',
            'author',
            'license',
            'homepage',
            'repository',
            'bugs',
            'keywords',
            'exports',
            'main',
            'module',
            'types',
            'bin',
            'files',
            'engines',
            'scripts',
            'peerDependencies',
            'dependencies',
            'devDependencies',
            'prettier',
          ],
          pathPattern: '^$',
        },
        {
          order: ['type', 'url', 'directory'],
          pathPattern: '^repository$',
        },
        {
          order: ['url', 'email'],
          pathPattern: '^bugs$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        },
        {
          order: ['types', 'default'],
          pathPattern: '^exports.*.*$',
        },
        {
          order: ['import', 'require'],
          pathPattern: '^exports.*$',
        },
      ],
    },
  },
];
