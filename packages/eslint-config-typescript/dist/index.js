"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eslintConfig = {
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
};
exports.default = exports.eslintConfig;
//# sourceMappingURL=index.js.map