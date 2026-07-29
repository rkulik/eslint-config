import { eslintJsoncPlugin } from '../plugins';
import type { Config } from '../types';

const JSON_FILES = ['*.json', '**/*.json', '*.json5', '**/*.json5', '*.jsonc', '**/*.jsonc'];

// Upstream ships its rule set in an entry without `files`, which would enable every jsonc rule on
// every linted file, not just JSON.
const scopeToJsonFiles = (config: Config): Config => {
  if (config.rules && !config.files) {
    return { ...config, files: JSON_FILES };
  }

  return config;
};

export const jsonc: Config[] = [
  ...eslintJsoncPlugin.configs['flat/recommended-with-jsonc'].map(scopeToJsonFiles),
  {
    files: JSON_FILES,
    rules: {
      'jsonc/sort-array-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '.*',
        },
      ],
      'jsonc/sort-keys': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^$',
        },
      ],
    },
  },
];
