import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {languageOptions: { globals: {...globals.browser, ...globals.node} }},
    pluginJs.configs.recommended,
    {
        rules: {
            "no-var": "error",
            "semi": "warn",
            "quotes": ["error", "double"],
            "indent": "warn",
            "no-multi-spaces": "warn",
            "space-before-function-paren": ["error", "never"],
            "space-in-parens": ["error", "never", { "exceptions": ["{}", "[]"] }],
            "no-extra-semi": "error",
            "no-unused-vars": "error",
            "no-trailing-spaces": "error",
            "no-tabs": "warn",
            "no-multiple-empty-lines": "warn",
            "no-use-before-define": "error"
        }
    }
];
