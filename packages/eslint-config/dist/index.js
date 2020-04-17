"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eslintConfig = {
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
};
module.exports = exports.eslintConfig;
