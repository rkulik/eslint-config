import { describe, expect, jest, test } from '@jest/globals';
import { isPackageExists } from 'local-pkg';

import rkulik from '../src';
import {
  destructuring,
  ignores,
  imports,
  javascript,
  jsonc,
  preferArrow,
  prettier,
  react,
  tailwindcss,
  typescript,
} from '../src/configs';

jest.mock('local-pkg', () => {
  return {
    isPackageExists: jest.fn(),
  };
});

const mockedIsPackageExists = isPackageExists as jest.MockedFunction<typeof isPackageExists>;

describe('factory', () => {
  describe('rkulik', () => {
    test('should return default configs', () => {
      mockedIsPackageExists.mockReturnValue(true);
      expect(rkulik()).toEqual([
        ...destructuring,
        ...ignores,
        ...imports,
        ...javascript,
        ...preferArrow,
        ...prettier,
        ...react,
        ...tailwindcss,
        ...typescript,
        ...jsonc,
      ]);
    });

    test('should include user configs', () => {
      mockedIsPackageExists.mockReturnValue(true);
      expect(rkulik({}, { ignores: ['**/dist'] }, [{ ignores: ['**/build'] }, { rules: { semi: 'error' } }])).toEqual([
        ...destructuring,
        ...ignores,
        ...imports,
        ...javascript,
        ...preferArrow,
        ...prettier,
        ...react,
        ...tailwindcss,
        ...typescript,
        ...jsonc,
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
        ...preferArrow,
        ...prettier,
        ...react,
        ...tailwindcss,
        ...typescript,
        ...jsonc,
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
        ...preferArrow,
        ...prettier,
        ...jsonc,
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
          preferArrow: false,
          prettier: false,
          react: true,
          tailwindcss: true,
          typescript: true,
          jsonc: false,
        }),
      ).toEqual([...react, ...tailwindcss, ...typescript]);
    });
  });
});
