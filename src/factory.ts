import { isPackageExists } from 'local-pkg';

import {
  destructuring,
  ignores,
  imports,
  javascript,
  preferArrow,
  prettier,
  react,
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
    javascript: includeJavaScript = true,
    preferArrow: includePreferArrow = true,
    prettier: includePrettier = true,
    react: includeReact = isPackageExists('react'),
    tailwindcss: includeTailwindCss = isPackageExists('tailwindcss'),
    typescript: includeTypeScript = isPackageExists('typescript'),
  } = options;

  const configs: (Config | Config[])[] = [
    includeDestructuring ? destructuring : [],
    includeIgnores ? ignores : [],
    includeImports ? imports : [],
    includeJavaScript ? javascript : [],
    includePreferArrow ? preferArrow : [],
    includePrettier ? prettier : [],
    includeReact ? react : [],
    includeTailwindCss ? tailwindcss : [],
    includeTypeScript ? typescript : [],
    ...userConfigs,
  ];

  return combineConfigs(...configs);
};
