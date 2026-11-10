import { isPackageExists } from 'local-pkg';

import {
  destructuring,
  ignores,
  imports,
  javascript,
  jsonc,
  preferArrowFunctions,
  prettier,
  react,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  typescript,
} from './configs';
import type { Config, OptionsConfig } from './types';
import { combineConfigs } from './utils';

export const rkulik = (options: OptionsConfig = {}, ...userConfigs: (Config | Config[])[]): Config[] => {
  const {
    destructuring: includeDestructuring = true,
    ignores: includeIgnores = true,
    imports: includeImports = true,
    javascript: includeJavascript = true,
    jsonc: includeJsonc = true,
    preferArrowFunctions: includePreferArrowFunctions = true,
    prettier: includePrettier = true,
    react: includeReact = isPackageExists('react'),
    sortPackageJson: includeSortPackageJson = true,
    sortTsconfig: includeSortTsconfig = isPackageExists('typescript'),
    stylistic: includeStylistic = true,
    typescript: includeTypescript = isPackageExists('typescript'),
  } = options;

  const configs: (Config | Config[])[] = [
    includeDestructuring ? destructuring : [],
    includeIgnores ? ignores : [],
    includeImports ? imports : [],
    includeJavascript ? javascript : [],
    includePreferArrowFunctions ? preferArrowFunctions : [],
    includePrettier ? prettier : [],
    includeReact ? react : [],
    includeStylistic ? stylistic : [],
    includeTypescript ? typescript : [],
    includeJsonc ? jsonc : [],
    includeJsonc && includeSortPackageJson ? sortPackageJson : [],
    includeJsonc && includeSortTsconfig ? sortTsconfig : [],
    ...userConfigs,
  ];

  return combineConfigs(...configs);
};
