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
  plugins: ['react', 'prettier', 'json', 'jest', 'filenames', 'import', '@typescript-eslint'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
} as EslintConfig

module.exports = eslintConfig
