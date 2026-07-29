import { describe, expect, jest, test } from '@jest/globals';
import type { isPackageExists } from 'local-pkg';

const mockedIsPackageExists = jest.fn<typeof isPackageExists>();

jest.unstable_mockModule('local-pkg', () => {
  return {
    isPackageExists: mockedIsPackageExists,
  };
});

const { default: rkulik } = await import('../src');
const {
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
  typescript,
} = await import('../src/configs');

describe('factory', () => {
  describe('rkulik', () => {
    test('should return default configs', () => {
      mockedIsPackageExists.mockReturnValue(true);
      expect(rkulik()).toEqual([
        ...destructuring,
        ...ignores,
        ...imports,
        ...javascript,
        ...preferArrowFunctions,
        ...prettier,
        ...react,
        ...typescript,
        ...jsonc,
        ...sortPackageJson,
        ...sortTsconfig,
      ]);
    });

    test('should include user configs', () => {
      mockedIsPackageExists.mockReturnValue(true);
      expect(rkulik({}, { ignores: ['**/dist'] }, [{ ignores: ['**/build'] }, { rules: { semi: 'error' } }])).toEqual([
        ...destructuring,
        ...ignores,
        ...imports,
        ...javascript,
        ...preferArrowFunctions,
        ...prettier,
        ...react,
        ...typescript,
        ...jsonc,
        ...sortPackageJson,
        ...sortTsconfig,
        { ignores: ['**/dist'] },
        { ignores: ['**/build'] },
        { rules: { semi: 'error' } },
      ]);
    });

    test('should not include empty user configs', () => {
      mockedIsPackageExists.mockReturnValue(true);
      expect(rkulik({}, {}, [], [{}], [{}, { ignores: ['**/dist'] }])).toEqual([
        ...destructuring,
        ...ignores,
        ...imports,
        ...javascript,
        ...preferArrowFunctions,
        ...prettier,
        ...react,
        ...typescript,
        ...jsonc,
        ...sortPackageJson,
        ...sortTsconfig,
        { ignores: ['**/dist'] },
      ]);
    });

    test('should include configs based on installed packages', () => {
      mockedIsPackageExists.mockReturnValue(false);
      expect(rkulik()).toEqual([
        ...destructuring,
        ...ignores,
        ...imports,
        ...javascript,
        ...preferArrowFunctions,
        ...prettier,
        ...jsonc,
        ...sortPackageJson,
      ]);
    });

    test('should include configs based on options', () => {
      mockedIsPackageExists.mockReturnValue(false);
      expect(
        rkulik({
          destructuring: false,
          ignores: false,
          imports: false,
          javascript: false,
          preferArrowFunctions: false,
          prettier: false,
          react: true,
          typescript: true,
          jsonc: false,
          sortPackageJson: false,
          sortTsconfig: false,
        }),
      ).toEqual([...react, ...typescript]);
    });

    test('should not include configs if packages are installed but excluded in options', () => {
      mockedIsPackageExists.mockReturnValue(true);
      expect(
        rkulik({
          destructuring: false,
          ignores: false,
          imports: false,
          javascript: false,
          preferArrowFunctions: false,
          prettier: false,
          react: false,
          typescript: false,
          jsonc: false,
          sortPackageJson: false,
          sortTsconfig: false,
        }),
      ).toEqual([]);
    });

    test('should not include sort package json if jsonc is excluded', () => {
      mockedIsPackageExists.mockReturnValue(true);
      expect(rkulik({ jsonc: false })).toEqual([
        ...destructuring,
        ...ignores,
        ...imports,
        ...javascript,
        ...preferArrowFunctions,
        ...prettier,
        ...react,
        ...typescript,
      ]);
    });

    test('should not include sort tsconfig if jsonc is excluded', () => {
      mockedIsPackageExists.mockReturnValue(true);
      expect(rkulik({ jsonc: false })).toEqual([
        ...destructuring,
        ...ignores,
        ...imports,
        ...javascript,
        ...preferArrowFunctions,
        ...prettier,
        ...react,
        ...typescript,
      ]);
    });
  });
});
