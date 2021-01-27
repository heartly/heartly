require('@rushstack/eslint-patch/modern-module-resolution')

export type EslintConfig = {
  root: boolean
  parser: string
  plugins: string[]
  extends: string[]
  parserOptions: {
    ecmaVersion: number
    sourceType: string
  }
}

export const eslintConfig = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'json', 'jest', 'filenames', 'import', '@typescript-eslint'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
} as EslintConfig

module.exports = eslintConfig
