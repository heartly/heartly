export type EslintConfig = {
  parser: string
  plugins: string[]
  extends: string[]
  parserOptions: {
    ecmaVersion: number
    sourceType: string
  }
}

export const eslintConfig = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', 'json', 'filenames', 'import', '@typescript-eslint'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
} as EslintConfig

module.exports = eslintConfig
