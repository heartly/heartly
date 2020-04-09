export type EslintConfig = {
  parser: string;
  plugins: string[];
  extends: string[];
  parserOptions: {
    ecmaVersion: number;
    sourceType: string;
  };
};

export const eslintConfig = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "prettier",
    "json",
    "jest",
    "filenames",
    "import",
    "@typescript-eslint",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
} as EslintConfig;

export default eslintConfig;
