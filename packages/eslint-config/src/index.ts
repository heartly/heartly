require('@rushstack/eslint-patch/modern-module-resolution')

export type EslintConfig = {
  root: boolean
  parser: string
  plugins: string[]
  extends: string[]
  globals: {
    expect: boolean
    test: boolean
  }
  parserOptions: {
    ecmaVersion: number
    sourceType: string
  }
}

export const eslintConfig = {
  root: true,
  plugins: ['standard', 'prettier', 'json', 'jest', 'filenames', 'import', 'markdown'],
  extends: ['standard', 'plugin:prettier/recommended'],
  globals: {
    expect: true,
    test: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
} as EslintConfig

module.exports = eslintConfig
