import { eslintConfigs } from './configs/eslint';
import { prettierConfigs } from './configs/prettier';
import { typescriptConfigs } from './configs/typescript';
import type { Config } from './types';

export const configs: Record<string, Config[]> = {
  eslint: eslintConfigs,
  prettier: prettierConfigs,
  typescript: typescriptConfigs,
};
