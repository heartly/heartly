require('@rushstack/eslint-patch/modern-module-resolution')

export type EslintConfig = {
  root: boolean
  parser: string
  plugins: string[]
  extends: string[]
}

export const eslintConfig = {
  root: true,
  plugins: ['prettier'],
} as EslintConfig

module.exports = eslintConfig
