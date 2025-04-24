import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export type Config = FlatConfig.Config;

export interface OptionsConfig {
  destructuring?: boolean;
  ignores?: boolean;
  imports?: boolean;
  javascript?: boolean;
  jsonc?: boolean;
  preferArrow?: boolean;
  prettier?: boolean;
  react?: boolean;
  sortPackageJson?: boolean;
  sortTsconfig?: boolean;
  typescript?: boolean;
}
