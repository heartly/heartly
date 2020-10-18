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
    ecmaVersion: 2020,
    sourceType: 'module',
  },
} as EslintConfig

module.exports = eslintConfig
