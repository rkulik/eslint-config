import { destructuringConfigs } from './configs/destructuring';
import { eslintConfigs } from './configs/eslint';
import { importConfigs } from './configs/import';
import { prettierConfigs } from './configs/prettier';
import { typescriptConfigs } from './configs/typescript';
import type { Config } from './types';

export const configs: Record<string, Config[]> = {
  destructuring: destructuringConfigs,
  eslint: eslintConfigs,
  import: importConfigs,
  prettier: prettierConfigs,
  typescript: typescriptConfigs,
};
