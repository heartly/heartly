export declare type EslintConfig = {
    parser: string;
    plugins: string[];
    extends: string[];
    globals: {
        expect: boolean;
        test: boolean;
    };
    parserOptions: {
        ecmaVersion: number;
        sourceType: string;
    };
};
export declare const eslintConfig: EslintConfig;
export default eslintConfig;
