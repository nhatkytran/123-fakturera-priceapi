import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import jsdoc from 'eslint-plugin-jsdoc';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, jsdoc },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_|^(request|reply)$',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'eol-last': ['error', 'always'],
      'jsdoc/require-jsdoc': [
        'warn',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true,
          },
        },
      ],
      'jsdoc/check-alignment': 'warn',
      'jsdoc/check-tag-names': 'warn',
      'jsdoc/check-param-names': 'warn',
    },
  },
]);
