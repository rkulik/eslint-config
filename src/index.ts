import { eslintConfigs } from './configs/eslint';
import { typescriptConfigs } from './configs/typescript';
import type { Config } from './types';

export const configs: Record<string, Config[]> = {
  eslint: eslintConfigs,
  typescript: typescriptConfigs,
};
