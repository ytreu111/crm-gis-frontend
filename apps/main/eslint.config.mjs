import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { FlatCompat } from '@eslint/eslintrc'
import importPlugin from 'eslint-plugin-import'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs['recommended-latest'],
  ...compat.config(reactPlugin.configs.recommended),
  ...compat.config(reactPlugin.configs['jsx-runtime']),
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  ...compat.config({
    extends: [
      'plugin:@next/next/recommended',
    ],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: true,
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          'groups': [
            'type',
            'builtin',
            'external',
            'index',
            'internal',
            'sibling',
            'parent',
            'object',
          ],
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/prop-types': 'off',
    },
  }),
)