import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';
import vitest from '@vitest/eslint-plugin';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
        pragma: 'React',
        fragment: 'Fragment',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      vitest,
      'testing-library': testingLibrary,
      'jest-dom': jestDom,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off', // Disable the rule that requires React in scope
      // PropTypes validation rules
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/no-unused-prop-types': 'off',
    },
  },
  eslintConfigPrettier,
];
