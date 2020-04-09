export type PrettierConfig = {
  semi: boolean;
  trailingComma: string;
  printWidth: number;
  useTabs: boolean;
  singleQuote: boolean;
  jsxSingleQuote: boolean;
};

export const prettierConfig = {
  semi: false,
  trailingComma: "all",
  printWidth: 120,
  useTabs: false,
  singleQuote: true,
  jsxSingleQuote: true, // only needed for React projects
} as PrettierConfig;

export default prettierConfig;
