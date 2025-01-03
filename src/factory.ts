import { isPackageExists } from 'local-pkg';

import {
  destructuring,
  ignores,
  imports,
  javascript,
  jsonc,
  preferArrow,
  prettier,
  react,
  sortPackageJson,
  sortTsconfig,
  tailwindcss,
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
    jsonc: includeJconc = true,
    preferArrow: includePreferArrow = true,
    prettier: includePrettier = true,
    react: includeReact = isPackageExists('react'),
    sortPackageJson: includeSortPackageJson = true,
    sortTsconfig: includeSortTsconfig = isPackageExists('typescript'),
    tailwindcss: includeTailwindCss = isPackageExists('tailwindcss'),
    typescript: includeTypescript = isPackageExists('typescript'),
  } = options;

  const configs: (Config | Config[])[] = [
    includeDestructuring ? destructuring : [],
    includeIgnores ? ignores : [],
    includeImports ? imports : [],
    includeJavascript ? javascript : [],
    includePreferArrow ? preferArrow : [],
    includePrettier ? prettier : [],
    includeReact ? react : [],
    includeTailwindCss ? tailwindcss : [],
    includeTypescript ? typescript : [],
    includeJconc ? jsonc : [],
    includeJconc && includeSortPackageJson ? sortPackageJson : [],
    includeJconc && includeSortTsconfig ? sortTsconfig : [],
    ...userConfigs,
  ];

  return combineConfigs(...configs);
};
