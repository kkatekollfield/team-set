import js from "@eslint/js";
import globals from "globals";

export default [
    {
        ignores: ["dist/**", "node_modules/**", "coverage/**"],
    },
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {},
    },
];