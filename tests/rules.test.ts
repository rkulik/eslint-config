import { describe, expect, jest, test } from '@jest/globals';
import { Linter } from 'eslint';
import type { isPackageExists } from 'local-pkg';

const mockedIsPackageExists = jest.fn<typeof isPackageExists>();

jest.unstable_mockModule('local-pkg', () => {
  return {
    isPackageExists: mockedIsPackageExists,
  };
});

const { rkulik } = await import('../src');

const lint = (code: string): string[] => {
  mockedIsPackageExists.mockReturnValue(false);
  const linter = new Linter({ configType: 'flat' });
  const messages = linter.verify(code, rkulik() as Linter.Config[], 'file.js');

  return messages.map((message) => {
    return message.ruleId ?? '';
  });
};

describe('rules', () => {
  describe('curly', () => {
    test('should report braceless if statements', () => {
      expect(lint('const check = (value) => {\n  if (value) return 1;\n\n  return 0;\n};\n\ncheck(1);\n')).toContain(
        'curly',
      );
    });

    test('should not report if statements with braces', () => {
      expect(
        lint('const check = (value) => {\n  if (value) {\n    return 1;\n  }\n\n  return 0;\n};\n\ncheck(1);\n'),
      ).not.toContain('curly');
    });
  });

  describe('padding before return', () => {
    test('should report a missing blank line before return', () => {
      expect(
        lint('const double = (value) => {\n  const result = value * 2;\n  return result;\n};\n\ndouble(1);\n'),
      ).toContain('@stylistic/padding-line-between-statements');
    });

    test('should not report a return that is the only statement in its block', () => {
      expect(lint('const double = (value) => {\n  return value * 2;\n};\n\ndouble(1);\n')).not.toContain(
        '@stylistic/padding-line-between-statements',
      );
    });
  });
});
