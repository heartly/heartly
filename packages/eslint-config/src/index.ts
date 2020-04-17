export type EslintConfig = {
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
  plugins: ['react', 'standard', 'prettier', 'json', 'jest', 'filenames', 'import', 'markdown'],
  extends: ['standard', 'plugin:react/recommended', 'prettier/react', 'plugin:prettier/recommended'],
  globals: {
    expect: true,
    test: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
} as EslintConfig

module.exports = eslintConfig
