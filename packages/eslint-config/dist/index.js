"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eslintConfig = {
    plugins: ["react", "prettier", "json", "jest", "filenames", "import"],
    extends: [
        "standard",
        "plugin:react/recommended",
        "prettier/react",
        "plugin:prettier/recommended",
    ],
    globals: {
        expect: true,
        test: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
};
exports.default = exports.eslintConfig;
//# sourceMappingURL=index.js.map